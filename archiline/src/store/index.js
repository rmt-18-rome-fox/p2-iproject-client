import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const basicUrl = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    featuredArchitect: [],
    architects: [],
    portofolios: [],
    bookForm: {},
    architectPortofolio: [],
    portofolioDetail: {}
  },
  mutations: {
    SET_FEATURED_ARCHITECT (state, payload) {
      state.featuredArchitect = payload
    },
    SET_ARCHITECTS (state, payload) {
      state.architects = payload
    },
    SET_PORTOFOLIOS (state, payload) {
      state.portofolios = payload
    },
    SET_BOOK_FORM (state, payload) {
      state.bookForm = payload
    },
    SET_ARCHITECT_PORTOFOLIOS (state, payload) {
      state.architectPortofolio = payload
    },
    SET_PORTOFOLIO_DETAIL (state, payload) {
      state.portofolioDetail = payload
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
    },

    fetchArchitects (context) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/customer/architects`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            context.commit('SET_ARCHITECTS', data.data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    fetchPortofolios (context) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/customer/portofolios`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            context.commit('SET_PORTOFOLIOS', data.data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    fetchBookForm (context, payload) {
      return axios({
        method: 'GET',
        url: `${basicUrl}/customer/architects/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          console.log(data.data)
          context.commit('SET_BOOK_FORM', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    onBook (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `${basicUrl}/customer/consultation/${payload.ArchitectId}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            startDate: payload.startDate,
            session: payload.session,
            notes: payload.notes
          }
        })
          .then(data => {
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    fetchArchitectPortofolios (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/customer/architects/portofolios/${payload}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            context.commit('SET_ARCHITECT_PORTOFOLIOS', data.data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    fetchPortofolioDetail (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/customer/portofolios/${payload}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            context.commit('SET_PORTOFOLIO_DETAIL', data.data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    onValidate (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'PATCH',
          url: `${basicUrl}/validate?validate=${payload}`
        })
          .then(data => {
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
