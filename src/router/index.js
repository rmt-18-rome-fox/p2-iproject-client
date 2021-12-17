import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/save',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: "Skypall",
      icon:"../../public/favicon.ico" 
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'MappingBox',
    component: () => import(/* webpackChunkName: "map" */ '../components/MappingBox.vue')
  },
  {
    path: '/map',
    name: 'TestMap',
    component: () => import(/* webpackChunkName: "map" */ '../components/TestMap.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
