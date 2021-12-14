import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const serverUrl = "http://localhost:3000"

export default new Vuex.Store({
  state: {
    isLog: false,
    isRegister: false,
  },
  mutations: {
    LOG_IN(state, payload) {
      state.isLog = payload
    },
    REGISTER(state, payload) {
      state.isRegister = payload
    },
    ERROR_HANDLER(state, payload) {
      state.allError = payload
    },
  },
  actions: {
    async onLogServer(context, payload) {

      try {

        const response = await axios.post(`${serverUrl}/login`, payload)

        context.commit("LOG_IN", true)

        localStorage.access_token = response.data.access_token;
        localStorage.username = response.data.data.username;
        localStorage.role = response.data.data.role;
        

      } catch (err) {
        const errorLog = { msg: err.response.data, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },
    async onLogGoogle(context, payload) {

      try {

        const response = await axios.post(`${serverUrl}/googleVer`, payload)

        context.commit("LOG_IN", true)

        localStorage.access_token = response.data.access_token;
        localStorage.username = response.data.data.username;
        localStorage.role = response.data.data.role;

      } catch (err) {
        const errorLog = { msg: err.response.data, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },
    async onRegisterServer(context, payload) {

      try {

        const response = await axios.post(`${serverUrl}/register`, payload)

        context.commit("REGISTER", true)

        localStorage.username = response.data.username;

      } catch (err) {
        const errorLog = { msg: err.response.data, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },
  },
  modules: {
  }
})
