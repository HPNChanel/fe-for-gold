import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
      <p className="footer-text">© 2024 GoldenCare. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
