import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blank'
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
    path: '/customer',
    name: 'CustomerHome',
    component: () => import('../views/CustomerHome.vue')
  },
  {
    path: '/customer/architects',
    name: 'CustomerArchitects',
    component: () => import('../views/CustomerArchitects.vue')
  },
  {
    path: '/customer/portofolios',
    name: 'CustomerPortofolios',
    component: () => import('../views/CustomerPortofolios.vue')
  },
  {
    path: '/customer/architect/:architectId',
    name: 'CustomerArchitectDetail',
    component: () => import('../views/CustomerArchitectDetail.vue')
  },
  {
    path: '/customer/portofolio/:portofolioId',
    name: 'CustomerPortofolioDetail',
    component: () => import('../views/CustomerPortofolioDetail.vue')
  },
  {
    path: '/customer/consultation/:architectId',
    name: 'CustomerBooking',
    component: () => import('../views/CustomerBooking.vue')
  },
  {
    path: '/customer/architect/portofolios/:architectId',
    name: 'CustomerArchitectPortofolios',
    component: () => import('../views/CustomerArchitectPortofolios.vue')
  },
  {
    path: '/architect',
    name: 'Architect',
    component: () => import('../views/ArchitectHome.vue')
  },
  {
    path: '/architect/portofolio/add',
    name: 'ArchitectAddPortofolio',
    component: () => import('../views/ArchitectAddPortofolio.vue')
  },
  {
    path: '/architect/portofolio/:portofolioId',
    name: 'ArchitectEditPortofolio',
    component: () => import('../views/ArchitectEditPortofolio.vue')
  },
  {
    path: '/customer/profile',
    name: 'CustomerProfile',
    component: () => import('../views/CustomerProfile.vue')
  },
  {
    path: '/architect/profile',
    name: 'ArchitectProfile',
    component: () => import('../views/ArchitectProfile.vue')
  }
  // {
  //   path: '/architect/chat',
  //   name: 'ArchitectChat',
  //   component: () => import('../views/ArchitectChat.vue')
  // },
  // {
  //   path: '/customer/chat',
  //   name: 'CustomerChat',
  //   component: () => import('../views/CustomerChat.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  const role = localStorage.getItem('role')
  if (to.name === 'Blank' && !accessToken) next({ name: 'Login' })
  else if (to.name === 'Blank' && accessToken && role === 'customer') next({ name: 'CustomerHome' })
  else if (to.name === 'Blank' && accessToken && role === 'architect') next({ name: 'ArchitectHome' })
  else if ((to.name !== 'Login') && !accessToken) {
    if (to.name === 'Register') {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else if (to.name === 'Login' && accessToken && role === 'customer') next({ name: 'CustomerHome' })
  else if (to.name === 'Login' && accessToken && role === 'architect') next({ name: 'ArchitectHome' })
  else if (to.name === 'Register' && accessToken && role === 'customer') next({ name: 'CustomerHome' })
  else if (to.name === 'Register' && accessToken && role === 'architect') next({ name: 'ArchitectHome' })
  else if (to.name === 'ArchitectHome' && accessToken && role === 'customer') next({ name: 'CustomerHome' })
  else if (to.name === 'CustomerHome' && accessToken && role === 'architect') next({ name: 'ArchitectHome' })
  else next()
})

export default router
