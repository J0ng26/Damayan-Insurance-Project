
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import DamayanProducts from '@/views/DamayanProducts.vue'
import GoodlifePlans from '@/views/GoodlifePlans.vue'
import MBAIProducts from '@/views/MBAIProducts.vue'

import PrivacyPolicy from '@/pages/privacy-policy.vue'
import TermsAndConditions from '@/pages/terms-and-conditions.vue'

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
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-and-conditions',
    name: 'TermsAndConditions',
    component: TermsAndConditions
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, left: 0, behavior: 'instant' }
  }
})

router.afterEach((to, from) => {
  if (!to.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
})

export default router