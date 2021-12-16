import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const basicUrl = 'https://archiline.herokuapp.com'

export default new Vuex.Store({
  state: {
    featuredArchitect: [],
    architects: [],
    portofolios: [],
    bookForm: {},
    architectPortofolio: [],
    portofolioDetail: {},
    portofoliosByArchitect: [],
    portofolioEditForm: {},
    tags: [],
    customerProfile: {},
    architectProfile: {}
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
    },
    SET_ARCHITECT_PORTOFOLIOS_BY_ARCHITECT (state, payload) {
      state.portofoliosByArchitect = payload
    },
    SET_EDIT_PORTOFOLIO (state, payload) {
      state.portofolioEditForm = payload
    },
    SET_TAGS (state, payload) {
      state.tags = payload
    },
    SET_CUSTOMER_PROFILE (state, payload) {
      state.customerProfile = payload
    },
    SET_ARCHITECT_PROFILE (state, payload) {
      state.architectProfile = payload
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

    onRegister (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `${basicUrl}/register`,
          data: payload
        })
          .then(data => {
            resolve(data.data)
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
            console.log(data.data)
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
    },

    fetchArchitectPortofoliosByArchitect (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/architect/portofolio`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            context.commit('SET_ARCHITECT_PORTOFOLIOS_BY_ARCHITECT', data.data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    deletePortofolio (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'DELETE',
          url: `${basicUrl}/architect/portofolio/${payload}`,
          headers: {
            access_token: localStorage.getItem('access_token')
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

    fetchEditPortofolioForm (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/architect/portofolio/${payload}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            context.commit('SET_EDIT_PORTOFOLIO', data.data)
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    addPortofolio (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        const form = new FormData()
        form.append('title', payload.title)
        form.append('description', payload.description)
        form.append('file', payload.file)
        payload.tags.forEach((tag, index) => {
          form.append(`TagId[${index}]`, tag)
        })
        axios({
          method: 'POST',
          url: `${basicUrl}/architect/portofolio/add`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: form
        })
          .then(data => {
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    editPortofolio (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        const form = new FormData()
        form.append('title', payload.title)
        form.append('description', payload.description)
        form.append('file', payload.file)
        payload.tags.forEach((tag, index) => {
          form.append(`TagId[${index}]`, tag)
        })
        axios({
          method: 'PUT',
          url: `${basicUrl}/architect/portofolio/${payload.id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: form
        })
          .then(data => {
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    fetchTags (context) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/architect/tags`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            context.commit('SET_TAGS', data.data)
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    fetchCustomerProfile (context) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/customer/profile`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            console.log(data.data, '<<<<<<<<<<< ini data data')
            context.commit('SET_CUSTOMER_PROFILE', data.data)
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    editProfileCustomer (context, payload) {
      return new Promise((resolve, reject) => {
        const form = new FormData()
        form.append('name', payload.name)
        form.append('phoneNumber', payload.phoneNumber)
        form.append('address', payload.address)
        form.append('file', payload.file)
        axios({
          method: 'PUT',
          url: `${basicUrl}/customer/profile`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: form
        })
          .then(data => {
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    fetchArchitectProfile (context) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${basicUrl}/architect/profile`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            console.log(data.data, '<<<<<<<<<<< ini data data')
            context.commit('SET_ARCHITECT_PROFILE', data.data)
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    editProfileArchitect (context, payload) {
      return new Promise((resolve, reject) => {
        const form = new FormData()
        form.append('name', payload.name)
        form.append('phoneNumber', payload.phoneNumber)
        form.append('address', payload.address)
        form.append('description', payload.description)
        form.append('price', payload.price)
        form.append('file', payload.file)
        axios({
          method: 'PUT',
          url: `${basicUrl}/architect/profile`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: form
        })
          .then(data => {
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    tablePortofolio (state) {
      const newPortofolio = []
      state.portofoliosByArchitect.forEach((portofolio, index) => {
        newPortofolio.push({ No: index + 1, Title: portofolio.title, Description: portofolio.description, Image: portofolio.imageUrl, id: portofolio.id, tags: portofolio.Tags })
      })
      return newPortofolio
    }
  },
  modules: {
  }
})
