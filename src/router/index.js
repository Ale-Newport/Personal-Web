import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Search from '../views/SearchView.vue'
import Games from '../views/GamesView.vue'
import Info from '../views/InfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})

export default router
