import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePointStore = defineStore('point', () => {

  // State
  const points = ref(100)
  const username = ref('Guest')

  // Actions
  function addPoint() {
    points.value++
  }

  const defaultState = () => ({
    points: 0,
    username: 'Guest'
  })

  function resetPoint() {
    points.value = defaultState().points
    username.value = defaultState().username
  }

  return { points, username, addPoint, resetPoint }
})