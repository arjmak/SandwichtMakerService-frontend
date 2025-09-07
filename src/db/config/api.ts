
import axios from 'axios';

// Create an Axios instance for communicating with the backend
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (no authentication)
api.interceptors.request.use(config => {
  // No authentication token is added
  return config;
}, error => {
  // Handle request error
  return Promise.reject(error);
});

// Response interceptor for handling errors
api.interceptors.response.use(response => {
  return response;
}, error => {
  // Handle error responses
  console.error('API error:', error.response?.data || error.message);
  return Promise.reject(error);
});
