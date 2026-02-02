import axios from 'axios';
import API_BASE_URL from './api';

// Create axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // Set to false since we're using localStorage for tokens
});

// Request interceptor to add auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried to refresh yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          // No refresh token, redirect to login
          localStorage.clear();
          window.location.href = '/auth/login';
          return Promise.reject(error);
        }

        // Try to refresh the token
        const response = await axios.post(
          `${API_BASE_URL}/auth/refresh`,
          { refreshToken },
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );

        const { accessToken } = response.data;

        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
          // Retry the original request with new token
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, clear storage and redirect to login
        localStorage.clear();
        window.location.href = '/auth/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
