import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const basicUrl = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    featuredArchitect: []
  },
  mutations: {
    SET_FEATURED_ARCHITECT (state, payload) {
      state.featuredArchitect = payload
    }
  },
  actions: {
    onLogin (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `${basicUrl}/login`,
          data: payload
        })
          .then(data => {
            localStorage.setItem('access_token', data.data.access_token)
            localStorage.setItem('role', data.data.role)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    fetchFeaturedArchitect (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/customer`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            context.commit('SET_FEATURED_ARCHITECT', data.data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {

  },
  modules: {
  }
})
