import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books',
    name: 'Home',
    component: Home
  },
  {
    path: '/books/:bookId',
    name: 'BookDetail',
    component: () => import('../components/BookDetail.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../components/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: ()=> import('../components/RegisterPage.vue')
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: () => import('../components/Bookmark.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  
  if (to.name == 'Bookmarks' && !isAuthenticated) next({ name: 'LoginPage' })
  else next()
})
export default router
