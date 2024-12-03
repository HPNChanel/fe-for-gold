import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatWindow.css';

const ChatWindow = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([
    'What services do you offer?',
    'How can I register?',
    'Tell me about GoldenCare.',
  ]);

  useEffect(() => {
    // Reset chatbot state on open or user login
    setMessages([{ text: 'Hello! How can I assist you today?', sender: 'bot' }]);
    setSuggestions([
      'What services do you offer?',
      'How can I register?',
      'Tell me about GoldenCare.',
    ]);
  }, [userId]);

  const sendMessage = async (message) => {
    setLoading(true);
    const userMessage = { text: message, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/chatbot/chat/', {
        message,
        user_id: userId,
      });
      const botMessage = { text: response.data.response, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error connecting to chatbot API:', error);
      const errorMessage = { text: 'Something went wrong. Please try again.', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSuggestions([]); // Remove suggestions after clicking
    sendMessage(suggestion);
  };

  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="chat-message bot">
            <span className="loading-dots">...</span>
          </div>
        )}
      </div>
      {suggestions.length > 0 && (
        <div className="chat-suggestions">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="suggestion-btn"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
