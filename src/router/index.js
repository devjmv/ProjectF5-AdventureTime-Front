import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import EventView from '../views/EventView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView,
      //meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      //meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, from) => {

  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
    return { name: 'about' }
  }

})

export default router
