import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import RegisterForm from '../components/RegisterForm.vue'
import LoginForm from '../components/LoginForm.vue'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("access_token")) {
        next("/dashboard");
      } else {
        next();
      }
    },
    children: [
      {
        path: "/",
        name: "LoginForm",
        component: LoginForm,
      },
      {
        path: "/register",
        name: "RegisterForm",
        component: RegisterForm,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
