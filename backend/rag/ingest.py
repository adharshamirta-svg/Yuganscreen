import os
from pathlib import Path

import chromadb
from sentence_transformers import SentenceTransformer

RAG_PATH = Path(__file__).resolve().parent
DOCUMENTS_PATH = RAG_PATH / "documents"
DB_PATH = RAG_PATH.parent / "data" / "chroma"

# Load embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")

# Create Chroma database
client = chromadb.PersistentClient(path=DB_PATH)

collection = client.get_or_create_collection(
    name="yugan_screens"
)

# Read documents
for filename in os.listdir(DOCUMENTS_PATH):

    filepath = os.path.join(DOCUMENTS_PATH, filename)

    if not filename.endswith(".txt"):
        continue

    with open(filepath, "r", encoding="utf-8") as file:
        text = file.read()

    # Split into smaller chunks
    chunks = [
        chunk.strip()
        for chunk in text.split("\n\n")
        if chunk.strip()
    ]

    for index, chunk in enumerate(chunks):

        embedding = model.encode(chunk).tolist()

        document_id = f"{filename}_{index}"

        collection.upsert(
            ids=[document_id],
            documents=[chunk],
            embeddings=[embedding],
            metadatas=[{
                "source": filename
            }]
        )

        print(f"Added: {document_id}")

print("Knowledge base created successfully.")