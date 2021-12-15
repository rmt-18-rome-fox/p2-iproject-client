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
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginForm.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterForm.vue')
  },
  {
    path: '/adopt-list',
    name: 'AdoptedList',
    component: () => import('../views/AdoptedList.vue')
  },
  {
    path: '/status-transaction',
    name: 'StatusTransactions',
    component: () => import('../views/StatusTransactions.vue')
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: () => import('../views/CheckOut.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/order' && !localStorage.access_token){
    next({ name: 'Login' })
  } else if (to.path === '/status' && !localStorage.access_token){
    next({ name: 'Login' })
  } else if (to.path === '/adopt-list' && !localStorage.access_token){
    next({ name: 'Login' })
  } else if (to.path === '/status-transaction' && !localStorage.access_token){
    next({ name: 'Login' })
  } else if (to.path === '/checkout' && !localStorage.access_token){
    next({ name: 'Login' })
  } else if (to.path === '/checkout/charge' && !localStorage.access_token){
    next({ name: 'Login' })
  } else if (to.path === '/login' && localStorage.access_token) {
    next({ name: 'Home' })
  } else if (to.path === '/register' && localStorage.access_token) {
    next({ name: 'Home' })
  }else {
    next()
  }
})


export default router
