import { defineStore } from "pinia";
import api from "@/services/api";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  user_email: string;
  role: number;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem("token") ?? null,
  }),

  actions: {
    async register(payload: {
      first_name: string;
      last_name: string;
      user_email: string;
      user_password: string;
      role?: number;
    }) {
      try {
        const response = await api.post("/authentication/register", {
          ...payload,
          role: payload.role ?? 0,
        });

        this.token = response.data.access_token;
        localStorage.setItem("token", this.token);
        await this.fetchUser();
      } catch (error) {
        throw error;
      }
    },

    async login(payload: { user_email: string; user_password: string }) {
      try {
        const response = await api.post("/authentication/login", payload);
        this.token = response.data.access_token;
        localStorage.setItem("token", this.token);
        await this.fetchUser();
      } catch (error) {
        throw error;
      }
    },

    async fetchUser() {
      if (!this.token) return;

      try {
        const response = await api.get("/authentication/me", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });

        this.user = response.data;
      } catch (error) {
        this.logout();
      }
    },

    logout() {
      this.token = null;  
      this.user = null;
      localStorage.removeItem("token");
    },
  },
});
