import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth.vue'
import Home from '../views/Home.vue'
import Geolocation from '../components/GeoLocation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/geolocation',
    name: 'Geolocation',
    component: Geolocation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Navigation Guard
// router.beforeEach((to, from, next) => {
//   if (to.name === 'Login' && localStorage.access_token) next({ name: 'Home' })
//   else if (to.name === 'Home' && !localStorage.access_token) next({ name: 'Login' })
//   else if (to.name === 'Geolocation' && !localStorage.access_token) next({ name: 'Login' })
//   else next()
// })

export default router
