import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8000/api/users/login/', userData);
      if (response.status === 200) {
        setIsLoggedIn(true);
        navigate('/'); // Điều hướng về trang chủ
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8000/api/users/register/', userData);
      if (response.status === 201) {
        setIsLoggedIn(true);
        navigate('/'); // Điều hướng về trang chủ
      }
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/login'); // Điều hướng về trang đăng nhập
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
