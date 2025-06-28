<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationStore'
import NavbarComponent from '@/components/Main/NavbarComponent.vue'

const authStore = useAuthStore()
const notificationStore = useNotificationStore()
const router = useRouter()

const form = reactive({
  user_email: '',
  user_password: ''
})

const signin = async () => {
  try {
    await authStore.login(form)
    notificationStore.show(`Welcome, ${authStore.user?.first_name || 'User'}!`, 'success')
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
    notificationStore.show('Login failed. Please try again.', 'error')
  }
}
</script>

<template>
  <div>
    <NavbarComponent />
    <div class="min-h-screen flex items-center justify-center bg-white p-6">
      <div
        class="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 sm:p-10"
      >
        <div class="text-center mb-8">
          <h2 class="text-4xl font-extrabold text-gray-800">Sign In</h2>
          <p class="mt-2 text-gray-500">Welcome back! Please log in to your account.</p>
        </div>

        <form @submit.prevent="signin" class="space-y-4">
          <input
            v-model="form.user_email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          />
          <input
            v-model="form.user_password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          />

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-md"
          >
            Log In
          </button>
        </form>

        <p class="text-center text-sm text-gray-500 mt-6">
          Don't have an account?
          <router-link to="/signup" class="text-blue-600 font-semibold hover:underline"
            >Sign Up</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

* {
  font-family: 'Inter', sans-serif;
}
</style>
