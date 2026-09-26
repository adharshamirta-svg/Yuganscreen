"""
Hybrid RAG Ingestion Pipeline for Yugan Screens
=================================================

Reads all .txt files from the documents/ folder,
splits them into smart overlapping chunks, generates
Gemini embeddings, and stores everything in ChromaDB.

Re-run this script whenever you update the knowledge base.
"""

from pathlib import Path
import os
import re
import time

import chromadb
from google import genai
from dotenv import load_dotenv

load_dotenv()

# ─── Paths ───────────────────────────────────────

DOCS_DIR = Path(__file__).resolve().parent / "documents"
DB_PATH = Path(__file__).resolve().parent.parent / "data" / "chroma"

# ─── Gemini client ───────────────────────────────

gemini_client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

EMBEDDING_MODEL = "gemini-embedding-001"

# ─── ChromaDB ────────────────────────────────────

client = chromadb.PersistentClient(
    path=str(DB_PATH)
)

# Remove old collection for a clean rebuild
try:
    client.delete_collection(name="yugan_screens")
    print("🗑️  Old collection deleted.")
except Exception:
    print("ℹ️  No old collection to delete.")

collection = client.get_or_create_collection(
    name="yugan_screens"
)


# ─── Chunking helpers ────────────────────────────

def read_all_documents():
    """Read every .txt file in the documents/ folder."""

    documents = []

    for txt_file in sorted(DOCS_DIR.glob("*.txt")):

        content = txt_file.read_text(encoding="utf-8").strip()

        if content:
            documents.append({
                "filename": txt_file.name,
                "content": content
            })

            print(f"  📄 {txt_file.name} ({len(content)} chars)")

    return documents


def chunk_qa_document(text, filename):
    """Split Q&A-formatted documents into individual Q/A pairs."""

    chunks = []

    # Split on lines starting with "Q:"
    qa_blocks = re.split(r"\n(?=Q:)", text)

    for block in qa_blocks:
        block = block.strip()

        if block and len(block) > 20:
            chunks.append({
                "text": block,
                "source": filename,
                "type": "qa"
            })

    return chunks


def chunk_structured_document(text, filename):
    """
    Split product/service docs into sections.
    Splits on double newlines or numbered headers.
    """

    chunks = []

    # Try splitting on double-newline separated blocks
    sections = re.split(r"\n\n+", text)

    current_chunk = ""

    for section in sections:
        section = section.strip()

        if not section:
            continue

        # If adding this section stays under 500 chars, merge
        if len(current_chunk) + len(section) < 500:
            current_chunk += "\n\n" + section if current_chunk else section
        else:
            if current_chunk and len(current_chunk) > 30:
                chunks.append({
                    "text": current_chunk,
                    "source": filename,
                    "type": "info"
                })
            current_chunk = section

    # Don't forget the last chunk
    if current_chunk and len(current_chunk) > 30:
        chunks.append({
            "text": current_chunk,
            "source": filename,
            "type": "info"
        })

    return chunks


def chunk_documents(raw_documents):
    """Smart chunking based on document type."""

    all_chunks = []

    for doc in raw_documents:

        filename = doc["filename"]
        content = doc["content"]

        if "FAQ" in filename.upper():
            chunks = chunk_qa_document(content, filename)
        else:
            chunks = chunk_structured_document(content, filename)

        all_chunks.extend(chunks)
        print(f"  🔪 {filename} → {len(chunks)} chunks")

    return all_chunks


# ─── Embedding + Storage ────────────────────────

def embed_and_store(chunks):
    """Generate Gemini embeddings and store in ChromaDB."""

    ids = []
    documents = []
    embeddings = []
    metadatas = []

    total = len(chunks)

    for i, chunk in enumerate(chunks):

        print(
            f"  ⚡ Embedding chunk {i + 1}/{total} "
            f"({chunk['source']})..."
        )

        result = gemini_client.models.embed_content(
            model=EMBEDDING_MODEL,
            contents=chunk["text"]
        )

        ids.append(f"chunk_{i}")
        documents.append(chunk["text"])
        embeddings.append(result.embeddings[0].values)
        metadatas.append({
            "source": chunk["source"],
            "type": chunk["type"]
        })

        # Small delay to avoid rate limits
        if (i + 1) % 10 == 0:
            time.sleep(0.5)

    collection.add(
        ids=ids,
        documents=documents,
        embeddings=embeddings,
        metadatas=metadatas
    )

    return len(ids)


# ─── Main ────────────────────────────────────────

if __name__ == "__main__":

    print("\n🚀 Yugan Screens — Hybrid RAG Ingestion")
    print("=" * 45)

    print("\n📂 Reading documents...")
    raw_docs = read_all_documents()

    if not raw_docs:
        print("❌ No .txt files found in documents/")
        exit(1)

    print(f"\n🔪 Chunking {len(raw_docs)} documents...")
    chunks = chunk_documents(raw_docs)

    print(f"\n⚡ Embedding {len(chunks)} chunks with Gemini...")
    count = embed_and_store(chunks)

    print(f"\n✅ Knowledge base ready!")
    print(f"📚 Total chunks stored: {count}")
    print(f"💾 Database path: {DB_PATH}")