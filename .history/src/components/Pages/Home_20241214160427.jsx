// Home.jsx: Home Page Component for GoldenCare

import React, { useEffect } from 'react';
import './Home.css';
import $ from 'jquery';

const Home = () => {
  useEffect(() => {
    // Add animation or effects if needed
    $('.service-item').on('mouseenter', function () {
      $(this).addClass('hover-effect');
    });

    $('.service-item').on('mouseleave', function () {
      $(this).removeClass('hover-effect');
    });
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to GoldenCare</h1>
        <p>Your trusted partner in elderly care services.</p>
      </header>
      <section className="home-services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Personalized Care</h3>
            <p>Tailored care plans to meet the unique needs of each individual.</p>
          </div>
          <div className="service-item">
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance to ensure peace of mind for families.</p>
          </div>
          <div className="service-item">
            <h3>Recreational Activities</h3>
            <p>Engaging activities to promote physical and mental well-being.</p>
          </div>
        </div>
      </section>
      <section className="home-contact">
        <h2>Contact Us</h2>
        <p>Get in touch to learn more about how we can support you and your loved ones.</p>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
