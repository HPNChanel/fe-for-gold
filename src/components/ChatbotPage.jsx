import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  justify-content: center;
  align-items: center;
`;

const HeaderArea = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const WelcomeMessage = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const BackButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #c62828;
  }
`;

const ChatBox = styled.div`
  width: 60%;
  height: 80%;
  background: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const MessageArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 15px 15px 0 0;
`;

const InputArea = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  display: flex;
  background: #f1f1f1;
  border-radius: 0 0 15px 15px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-right: 10px;
  outline: none;
  font-size: 14px;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ChatMessage = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${(props) => (props.isUser ? '#007bff' : '#e2e2e2')};
  color: ${(props) => (props.isUser ? 'white' : 'black')};
  border-radius: 15px;
  max-width: 70%;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
`;

function ChatbotPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    // Add user's message
    const userMessage = { text: currentMessage, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/chatbot/chat/', {
        message: currentMessage,
        user_id: 'test_user', // Có thể lấy từ session hoặc localStorage nếu cần
        language: 'en',
      });

      const botMessage = {
        text: response.data.response || 'Sorry, I could not understand.',
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: 'Error: Unable to connect to the chatbot.',
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
      setCurrentMessage('');
    }
  };

  return (
    <FullScreenContainer>
      {/* Header Area */}
      <HeaderArea>
        <WelcomeMessage>Welcome to Golden Care Chatbot!</WelcomeMessage>
        <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
      </HeaderArea>

      {/* Chatbox */}
      <ChatBox>
        <MessageArea>
          {messages.map((msg, index) => (
            <ChatMessage key={index} isUser={msg.isUser}>
              {msg.text}
            </ChatMessage>
          ))}
          {loading && <ChatMessage isUser={false}>Typing...</ChatMessage>}
        </MessageArea>
        <InputArea>
          <InputField
            type="text"
            value={currentMessage}
            placeholder="Type your message..."
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <SendButton onClick={handleSendMessage}>Send</SendButton>
        </InputArea>
      </ChatBox>
    </FullScreenContainer>
  );
}

export default ChatbotPage;
