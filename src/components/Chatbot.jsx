import React, { useState } from "react";
import { createPortal } from "react-dom";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="chatbot-widget" style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
        <button onClick={() => setOpen(true)} className="chatbot-toggle" aria-label="Open chatbot">
          <span style={{ fontSize: '2rem', lineHeight: 1, display: 'block' }}>💬</span>
        </button>
      </div>
      {open && createPortal(
        <div className="chatbot-modal" onClick={() => setOpen(false)}>
          <div className="chatbot-modal-content" onClick={e => e.stopPropagation()} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
            <button className="chatbot-close-btn" onClick={() => setOpen(false)}>&times;</button>
            <div style={{ fontSize: '2rem', margin: '2.5rem 0 1.5rem 0' }}>🚧</div>
            <h2 style={{ marginBottom: '1.2rem' }}>Good things are coming!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>
              The chatbot will be available soon. Stay tuned for updates!
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Chatbot; 