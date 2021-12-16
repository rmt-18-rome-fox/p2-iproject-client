import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import MyCharacters from "../views/MyCharacters.vue";
import CreateCharacter from "../views/CreateCharacter.vue";
import Register from "../views/Register.vue";

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
    component: Login,
  },
  {
    path: "/mycharacters",
    name: "MyCharacters",
    component: MyCharacters,
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/create",
    name: "CreateCharacter",
    component: CreateCharacter,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if ((to.name == "Login" || to.name == "Register") && localStorage.access_token) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
