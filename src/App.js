import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBanner from './components/MainBanner';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import AuthPage from './components/AuthPage';
import ChatbotPage from './components/ChatbotPage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainBanner />
              <Services />
              <About />
              <Clients />
              <Pricing />
              <Footer />
            </>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
