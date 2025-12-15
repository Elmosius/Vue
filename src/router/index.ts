import Soal1 from '@/components/belajar/Soal1.vue'
import Soal2 from '@/components/belajar/Soal2.vue'
import Soal3 from '@/components/belajar/Soal3.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/soal/1',
      component: Soal1,
    },
    {
      path: '/soal/2',
      component: Soal2,
    },
    {
      path: '/soal/3',
      component: Soal3,
    },
  ],
})

export default router
