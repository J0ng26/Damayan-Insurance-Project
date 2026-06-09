/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

import DamayanProducts from '@/views/DamayanProducts.vue'
import GoodlifePlans from '@/views/GoodlifePlans.vue'
import MBAIProducts from '@/views/MBAIProducts.vue'

const allRoutes = [
  ...routes,
  {
    path: '/products',
    name: 'Products',
    redirect: '/products/damayan'
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(allRoutes),
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

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
