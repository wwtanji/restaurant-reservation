import { defineStore } from "pinia";
import api from "@/services/api";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  user_email: string;
  role: number;
}

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem("token") ?? null,
    refreshToken: localStorage.getItem("refreshToken") ?? null,
    isInitialized: false
  }),

  getters: {
    isAuthenticated: (state) => !!state.token && !!state.user,
  },

  actions: {
    setTokens(tokens: TokenResponse) {
      this.token = tokens.access_token;
      this.refreshToken = tokens.refresh_token;
      localStorage.setItem("token", tokens.access_token);
      localStorage.setItem("refreshToken", tokens.refresh_token);
    },

    async register(payload: {
      first_name: string;
      last_name: string;
      user_email: string;
      user_password: string;
      role?: number;
    }) {
      try {
        const response = await api.post<TokenResponse>("/authentication/register", {
          ...payload,
          role: payload.role ?? 0,
        });

        this.setTokens(response.data);
        await this.fetchUser();
      } catch (error) {
        throw error;
      }
    },

    async login(payload: { user_email: string; user_password: string }) {
      try {
        const response = await api.post<TokenResponse>("/authentication/login", payload);
        this.setTokens(response.data);
        await this.fetchUser();
      } catch (error) {
        throw error;
      }
    },

    async refreshTokens() {
      try {
        if (!this.refreshToken) throw new Error("No refresh token");

        const response = await api.post<TokenResponse>("/authentication/refresh", {
          refresh_token: this.refreshToken
        });

        this.setTokens(response.data);
        return response.data.access_token;
      } catch (error) {
        this.logout();
        throw error;
      }
    },

    async fetchUser() {
      try {
        if (!this.token) {
          this.logout();
          return;
        }

        const response = await api.get("/authentication/me");
        this.user = response.data;
        this.isInitialized = true;
      } catch (error: any) {
        // If token is invalid and we have a refresh token, try to refresh
        if (error?.response?.status === 401 && this.refreshToken) {
          try {
            await this.refreshTokens();
            // Retry fetching user with new token
            const response = await api.get("/authentication/me");
            this.user = response.data;
          } catch (refreshError) {
            this.logout();
          }
        } else {
          this.logout();
        }
      } finally {
        this.isInitialized = true;
      }
    },

    logout() {
      this.token = null;
      this.refreshToken = null;
      this.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
});
