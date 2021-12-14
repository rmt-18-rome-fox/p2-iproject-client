import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
let baseURL = 'http://localhost:3000'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    notes: []
  },
  mutations: {
    SET_LOGIN: function (state, payload = false) {
      state.isLoggedIn = payload
    },
    SET_NOTES: function (state, payload) {
      state.notes = payload
    }
  },
  actions: {
    login: function (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseURL}/login`,
          method: 'post',
          data: payload
        })
          .then(resp => {
            localStorage.setItem('access_token', resp.data.access_token)
            context.commit('SET_LOGIN', true)
            Swal.fire({
              icon: 'success',
              title: 'Hello!',
              text: 'Welcome back!'
            })
            resolve()
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: "It's us, not you..",
              text: `A little reminder though - ${err.response.data.message}`
            })
            reject()
          })
      })
    },
    register: function (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseURL}/register`,
          method: 'post',
          data: payload
        })
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Hello!',
              text: 'Welcome to the club!'
            })
            resolve()
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: "It's us, not you..",
              text: `${err.response.data.message} though, just saying`
            })
            reject()
          })
      })
    },
    getNotes: function (context) {
      axios({
        url: `${baseURL}/notes`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(resp => {
          context.commit('SET_NOTES', resp.data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: "Sorry..",
            text: err.response.data.message
          })
        })
    },
    addNote: function (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseURL}/notes`,
          method: 'post',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            title: payload.title,
            content: 'Add some content'
          }
        })
          .then(() => {
            resolve()
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: "Sorry..",
              text: err.response.data.message
            })
            reject(err)
          })
      })
    },
    deleteNote: function (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseURL}/notes/${payload}`,
          method: 'delete',
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(() => {
          resolve()
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: "Sorry..",
            text: err.response.data.message
          })
          reject(err)
        })
      })
    }
  },
  modules: {
  }
})
