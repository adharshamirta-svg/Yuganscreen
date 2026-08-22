from pathlib import Path
import chromadb
from sentence_transformers import SentenceTransformer

DB_PATH = Path(__file__).resolve().parent.parent / "data" / "chroma"

model = SentenceTransformer("all-MiniLM-L6-v2")

client = chromadb.PersistentClient(path=str(DB_PATH))

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

embeddings = model.encode(documents).tolist()

collection.add(
    ids=[f"doc_{i}" for i in range(len(documents))],
    documents=documents,
    embeddings=embeddings
)

print("✅ Yugan Screens knowledge base created!")
print("Documents:", collection.count())