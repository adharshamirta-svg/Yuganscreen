import os
from pathlib import Path

# Reduce memory/CPU usage on Render
os.environ["TOKENIZERS_PARALLELISM"] = "false"
os.environ["OMP_NUM_THREADS"] = "1"

import chromadb
from sentence_transformers import SentenceTransformer


# backend/data/chroma
DB_PATH = Path(__file__).resolve().parent.parent / "data" / "chroma"

# Load the embedding model only once
_model = None


def get_model():
    global _model

    if _model is None:
        print("Loading embedding model...")
        _model = SentenceTransformer("all-MiniLM-L6-v2")
        print("Embedding model loaded.")

    return _model


# Create ChromaDB client only once
print(f"Loading ChromaDB from: {DB_PATH}")

client = chromadb.PersistentClient(
    path=str(DB_PATH)
)

collection = client.get_collection(
    name="yugan_screens"
)

print("ChromaDB collection loaded.")


def retrieve_documents(query, number_of_results=3):

    model = get_model()

    query_embedding = model.encode(
        query,
        convert_to_numpy=True
    ).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=number_of_results
    )

    documents = results.get("documents", [[]])[0]

    return documents