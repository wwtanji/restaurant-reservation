<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'

export default defineComponent({
  name: 'App',
  setup() {
    const authStore = useAuthStore()

    onMounted(() => {
      if (authStore.token && !authStore.user) {
        authStore.fetchUser()
      }
    })
  }
})
</script>

<template>
  <router-view />
</template>
