import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import adminLogin from '../views/adminLogin'
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import Register from '../views/Register'
import ArticleDetail from '../views/ArticleDetail'
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueRouter)
Vue.use(VueSocialSharing);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/adminlogin',
    name: 'adminLogin',
    component: adminLogin
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
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
    path: '/article/:id',
    name: 'ArticleDetail',
    component: ArticleDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
