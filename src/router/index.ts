import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '@/views'
import { NAVIGATION_LINKS } from '@/constants'

const routes = [
  { path: NAVIGATION_LINKS.HOME, component: HomePage },
  { path: NAVIGATION_LINKS.STATS, component: () => import('@/views/StatsView.vue') },
  { path: NAVIGATION_LINKS.ABOUT, component: () => import('@/views/AboutView.vue') },
  { path: NAVIGATION_LINKS.ERROR, component: () => import('@/views/ErrorView.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
