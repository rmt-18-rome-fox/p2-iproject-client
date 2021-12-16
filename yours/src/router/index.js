import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import HomePage from "../views/HomePage";
import PostDetail from "../views/PostDetail";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/posts/:postId",
    name: "PostDetail",
    component: PostDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
