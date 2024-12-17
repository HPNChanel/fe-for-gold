import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/auth");
  };

  const handleSignInClick = () => {
    navigate("/auth");
  };

  const handleChatbotClick = () => {
    navigate("/chatbot");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="/" className="logo">
                <img
                  src="assets/images/GOLDENCARE.png"
                  alt="Golden Care Logo"
                  width="130px"
                  height="102px"
                />
              </a>
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Services</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about">About</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className="scroll-to-section">
                  <a
                    onClick={handleChatbotClick}
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Chatbot
                  </a>
                </li>
                {isLoggedIn && (
                  <li className="scroll-to-section">
                    <a
                      onClick={handleProfileClick}
                      style={{
                        background: "none",
                        border: "none",
                        color: "inherit",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Profile
                    </a>
                  </li>
                )}
                <li>
                  <div className="gradient-button">
                    {isLoggedIn ? (
                      <button
                        onClick={handleLogout}
                        style={{
                          border: "none",
                          background: "none",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fa fa-sign-out-alt"></i> Logout
                      </button>
                    ) : (
                      <button
                        onClick={handleSignInClick}
                        style={{
                          border: "none",
                          background: "none",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fa fa-sign-in-alt"></i> Sign In Now
                      </button>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
