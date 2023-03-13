import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import BootstrapVue from "./plugins/bootstrap-vue";
import axios from "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  BootstrapVue, VueSweetalert2,
  render: (h) => h(App),
}).$mount("#app");
