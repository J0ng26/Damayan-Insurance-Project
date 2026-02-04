
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import DamayanProducts from '@/views/DamayanProducts.vue'
import GoodlifePlans from '@/views/GoodlifePlans.vue'
import MBAIProducts from '@/views/MBAIProducts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    redirect: '/products/damayan' // Default to Damayan
  },
  {
    path: '/products/damayan',
    name: 'DamayanProducts',
    component: DamayanProducts
  },
  {
    path: '/products/goodlife-plans',
    name: 'GoodlifePlans',
    component: GoodlifePlans
  },
  {
    path: '/products/mbai',
    name: 'MBAIProducts',
    component: MBAIProducts
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
  }
})

export default router