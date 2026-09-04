from pathlib import Path
import os

import chromadb
from google import genai
from dotenv import load_dotenv

load_dotenv()

DB_PATH = Path(__file__).resolve().parent.parent / "data" / "chroma"

# Gemini client
gemini_client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

EMBEDDING_MODEL = "gemini-embedding-001"

# ChromaDB
client = chromadb.PersistentClient(
    path=str(DB_PATH)
)

collection = client.get_collection(
    name="yugan_screens"
)


def get_embedding(text):

    result = gemini_client.models.embed_content(
        model=EMBEDDING_MODEL,
        contents=text
    )

    return result.embeddings[0].values


def retrieve_documents(query, number_of_results=3):

    query_embedding = get_embedding(query)

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=number_of_results
    )

    documents = results.get(
        "documents",
        [[]]
    )[0]

    return documents