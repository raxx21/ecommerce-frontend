import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth';

export const registerAPI = async (data: { username: string; password: string; name: string; surname: string; birthdate: string }) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};

export const login = async (data: { username: string; password: string }) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};
