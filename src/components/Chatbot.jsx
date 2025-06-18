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
      const response = await fetch("https://portfolio-chatbot-backend-siqc.onrender.com/chat", {
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
          <section className="chatbot-modal-content" onClick={e => e.stopPropagation()} aria-modal="true" role="dialog" style={{padding: 0, margin: 0, boxShadow: 'none'}}>
            <header className="chatbot-header" style={{width: '90%', display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.2rem', position: 'relative', padding: '24px 40px 0 40px'}}>
              <div className="chatbot-avatar" style={{width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#fff', fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>V</div>
              <div style={{display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0}}>
                <div className="chatbot-title" style={{ fontWeight: 600, fontSize: 18, letterSpacing: 0.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Viswa's AI Assistant</div>
                <div className="chatbot-role" style={{ fontSize: 13, color: '#b0b0b0' }}>Resume Assistant</div>
              </div>
              <button className="chatbot-close-btn" onClick={() => setOpen(false)} aria-label="Close chatbot" style={{marginLeft: 'auto', fontSize: 32, color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1, marginTop: '-25px'}}>&times;</button>
            </header>
            <main className="chatbot-body" style={{flex: 1, width: '90%', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 12, overflowY: 'auto', padding: '0 40px'}}>
              {/* Welcome message */}
              {messages.length === 0 && (
                <div className="chatbot-bubble-row chatbot-bubble-row-assistant">
                  <div className="chatbot-meta chatbot-meta-assistant">
                    <span className="chatbot-avatar-small">V</span>
                    <span className="chatbot-label">Viswa</span>
                  </div>
                  <div className="chatbot-bubble chatbot-bubble-assistant">Hi! I'm Viswa's AI assistant. Ask me about his skills, projects, or experience! <span role="img" aria-label="wave">👋</span></div>
                </div>
              )}
              {/* Chat messages */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chatbot-bubble-row ${message.role === 'user' ? 'chatbot-bubble-row-user' : 'chatbot-bubble-row-assistant'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="chatbot-meta chatbot-meta-assistant">
                      <span className="chatbot-avatar-small">V</span>
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
                <div className="chatbot-bubble-row chatbot-bubble-row-assistant">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </main>
            {/* Quick questions at the bottom */}
            <div className="chatbot-quick-questions">
              <span className="chatbot-quick-label">Quick questions:</span>
              <button type="button" className="chatbot-quick-btn" onClick={() => setInput('What are your Skills?')}>Skills</button>
              <button type="button" className="chatbot-quick-btn" onClick={() => setInput('Tell me about your Projects?')}>Projects</button>
              <button type="button" className="chatbot-quick-btn" onClick={() => setInput('How can I Contact you?')}>Contact</button>
            </div>
            <form className="chatbot-input-area" onSubmit={handleSubmit} style={{width: '90%', display: 'flex', alignItems: 'center', gap: 10, marginTop: 0, padding: '16px 40px 16px 40px'}}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
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
                <FiSend size={20} />
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