import axios from 'axios';
import { getToken } from '../utils/auth';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL + '/api', // Use environment variable
});

// Add token to headers
API.interceptors.request.use((config) => {
  const token = getToken(); 
    if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;