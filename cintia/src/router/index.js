import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/movies",
    name: "Movies",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Movies.vue"),
  },
  {
    path: "/movies/:id",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

//navguard
router.beforeEach((to, from, next) => {
  if (to.name === "Movies" && !localStorage.access_token) {
    next({ name: "Home" });
  } else {
    next();
  }
  if (to.name === "Login" && localStorage.access_token) {
    next({ name: "Movies" });
  } else {
    next();
  }
});
