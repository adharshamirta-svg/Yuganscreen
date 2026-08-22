import requests

from retrieve import retrieve_documents


OLLAMA_URL = "http://localhost:11434/api/generate"


def ask_chatbot(question):

    documents = retrieve_documents(question)

    context = "\n\n".join(documents)

    prompt = f"""
You are the official Yugan Screens customer assistant.

Answer the customer's question using ONLY the information
provided in the context below.

If the answer is not available in the context, say:

"I don't have that information yet. Please contact Yugan Screens
for more details."

Do not invent prices, products, warranties, locations or services.

Context:
{context}

Customer question:
{question}

Answer:
"""

    try:
        response = requests.post(
            OLLAMA_URL,
            json={
                "model": "llama3.2",
                "prompt": prompt,
                "stream": False
            },
            timeout=60
        )
        response.raise_for_status()
        return response.json()["response"]
    except requests.RequestException:
        for document in documents:
            if document.lstrip().startswith("A:"):
                return document.split("A:", 1)[1].strip()

        return documents[0] if documents else "I don't have that information yet."