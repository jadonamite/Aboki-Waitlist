// frontend/src/services/api.js
import axios from 'axios';

// Set base URL based on environment
const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const waitlistService = {
  // Register user for waitlist
  register: async (userData) => {
    try {
      const response = await api.post('/waitlist/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Server error' };
    }
  },
  
  // Get waitlist statistics
  getStats: async () => {
    try {
      const response = await api.get('/waitlist/stats');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Server error' };
    }
  }
};

export default waitlistService;