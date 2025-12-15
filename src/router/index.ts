import Bab1 from '@/components/belajar/bab1.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Bab1,
    },
  ],
})

export default router
