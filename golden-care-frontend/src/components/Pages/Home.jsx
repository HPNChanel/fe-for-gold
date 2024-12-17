import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to GoldenCare</h1>
      <p className="home-subtitle">Your trusted solution for elderly care services.</p>
      <button className="btn-learn-more" onClick={() => navigate("/services")}>
        Learn More
      </button>
      <div className="home-features">
        <div className="feature-card" onClick={() => navigate("/about")}>
          <h3>About Us</h3>
          <p>Learn more about our mission and values.</p>
        </div>
        <div className="feature-card" onClick={() => navigate("/register")}>
          <h3>Join Us</h3>
          <p>Become a part of the GoldenCare family.</p>
        </div>
        <div className="feature-card" onClick={() => navigate("/services")}>
          <h3>Our Services</h3>
          <p>Discover the range of care we provide.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
