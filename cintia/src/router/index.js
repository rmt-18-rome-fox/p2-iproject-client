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
  {
    path: "/bookings",
    name: "Bookings",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Bookings.vue"),
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
  if (
    (to.name === "Movies" || to.name === "Bookings" || to.name === "Detail") &&
    !localStorage.access_token
  ) {
    next({ name: "Home" });
  } else {
    next();
  }
  if (
    (to.name === "Login" || to.name === "Register") &&
    localStorage.access_token
  ) {
    next({ name: "Movies" });
  } else {
    next();
  }
});
