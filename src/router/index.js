import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import( '../views/Payment.vue')
  },
  {
    path: '/organization',
    name: 'Organization',
    component: () => import( '../views/Organization.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( '../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.access_token

  if ( 
    !token 
    && to.name !== "Login" 
    && to.name !== "Register"
  ) {
    next({ name: 'Login' })
  }
  else if ( 
    token 
    && to.name !== "Home" 
    && to.name !== "Organization"
    && to.name !== "Payment"  
  ) {
    next({ name: 'Home' })
  }
  else {
    next()
  }
})

export default router
