import ProductView from '@/views/ProductView.vue'
import MainViewVue from '@/views/MainView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainViewVue
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    }
  ]
})

export default router
