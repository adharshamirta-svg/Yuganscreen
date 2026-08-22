from flask import Flask, request, jsonify
from flask_cors import CORS

from chatbot import ask_chatbot

app = Flask(__name__)

# Allow your React frontend to communicate with this API
CORS(app)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "success": True,
        "message": "Yugan Screens RAG API is running!"
    })


@app.route("/chat", methods=["POST"])
def chat():

    try:

        data = request.get_json()

        if not data or "message" not in data:
            return jsonify({
                "success": False,
                "message": "Please provide a message."
            }), 400

        user_message = data["message"].strip()

        if not user_message:
            return jsonify({
                "success": False,
                "message": "Message cannot be empty."
            }), 400

        # Send question to your existing RAG chatbot
        answer = ask_chatbot(user_message)

        return jsonify({
            "success": True,
            "message": answer
        })

    except Exception as error:

        print("Chatbot error:", error)

        return jsonify({
            "success": False,
            "message": "Sorry, I couldn't process your request."
        }), 500


if __name__ == "__main__":

    print("🤖 Yugan Screens RAG API starting...")
    print("📡 API available at http://localhost:8000")

    app.run(
        host="0.0.0.0",
        port=8000,
        debug=True
    )