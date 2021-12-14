import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGeolocation from 'vue-browser-geolocation'
import VueSpeech from 'vue-speech'

import './assets/css/main.css'

Vue.config.productionTip = false
Vue.use(VueGeolocation)
Vue.use(VueSpeech)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDDwlQ9Y74f-cwkwDGaVPpc57eOdM95yuA'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
