import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    return config;
});

// Response interceptor for handling token refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const authStore = useAuthStore();
        const originalRequest = error.config;

        // If error is 401 and we haven't tried to refresh token yet
        if (error.response?.status === 401 && !originalRequest._retry && authStore.refreshToken) {
            originalRequest._retry = true;

            try {
                // Try to refresh the token
                await authStore.refreshTokens();
                
                // Retry the original request with new token
                originalRequest.headers.Authorization = `Bearer ${authStore.token}`;
                return api(originalRequest);
            } catch (refreshError) {
                // If refresh fails, logout and redirect to login
                authStore.logout();
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
