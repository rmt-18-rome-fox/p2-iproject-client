import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    identifier: 'Guest'
  },
  mutations: {
    PUSH_MESSAGES: function (state, payload) {
      state.messages.push(payload)
    },
    SET_IDENTIFIER: function (state, payload) {
      state.identifier = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
