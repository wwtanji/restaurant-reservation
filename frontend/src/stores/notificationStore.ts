import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    message: '',
    type: 'success' as 'success' | 'error' | '', // 'success' | 'error'
    visible: false
  }),
  actions: {
    show(message: string, type: 'success' | 'error' = 'success') {
      this.message = message
      this.type = type
      this.visible = true

      setTimeout(() => {
        this.visible = false
      }, 3000)
    },
    hide() {
      this.visible = false
    }
  }
})
