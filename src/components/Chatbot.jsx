import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiSend } from "react-icons/fi";
import "./Chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input, top_k: 5 }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.answer, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="chatbot-widget">
        <button onClick={() => setOpen(true)} className="chatbot-toggle" aria-label="Open chatbot">
          <span>💬</span>
        </button>
      </div>
      {open && createPortal(
        <div className="chatbot-modal" onClick={() => setOpen(false)}>
          <section className="chatbot-modal-content" onClick={e => e.stopPropagation()} aria-modal="true" role="dialog">
            <header className="chatbot-header" style={{width: '100%', display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.2rem', position: 'relative'}}>
              <div className="chatbot-avatar" style={{width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#fff', fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>🤖</div>
              <div className="chatbot-title" style={{ fontWeight: 600, fontSize: 18, letterSpacing: 0.2, flex: 1 }}>Viswa's Assistant</div>
              <button className="chatbot-close-btn" onClick={() => setOpen(false)} aria-label="Close chatbot">&times;</button>
            </header>
            <main className="chatbot-body" style={{flex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 12, overflowY: 'auto'}}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chatbot-bubble-row ${message.role === 'user' ? 'chatbot-bubble-row-user' : 'chatbot-bubble-row-assistant'}`}
                  style={{ alignItems: message.role === 'user' ? 'flex-end' : 'flex-start', display: 'flex', flexDirection: 'column' }}
                >
                  {message.role === 'assistant' && (
                    <div className="chatbot-meta chatbot-meta-assistant">
                      <span className="chatbot-avatar-small">🤖</span>
                      <span className="chatbot-label">Viswa</span>
                    </div>
                  )}
                  {message.role === 'user' && (
                    <div className="chatbot-meta chatbot-meta-user">
                      <span className="chatbot-label">You</span>
                    </div>
                  )}
                  <div className={`chatbot-bubble chatbot-bubble-${message.role}`}>{message.content}</div>
                  <span className="chatbot-time">{message.time}</span>
                </div>
              ))}
              {isLoading && (
                <div className="chatbot-bubble-row chatbot-bubble-row-assistant" style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </main>
            <form className="chatbot-input-area" onSubmit={handleSubmit} style={{width: '100%', display: 'flex', alignItems: 'center', gap: 10, marginTop: 'auto'}}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="chatbot-input"
                disabled={isLoading}
                autoFocus
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) handleSubmit(e); }}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="chatbot-send-btn"
                aria-label="Send message"
              >
                Send
              </button>
            </form>
          </section>
        </div>,
        document.body
      )}
    </>
  );
};

export default Chatbot; 