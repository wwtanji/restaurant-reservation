<template>
  <div
    v-if="visible"
    class="fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white shadow-lg flex items-center justify-between gap-4"
    :class="toastClass"
  >
    <span>{{ message }}</span>
    <button @click="hide" class="hover:opacity-70">✕</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotificationStore } from '@/stores/notificationStore'
import { computed } from 'vue'

const notificationStore = useNotificationStore()
const { message, visible, type } = storeToRefs(notificationStore)
const { hide } = notificationStore

const toastClass = computed(() => {
  return type.value === 'error'
    ? 'bg-red-500'
    : type.value === 'success'
    ? 'bg-emerald-500'
    : ''
})
</script>
