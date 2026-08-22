import { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! 👋 I'm the Yugan Screens Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Automatically scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    const userMessage = input.trim();

    if (!userMessage || loading) return;

    // Add user message immediately
    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessages((previous) => [
        ...previous,
        {
          sender: "bot",
          text: data.message,
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((previous) => [
        ...previous,
        {
          sender: "bot",
          text: "Sorry, I couldn't connect to the Yugan Screens assistant. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] flex h-[600px] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between bg-[#0F766E] px-5 py-4 text-white">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-xl">
                🤖
              </div>

              <div>
                <h3 className="font-semibold">
                  Yugan Assistant
                </h3>

                <div className="flex items-center gap-2 text-xs opacity-90">
                  <span className="h-2 w-2 rounded-full bg-green-300"></span>
                  Online
                </div>
              </div>

            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full px-3 py-2 text-xl transition hover:bg-white/10"
              aria-label="Close chatbot"
            >
              ×
            </button>

          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-slate-50 p-4">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[82%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.sender === "user"
                      ? "rounded-br-md bg-[#0F766E] text-white"
                      : "rounded-bl-md bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.text}
                </div>

              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div className="mb-4 flex justify-start">

                <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">

                  <div className="flex gap-1">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce [animation-delay:150ms]">
                      ●
                    </span>
                    <span className="animate-bounce [animation-delay:300ms]">
                      ●
                    </span>
                  </div>

                </div>

              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {/* Input */}
          <div className="border-t bg-white p-3">

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">

              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our screens..."
                disabled={loading}
                className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E] text-white transition hover:bg-[#115E59] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                ➤
              </button>

            </div>

            <p className="mt-2 text-center text-[10px] text-slate-400">
              Yugan Screens Assistant
            </p>

          </div>

        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#0F766E] text-2xl text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#115E59]"
          aria-label="Open Yugan Screens chatbot"
        >
          💬
        </button>
      )}
    </>
  );
}

export default Chatbot;