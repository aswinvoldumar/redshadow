import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Home
  },
  {
    path: '/cosmetic',
    name: 'Cosmetic',
    component: Home
  },
  {
    path: '/research',
    name: 'Research',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // Handle anchor links
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Account for fixed navbar
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
