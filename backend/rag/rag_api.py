from flask import Flask, request, jsonify
from flask_cors import CORS

from chatbot import ask_chatbot


# Create Flask application
app = Flask(__name__)

# Allow your React frontend to communicate with this API
CORS(app)


# --------------------------------------------------
# HOME / HEALTH CHECK
# --------------------------------------------------

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "success": True,
        "message": "Yugan Screens RAG API is running!"
    })


# --------------------------------------------------
# HEALTH CHECK
# --------------------------------------------------

@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "success": True,
        "status": "healthy"
    })


# --------------------------------------------------
# CHAT API
# --------------------------------------------------

@app.route("/chat", methods=["POST"])
def chat():

    try:
        # Read JSON sent by React
        data = request.get_json(silent=True) or {}

        # Get user's message
        question = data.get("message", "").strip()

        # Validate message
        if not question:
            return jsonify({
                "success": False,
                "message": "Please enter a message."
            }), 400

        print(f"📩 User: {question}")

        # Send question to RAG + OpenAI chatbot
        answer = ask_chatbot(question)

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
            "message": "Sorry, something went wrong while processing your question."
        }), 500


# --------------------------------------------------
# RUN LOCALLY
# --------------------------------------------------

if __name__ == "__main__":

    print("🚀 Starting Yugan Screens RAG API...")
    print("📍 Local URL: http://localhost:5000")
    print("💬 Chat endpoint: http://localhost:5000/chat")

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )