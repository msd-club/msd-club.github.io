import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: () => import('@/views/landing-page/LandingPageIndex.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/register/RegisterIndex.vue')
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {el: to.hash, behavior: 'smooth'}
    }
  }
})

export default router
