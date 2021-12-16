import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Detail from '../views/Detail.vue'
import Form from '../components/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to,from,next) =>{
      if(!localStorage.getItem("access_token")){
        next({name: "Login"})
      }else{
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to,from,next) =>{
      if(localStorage.getItem("access_token")){
        next({name: "Home"})
      }else{
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    beforeEnter: (to,from,next) =>{
      if(!localStorage.getItem("access_token")){
        next({name: "Login"})
      }else{
        next()
      }
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    beforeEnter: (to,from,next) =>{
      if(!localStorage.getItem("access_token")){
        next({name: "Login"})
      }else{
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
