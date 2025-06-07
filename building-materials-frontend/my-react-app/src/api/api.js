import axios from 'axios';
import { getToken } from '../utils/auth';


const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend URL
});

// Add token to headers
API.interceptors.request.use((config) => {
  const token = getToken(); 
    if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;