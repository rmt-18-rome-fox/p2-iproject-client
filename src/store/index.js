import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sLogin: false,
  },
  mutations: {
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {
    doLogin(context, payload) {
      console.log(payload, `payload doLogin Store`)
      return axios({
        method: "POST",
        url: "/login",
        data: payload,
      });
    },
    doRegister ( context, payload ) {
      return axios({
        method: "POST",
        url: "/register",
        data: payload,
      });
    },
    googleSignIn(context, payload) {
      return axios({
        method: "POST",
        url: "/google-signin",
        data: {
          id_token: payload,
        },
      });
      
    },
  },
  
  modules: {
  }
})
