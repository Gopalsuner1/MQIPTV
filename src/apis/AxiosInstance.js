// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // Your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Other default headers
  },
});

export default API;
