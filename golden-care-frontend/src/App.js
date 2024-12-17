import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import ChatBubble from './components/Chatbot/ChatBubble';
import ChatWindow from './components/Chatbot/ChatWindow';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [userId, setUserId] = useState('default_user'); // Replace with actual user ID

  const toggleChat = () => setChatOpen(!isChatOpen);

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <ChatBubble onClick={toggleChat} />
        {isChatOpen && <ChatWindow userId={userId} />}
        <Footer />
      </AuthProvider>
    </Router>
  );
}


export default App;
