import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import axios from 'axios';

export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);
  const [username, setUsername] = useState(''); // Sử dụng username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/login/', { username, password });
      console.log('Login successful:', response.data);
      alert('Login successful');
      localStorage.setItem('authToken', response.data.access);
      window.location.href = '/'; // Điều hướng về trang chủ sau khi đăng nhập
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleLogin}>
        <Input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <LineText style={{ color: 'red' }}>{error}</LineText>}
        <SubmitButton type="submit">Sign in</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <LineText>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Sign up
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
