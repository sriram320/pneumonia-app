// frontend/src/api/apiClient.ts
import axios from 'axios';

// Create an axios instance with a base URL
// All requests made with this instance will automatically have this URL prefixed
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000',
});

export default apiClient;