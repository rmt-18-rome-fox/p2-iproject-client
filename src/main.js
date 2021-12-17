import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import VueSimpleAlert from 'vue-simple-alert'

const options = {
  withCredentials: true
}

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  options
  // options: { path: "/my-app/" } //Optional options
}))

Vue.config.productionTip = false

Vue.use(VueSimpleAlert)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
