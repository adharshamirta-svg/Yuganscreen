"""
Hybrid Retriever for Yugan Screens
====================================

Combines:
  1. Semantic search  — Gemini embeddings + ChromaDB vector similarity
  2. Keyword search   — Simple BM25-style term matching for exact phrases

Results from both are merged and deduplicated to give the best context
for answering customer questions.
"""

from pathlib import Path
import os
import re
import math
from collections import Counter

import chromadb
from google import genai
from dotenv import load_dotenv

load_dotenv()

# ─── Paths ───────────────────────────────────────

DB_PATH = Path(__file__).resolve().parent.parent / "data" / "chroma"

# ─── Gemini client ───────────────────────────────

gemini_client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

EMBEDDING_MODEL = "gemini-embedding-001"

# ─── ChromaDB ────────────────────────────────────

chroma_client = chromadb.PersistentClient(
    path=str(DB_PATH)
)

collection = chroma_client.get_collection(
    name="yugan_screens"
)


# ─── Embedding helper ───────────────────────────

def get_embedding(text):
    """Generate a Gemini embedding for a query string."""

    result = gemini_client.models.embed_content(
        model=EMBEDDING_MODEL,
        contents=text
    )

    return result.embeddings[0].values


# ─── Semantic (Vector) Search ────────────────────

def semantic_search(query, n_results=5):
    """
    Search ChromaDB using cosine similarity
    on Gemini embeddings.
    """

    query_embedding = get_embedding(query)

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
        include=["documents", "metadatas", "distances"]
    )

    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0]
    distances = results.get("distances", [[]])[0]

    scored = []

    for doc, meta, dist in zip(documents, metadatas, distances):

        # ChromaDB returns L2 distance; convert to a
        # similarity score between 0 and 1
        similarity = 1.0 / (1.0 + dist)

        scored.append({
            "text": doc,
            "source": meta.get("source", "unknown"),
            "type": meta.get("type", "info"),
            "score": similarity,
            "method": "semantic"
        })

    return scored


# ─── Keyword (BM25-style) Search ─────────────────

def tokenize(text):
    """Simple word tokenizer."""

    return re.findall(r"\w+", text.lower())


def bm25_score(query_tokens, doc_tokens, avg_dl, k1=1.5, b=0.75):
    """Simplified BM25 scoring."""

    dl = len(doc_tokens)
    doc_freq = Counter(doc_tokens)
    score = 0.0

    for token in query_tokens:
        tf = doc_freq.get(token, 0)

        if tf > 0:
            idf = math.log(1 + 1)  # simplified single-doc IDF
            numerator = tf * (k1 + 1)
            denominator = tf + k1 * (1 - b + b * (dl / max(avg_dl, 1)))
            score += idf * (numerator / denominator)

    return score


def keyword_search(query, n_results=5):
    """
    Retrieve all documents from ChromaDB and
    rank them with BM25-style keyword matching.
    """

    # Get all documents from the collection
    all_docs = collection.get(
        include=["documents", "metadatas"]
    )

    documents = all_docs.get("documents", [])
    metadatas = all_docs.get("metadatas", [])

    if not documents:
        return []

    query_tokens = tokenize(query)
    all_doc_tokens = [tokenize(doc) for doc in documents]
    avg_dl = sum(len(t) for t in all_doc_tokens) / max(len(all_doc_tokens), 1)

    scored = []

    for doc, meta, doc_tokens in zip(documents, metadatas, all_doc_tokens):

        score = bm25_score(query_tokens, doc_tokens, avg_dl)

        if score > 0:
            scored.append({
                "text": doc,
                "source": meta.get("source", "unknown"),
                "type": meta.get("type", "info"),
                "score": score,
                "method": "keyword"
            })

    # Sort by score descending
    scored.sort(key=lambda x: x["score"], reverse=True)

    return scored[:n_results]


# ─── Hybrid Merge ────────────────────────────────

def hybrid_search(query, n_results=6):
    """
    Merge semantic and keyword results.

    Deduplicates by document text, keeping the
    highest score per unique document.
    """

    semantic_results = semantic_search(query, n_results=n_results)
    keyword_results = keyword_search(query, n_results=n_results)

    # Merge and deduplicate
    seen = {}

    for result in semantic_results + keyword_results:

        text = result["text"]

        if text not in seen or result["score"] > seen[text]["score"]:
            seen[text] = result

    # Sort merged results by score
    merged = sorted(
        seen.values(),
        key=lambda x: x["score"],
        reverse=True
    )

    return merged[:n_results]


# ─── Public API ──────────────────────────────────

def retrieve_documents(query, number_of_results=5):
    """
    Main retrieval function used by chatbot.py.

    Returns a list of document strings ranked by
    hybrid (semantic + keyword) relevance.
    """

    results = hybrid_search(query, n_results=number_of_results)

    return [r["text"] for r in results]