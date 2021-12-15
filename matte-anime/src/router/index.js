import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyWatchLists from '../views/MyWatchLists.vue'
import AnimeDetail from '../views/AnimeDetail.vue'
import swal from 'sweetalert2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/anime-detail/:malId',
    name: 'AnimeDetail',
    component: AnimeDetail,
  },
  {
    beforeEnter(to, from, next){
      if(!localStorage.getItem("access_token")) {
        swal.fire('You have to login first to create WatchLists')
        next({name: "Home"})
      }
      else next()
    },
    path: '/my-watch-lists',
    name: 'MyWatchLists',
    component: MyWatchLists
  },
  {
    beforeEnter(to, from, next){
      if(localStorage.getItem("access_token")) next({name: "Home"})
      else next()
    },
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    beforeEnter(to, from, next){
      if(localStorage.getItem("access_token")) next({name: "Home"})
      else next()
    },
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
