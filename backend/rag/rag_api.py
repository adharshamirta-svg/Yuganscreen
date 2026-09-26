"""
Yugan Screens — Hybrid RAG API
================================

Flask API serving the hybrid RAG chatbot.
Supports conversation history for multi-turn chat.
"""

from flask import Flask, request, jsonify
from flask_cors import CORS

from chatbot import ask_chatbot


# ─── Create Flask App ────────────────────────────

app = Flask(__name__)

# Allow the React frontend to communicate
CORS(app)


# ─── Health Check ────────────────────────────────

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "success": True,
        "message": "Yugan Screens Hybrid RAG API is running!"
    })


@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "success": True,
        "status": "healthy"
    })


# ─── Chat Endpoint ──────────────────────────────

@app.route("/chat", methods=["POST"])
def chat():

    try:
        # Read JSON sent by React
        data = request.get_json(silent=True) or {}

        # Get user's message
        question = data.get("message", "").strip()

        # Get conversation history (optional)
        history = data.get("history", [])

        # Validate message
        if not question:
            return jsonify({
                "success": False,
                "message": "Please enter a message."
            }), 400

        print(f"📩 User: {question}")

        if history:
            print(f"📜 History: {len(history)} turns")

        # Send question to hybrid RAG chatbot
        answer = ask_chatbot(
            question,
            history=history
        )

        print(f"🤖 Assistant: {answer}")

        # Send answer back to React
        return jsonify({
            "success": True,
            "message": answer
        }), 200

    except Exception as error:

        print(f"❌ Chat error: {error}")

        return jsonify({
            "success": False,
            "message": (
                "Sorry, something went wrong while "
                "processing your question."
            )
        }), 500


# ─── Suggest Quick Replies ───────────────────────

@app.route("/suggestions", methods=["GET"])
def suggestions():
    """Return suggested quick-reply topics."""

    return jsonify({
        "success": True,
        "suggestions": [
            "What products do you offer?",
            "What are the prices?",
            "Do you provide installation?",
            "How can I get a free quote?",
            "Where are you located?"
        ]
    })


# ─── Run Locally ────────────────────────────────

if __name__ == "__main__":

    print("🚀 Starting Yugan Screens Hybrid RAG API...")
    print("📍 Local URL: http://localhost:5000")
    print("💬 Chat endpoint: http://localhost:5000/chat")
    print("💡 Suggestions: http://localhost:5000/suggestions")

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )