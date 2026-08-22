from pathlib import Path

import chromadb
from sentence_transformers import SentenceTransformer

DB_PATH = Path(__file__).resolve().parent.parent / "data" / "chroma"

model = SentenceTransformer("all-MiniLM-L6-v2")

client = chromadb.PersistentClient(path=DB_PATH)

collection = client.get_collection(
    name="yugan_screens"
)


def retrieve_documents(query, number_of_results=3):

    query_embedding = model.encode(query).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=number_of_results
    )

    documents = results["documents"][0]

    return documents