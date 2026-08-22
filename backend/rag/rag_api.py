from flask import Flask, request, jsonify
from flask_cors import CORS

from chatbot import ask_chatbot


app = Flask(__name__)

CORS(app)


@app.route("/")
def home():
    return jsonify({
        "success": True,
        "message": "Yugan Screens RAG API is running!"
    })


@app.route("/health")
def health():
    return jsonify({
        "success": True,
        "status": "healthy"
    })


@app.route("/chat", methods=["POST"])
def chat():

    try:

        data = request.get_json(silent=True) or {}

        question = data.get("message", "").strip()

        if not question:
            return jsonify({
                "success": False,
                "message": "Please enter a message."
            }), 400

        print(f"User question: {question}")

        answer = ask_chatbot(question)

        print(f"Bot answer: {answer}")

        return jsonify({
            "success": True,
            "message": answer
        })

    except Exception as error:

        print(f"Chat error: {error}")

        return jsonify({
            "success": False,
            "message": "Sorry, something went wrong."
        }), 500