import Vue from 'vue'
import Vuex from 'vuex'
import axie from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    identifier: 'Guest',
    canvasUrl: ''
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
    }
  },
  actions: {
    postMeeting: function (context, payload) {
      const { state } = context

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
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
