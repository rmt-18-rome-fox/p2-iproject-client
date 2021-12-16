import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

const socket = io('https://herosrome.herokuapp.com');

Vue.config.productionTip = false
Vue.use(VueSweetalert2);

Vue.use(VueSocketIOExt, socket, {store});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
