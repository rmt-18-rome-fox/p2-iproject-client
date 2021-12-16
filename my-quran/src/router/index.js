import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DetailBySurah from '../views/DetailBySurah.vue'
import DetailByJuzs from '../views/DetailByJuzs.vue'
import ListSurah from '../views/ListSurah.vue'
import PrayerTimes from '../views/PrayerTimes.vue'
import ListJuzs from '../views/ListJuzs.vue'


Vue.use(VueRouter)

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
    path: '/detailBySurah/:id',
    name: 'DetailBySurah',
    component: DetailBySurah
  },
  {
    path: '/detailByJuzs',
    name: 'DetailByJuzs',
    component: DetailByJuzs
  },
  {
    path: '/listSurah',
    name: 'ListSurah',
    component: ListSurah
  },
  {
    path: '/prayerTimes',
    name: 'PrayerTimes',
    component: PrayerTimes
  },
  {
    path: '/listJuzs',
    name: 'ListJuzs',
    component: ListJuzs
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name === "Home" ) {
       next({ name: 'Login' })
  }
  else if(!localStorage.access_token && to.name === "DetailBySurah"){
   next({ name: 'Login' })
  }
  else if(!localStorage.access_token && to.name === "DetailByJuzs"){
   next({ name: 'Login' })
  }
  else if(localStorage.access_token && to.name === "Login"){
   next({ name: 'Home' })
  }
  else if(localStorage.access_token && to.name === "Register"){
   next({ name: 'Home' })
  }
  else{
    next()
  }
})

export default router
