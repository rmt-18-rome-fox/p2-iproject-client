import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    topics: [],
  },
  mutations: {
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_TOPICS (state, payload) {
      state.topics = payload
    }
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
    fetchTopics (context) {
      console.log(`fetchTopics on Store`)
      axios({
        method: "GET",
        url: "/topics",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      .then(({data}) => {
        console.log(data, `fetchTopics onStore`)
        context.commit("SET_TOPICS", data)
      }).catch((err) => {
        console.log(err.response.data.message)
      });
    }
  },
  
  modules: {
  }
})
