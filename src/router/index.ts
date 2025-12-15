import Soal1 from '@/components/Soal1.vue'
import Soal2 from '@/components/Soal2.vue'
import Parent from '@/components/soal 3/Parent.vue'
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
      component: Parent,
    },
  ],
})

export default router
