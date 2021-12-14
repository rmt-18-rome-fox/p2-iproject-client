import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "LoginAndRegister",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginAndRegister.vue"),
    children: [
      {
        path: "login",
        name: "LoginForm",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/LoginForm.vue"),
      },
      {
        path: "register",
        name: "RegisterForm",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/RegisterOption.vue"
          ),
      },
      {
        path: "register/:role",
        name: "RegisterForm",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/RegisterForm.vue"
          ),
      },
    ],
  },
  {
    path: "/",
    name: "HomePage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomePage.vue"),
  },
  {
    path: "/library",
    name: "Library",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Library.vue"),
  },
  {
    path: "/book/:id",
    name: "BookDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BookDetail.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
