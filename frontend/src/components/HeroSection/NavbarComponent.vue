<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationStore'
import NotificationComponent from '@/components/Notification/NotificationComponent.vue'

export default defineComponent({
  name: 'NavbarComponent',
  components: { NotificationComponent },
  setup() {
    const authStore = useAuthStore()
    const notificationStore = useNotificationStore()
    const router = useRouter()

    const avatarUrl = computed(() =>
      `https://api.dicebear.com/9.x/bottts/svg?seed=${authStore.user?.first_name || 'user'}`
    )

    const logout = () => {
      authStore.logout()
      localStorage.removeItem('justLoggedIn')
      notificationStore.show('You have successfully logged out', 'error')
      router.push('/')
    }
    return {
      authStore,
      avatarUrl,
      logout,
      notificationStore
    }
  }
})
</script>



<template>
  <nav class="bg-white shadow-sm border-b border-gray-200 relative z-50">
    <NotificationComponent />

    <div class="flex items-center justify-between px-6 py-4 w-full">
      <div class="flex items-center gap-2">
        <router-link to="/" class="text-2xl font-extrabold text-black">
          Reservelt
        </router-link>
      </div>

      <div class="flex items-center gap-6">
        <template v-if="!authStore.user">
          <router-link
            to="/login"
            class="text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            Log In
          </router-link>
          <router-link
            to="/signup"
            class="text-sm font-semibold bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Sign Up
          </router-link>
        </template>

        <template v-else>
          <router-link to="/profile">
            <img
              :src="avatarUrl"
              alt="Avatar"
              class="w-10 h-10 rounded-full border border-gray-300 hover:ring-2 ring-gray-300 transition"
            />
          </router-link>

          <button
            @click="logout"
            class="text-sm font-semibold text-gray-700 hover:text-red-600 transition duration-200"
          >
            Log Out
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  font-family: 'Inter', sans-serif;
}
</style>
