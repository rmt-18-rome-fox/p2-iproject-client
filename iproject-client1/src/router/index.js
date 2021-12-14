import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import FormAdd from '../views/FormAdd.vue';
import FormEdit from '../views/FormEdit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next({ name: 'Login' });
      } else {
        next();
      }
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
  {
    path: '/formadd',
    name: 'FormAdd',
    component: FormAdd,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next({ name: 'Login' });
      } else if (localStorage.getItem('roleUser') !== 'admin') {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
  {
    path: '/formedit/:id',
    name: 'FormEdit',
    component: FormEdit,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next({ name: 'Login' });
      } else if (localStorage.getItem('roleUser') !== 'admin') {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
