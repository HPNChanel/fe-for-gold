import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/users';

export const loginUser = async (username, password) => {
  const response = await axios.post(`${BASE_URL}/login/`, { username, password });
  return response.data;
};

export const registerUser = async (formData) => {
  const response = await axios.post(`${BASE_URL}/register/`, formData);
  return response.data;
};
