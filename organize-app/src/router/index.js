import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/task/:id',
    name: 'TaskDetail',
    component: TaskDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
