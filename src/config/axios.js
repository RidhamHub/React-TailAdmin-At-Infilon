import axios from "axios";

// Get API URL from environment variable, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:7000";

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Always send cookies with requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Create a separate instance for FormData (multipart/form-data)
// This will auto-detect Content-Type for FormData
const apiClientFormData = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  // Don't set Content-Type header - let browser set it with boundary for FormData
});

// Request interceptor (optional - for adding auth tokens if needed)
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional - for handling errors globally)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors here if needed
    if (error.response?.status === 401) {
      // Handle unauthorized - maybe redirect to login
      console.error("Unauthorized access");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
export { apiClientFormData, API_URL };
