import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

export const fetchCars = (params = {}) => api.get('/cars', { params });

export default api;
