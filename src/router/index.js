import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'
import { ROUTES_PATHS } from '@/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.NAME,
      name: ROUTES_PATHS.NAME,
      component: Home
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: ROUTES_PATHS.COCKTAIL,
      component: Cocktail
    },
    {
      path: ROUTES_PATHS.COCKTAIL_RANDOM,
      name: ROUTES_PATHS.COCKTAIL_RANDOM,
      component: CocktailRandom
    }
  ]
})

export default router
