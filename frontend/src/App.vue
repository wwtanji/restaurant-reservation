<template>
  <div v-if="isInitialized">
    <router-view />
    <NotificationComponent />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from './stores/authStore'
import NotificationComponent from './components/Notification/NotificationComponent.vue'

const authStore = useAuthStore()
const { isInitialized } = storeToRefs(authStore)

onMounted(async () => {
  if (authStore.token) {
    try {
      await authStore.fetchUser()
    } catch (error) {
      console.error('Failed to initialize auth state:', error)
    }
  } else {
    authStore.isInitialized = true
  }
})
</script>
