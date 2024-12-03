import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import './ChatBubble.css';

const ChatBubble = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-bubble-container">
      {open && <ChatWindow />}
      <button className="chat-bubble" onClick={() => setOpen(!open)}>
        💬
      </button>
    </div>
  );
};

export default ChatBubble;
