import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    LOGIN(state, data) {
      state.isLogin = data
    },
  },
  actions: {
    login(context, payload) {
      // console.log(payload, 'ini di action')
      return new Promise((resolve, reject) => {
        axios.post(`${baseUrl}/login`, payload)
        .then(({data}) => {
          resolve(data)
          context.commit('LOGIN', true)
        })
        .catch(err => {
          reject(err)
        })
      })
    },

    register(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${baseUrl}/register`, payload)
        .then(({data}) => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
  },
  modules: {
  }
})
