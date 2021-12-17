import Vue from 'vue'
import Vuex from 'vuex'
import axie from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    identifier: 'Guest',
    canvasUrl: '',
    loading: false
  },
  mutations: {
    PUSH_MESSAGES: function (state, payload) {
      const message = `${state.identifier}: ${payload}`
      state.messages.push(message)
    },
    PUSH_MESSAGES_CLIENT: function (state, payload) {
      state.messages.push(payload)
    },
    SET_IDENTIFIER: function (state, payload) {
      state.identifier = payload
    },
    SET_CANVASURL: function (state, payload) {
      state.canvasUrl = payload
    },
    SET_LOADING: function (state, payload = false) {
      state.loading = payload
    }
  },
  actions: {
    postMeeting: function (context, payload) {
      const { state, commit } = context
      return new Promise(function (resolve, reject) {
        commit('SET_LOADING', true)
        axie({
          method: 'post',
          url: '/meetings',
          data: {
            identifier: state.identifier,
            messages: state.messages,
            image: state.canvasUrl
          }
        })
          .then(response => {
            state.identifier = ''
            state.messages = []
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
          .finally(() => {
            commit('SET_LOADING')
          })
      })
    }
  },
  modules: {
  }
})
