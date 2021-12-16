import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/booking/:id',
    name: 'Booking',
    component: () => import(/* webpackChunkName: "Booking" */ '../views/Booking.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/mainpage',
    name: 'Mainpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mainpage.vue')
  },
  {
    path: '/addcar',
    name: 'Addcar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Addcar.vue')
  },
  {
    path: '/socket/:bookId',
    name: 'Socket',
    component: () => import(/* webpackChunkName: "about" */ '../views/Socket.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  if (to.name === 'Login' && accessToken) next({ name: 'Mainpage' })
  else if (to.name === 'Mainpage' && !accessToken) next({ name: 'Login' })
  else next()
})

export default router
