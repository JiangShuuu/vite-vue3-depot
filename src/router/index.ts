import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', 
      name: 'Home', 
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../pages/NotFound.vue')
    },
  ]
})


export default router