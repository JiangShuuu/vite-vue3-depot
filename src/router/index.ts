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
      path: '/login',
      name: 'Login',
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../pages/NotFound.vue')
    },
  ]
})


export default router