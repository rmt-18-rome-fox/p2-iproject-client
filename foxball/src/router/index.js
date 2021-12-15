import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddPost from '../views/AddPost.vue'
import Standing from '../views/Standing.vue'
import Chat from '../views/Chat.vue'
import News from '../views/News.vue'

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
    path: '/add',
    name: 'AddPost',
    component: AddPost
  },
  {
    path: '/standing-table',
    name: 'Standing',
    component: Standing
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')
  if(!token && to.name !== 'Login') {
    next({path: '/login'})
  } else if(token && to.name === 'Login') {
    next({path: '/'})
  } else {
    next()
  }
})

export default router
