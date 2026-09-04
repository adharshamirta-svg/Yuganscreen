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

# Remove old collection because it used
# all-MiniLM-L6-v2 embeddings
try:
    client.delete_collection(name="yugan_screens")
    print("🗑️ Old ChromaDB collection deleted.")
except Exception:
    print("ℹ️ No old collection found.")

collection = client.get_or_create_collection(
    name="yugan_screens"
)

documents = [
    "Q: Can the screens be customized?\nA: Yes, screen solutions can be customized according to the customer's requirements and measurements.",

    "Q: What products does Yugan Screens provide?\nA: Yugan Screens provides mosquito mesh window screens, pleated mesh doors and balcony invisible grills.",

    "Q: Do you provide installation?\nA: Yes, Yugan Screens provides screen installation services.",

    "Q: How can I get a quotation?\nA: Customers can use the Get Free Quote option or contact Yugan Screens through WhatsApp.",

    "Q: Where is Yugan Screens located?\nA: Yugan Screens serves customers in Chennai and surrounding areas."
]

print("🔄 Creating Gemini embeddings...")

embeddings = []

for i, document in enumerate(documents):

    print(f"Embedding document {i + 1}/{len(documents)}...")

    result = gemini_client.models.embed_content(
        model=EMBEDDING_MODEL,
        contents=document
    )

    embeddings.append(
        result.embeddings[0].values
    )

collection.add(
    ids=[f"doc_{i}" for i in range(len(documents))],
    documents=documents,
    embeddings=embeddings
)

print("✅ Yugan Screens knowledge base created!")
print("📚 Documents:", collection.count())