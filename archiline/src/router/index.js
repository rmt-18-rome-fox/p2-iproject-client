import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  const role = localStorage.getItem('role')
  if (to.name !== 'Login' && !accessToken) next({ name: 'Login' })
  else if (to.name === 'Login' && accessToken && role === 'customer') next({ name: 'CustomerHome' })
  else if (to.name === 'Login' && accessToken && role === 'architect') next({ name: 'ArchitectHome' })
  else if (to.name === 'Register' && accessToken && role === 'customer') next({ name: 'CustomerHome' })
  else if (to.name === 'Register' && accessToken && role === 'architect') next({ name: 'ArchitectHome' })
  else if (to.name === 'ArchitectHome' && accessToken && role === 'customer') next({ name: 'CustomerHome' })
  else if (to.name === 'CustomerHome' && accessToken && role === 'architect') next({ name: 'ArchitectHome' })
  else next()
})

export default router
