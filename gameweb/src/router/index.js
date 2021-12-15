import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import FavoriteGame from '../views/FavGame.vue'
import GameDetail from '../views/GameDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/favoritegame',
    name: 'FavoriteGame',
    component: FavoriteGame
  },
  {
    path: '/games/:id',
    name: 'GameDetail',
    component: GameDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.acces_token && to.name === "Home" || !localStorage.acces_token && to.name === "FavoriteGame"  ) {
       next({ name: 'Login' })
  }
  else if(localStorage.acces_token && to.name === "Login" || localStorage.acces_token && to.name === "Register"){
   next({ name: 'Home' })
  }
  else{
    next()
  }
})

export default router
