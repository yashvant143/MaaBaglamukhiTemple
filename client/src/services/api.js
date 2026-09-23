import axios from 'axios';
import { mockPandits, mockGallery, mockNotices } from '../data/mockData';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000 // 5 seconds timeout before fallback
});

// Fetch Pandits
export const fetchPandits = async (params = {}) => {
  try {
    const response = await api.get('/pandits', { params });
    if (response.data && response.data.success) {
      return response.data.data.pandits;
    }
    return mockPandits;
  } catch (error) {
    console.warn('[API Warning]: Backend offline or error, serving mock Pandits data:', error.message);
    let filtered = [...mockPandits];
    if (params.search) {
      const q = params.search.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.specialization.some(s => s.toLowerCase().includes(q)) ||
          p.designation.toLowerCase().includes(q)
      );
    }
    if (params.available !== undefined && params.available !== '') {
      const isAvail = params.available === 'true';
      filtered = filtered.filter(p => p.availability === isAvail);
    }
    return filtered;
  }
};

// Fetch Single Pandit
export const fetchPanditById = async (id) => {
  try {
    const response = await api.get(`/pandits/${id}`);
    if (response.data && response.data.success) {
      return response.data.data;
    }
    return mockPandits.find(p => p._id === id) || mockPandits[0];
  } catch (error) {
    return mockPandits.find(p => p._id === id) || mockPandits[0];
  }
};

// Fetch Gallery Images
export const fetchGallery = async (category = '') => {
  try {
    const response = await api.get('/gallery', { params: { category } });
    if (response.data && response.data.success) {
      return response.data.data.items;
    }
    return mockGallery;
  } catch (error) {
    console.warn('[API Warning]: Serving mock Gallery data');
    if (category && category !== 'All') {
      return mockGallery.filter(item => item.category === category);
    }
    return mockGallery;
  }
};

// Fetch Notices
export const fetchNotices = async () => {
  try {
    const response = await api.get('/notices');
    if (response.data && response.data.success) {
      return response.data.data;
    }
    return mockNotices;
  } catch (error) {
    console.warn('[API Warning]: Serving mock Notices data');
    return mockNotices;
  }
};

// Submit Contact Form
export const sendContactMessage = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    console.warn('[API Warning]: Contact submission API offline, simulating success response');
    // Simulate successful submission for frontend demo
    return {
      success: true,
      message: 'Your message has been submitted successfully. We will get back to you soon!'
    };
  }
};

export default api;
