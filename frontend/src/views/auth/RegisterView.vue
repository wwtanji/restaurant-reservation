<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

export default defineComponent({
  name: 'SignUpComponent',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const form = reactive({
      first_name: '',
      last_name: '',
      user_email: '',
      user_password: '',
      role: 0,
    })

    const signup = async () => {
      try {
        await authStore.register(form)
        console.log('Registration successful')
        router.push('/')
      } catch (error) {
        console.error('Registration failed:', error)
      }
    }

    return {
      form,
      signup,
    }
  },
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <div class="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 sm:p-10">
      <div class="text-center mb-8">
        <h2 class="text-4xl font-extrabold text-gray-800">Sign Up</h2>
      </div>

      <form @submit.prevent="signup" class="space-y-4">
        <input
          v-model="form.first_name"
          type="text"
          placeholder="First Name"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        <input
          v-model="form.last_name"
          type="text"
          placeholder="Last Name"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
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

        <input v-model="form.role" type="hidden" />

        <button
          type="submit"
          class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-md"
        >
          Create account
        </button>
      </form>

      <p class="text-center text-sm text-gray-500 mt-10">
        Already have an account?
        <router-link to="/login" class="text-blue-600 font-semibold hover:underline">Log In</router-link>
      </p>
    </div>
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

* {
  font-family: 'Inter', sans-serif;
}
</style>
