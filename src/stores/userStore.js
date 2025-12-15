import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State Global
  const activeUser = ref(null)
  const isLoading = ref(false)

  // Action fetch API
  async function fetchUserDetail(id) {
    isLoading.value = true
    activeUser.value = null // Reset dulu biar kosong
    
    // Simulasi request API
    // Anggap fetch('/api/user/'+id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    
    activeUser.value = data
    isLoading.value = false
  }

  return { activeUser, isLoading, fetchUserDetail }
})