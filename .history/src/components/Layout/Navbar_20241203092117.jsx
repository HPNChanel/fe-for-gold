import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Kiểm tra trạng thái đăng nhập
  const checkAuthStatus = () => {
    const token = localStorage.getItem('token'); // Kiểm tra token trong localStorage
    setIsLoggedIn(!!token); // Đặt trạng thái đăng nhập dựa trên token
  };

  // Lắng nghe sự kiện khi localStorage thay đổi (cho các tab hoặc reload)
  useEffect(() => {
    checkAuthStatus(); // Kiểm tra trạng thái khi ứng dụng tải

    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange); // Lắng nghe sự kiện thay đổi

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Xóa token khỏi localStorage
    setIsLoggedIn(false); // Cập nhật trạng thái
    navigate('/login'); // Điều hướng về trang đăng nhập
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">GoldenCare</Link>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
