import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State Global
  const activeUser = ref(null)
  const isLoading = ref(false)

  return { activeUser, isLoading }
})
