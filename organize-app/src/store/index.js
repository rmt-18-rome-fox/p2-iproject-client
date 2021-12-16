import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    tasks: [],
    taskDetail: {
      Category: {
        name: ''
      },
      User: {
        name: ''
      }
    },
  },
  mutations: {
    set_isLogin(state, payload = '') {
      state.isLogin = payload
    },
    fetch_task(state, payload) {
      state.tasks = payload
    },
    fetch_task_detail(state, payload = []) {
      state.taskDetail = payload
    }
  },
  actions: {
    doLogin: function ({ commit }, { email, password }) {
      return new Promise((res, rej) => {
        axios({
          method: 'POST',
          url: '/login',
          data: {
            email, password
          }
        })
          .then(({ data }) => {
            localStorage.setItem('access_token', data.access_token)
            commit('set_isLogin', true)
            res()
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.response.data.message,
            })
            console.log({ error });
            rej()
          })
      })
    },
    doRegister: function ({ commit }, { name, email, password, address }) {
      return new Promise((res, rej) => {
        console.log(name, email, password, address);
        axios({
          method: 'POST',
          url: '/register',
          data: {
            name, email, password, address
          }
        })
          .then(() => {
            commit('set_isLogin', false)
            res()
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.response.data.message,
            })
            console.log(error);
            rej()
          })
      })
    },
    getTasks: function ({ commit }) {
      return new Promise((res, rej) => {
        axios({
          method: 'GET',
          url: '/tasks',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
        })
          .then(({ data }) => {
            commit('fetch_task', data.findTask)
            res()
          })
          .catch((error) => {
            console.log(error);
            rej()
          })
      })
    },
    getTaskDetail({ commit }, id) {
      return new Promise((res, rej) => {
        axios({
          method: 'GET',
          url: `/tasks/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
        })
          .then(({ data }) => {
            // console.log(data);
            commit('fetch_task_detail', data)
            res()
          })
          .catch((error) => {
            console.log(error);
            rej()
          })
      })
    },
    deleteTask({ commit }, id) {
      return new Promise((res, rej) => {
        axios({
          method: 'DELETE',
          url: `/tasks/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(() => {
            res()
          })
          .catch((error) => {
            console.log(error);
            rej()
          })
      })
    },
    addTask: function ({ commit }, payload) {
      console.log({ payload })
      const formData = new FormData()
      formData.append('title', payload.title)
      formData.append('description', payload.description)
      formData.append('image', payload.image)
      formData.append('CategoryId', payload.CategoryId)
      return new Promise((res, rej) => {
        axios({
          method: 'POST',
          url: '/tasks',
          data: formData,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then((response) => {
            res(response)
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
            })
            console.log(error);
            rej(error)
          })
      })
    },
    getVoice({ commit }, taskDetail) {
      return new Promise((res, rej) => {
        console.log({taskDetail})
        axios({
          method: 'GET',
          url: '/tasks/voice',
        
          headers: {
            text: taskDetail,
            access_token: localStorage.getItem('access_token'),
          }
        })
          .then((response) => {
            let audio = new Audio(response.data)
            audio.play()
            console.log(response);
            commit({})
          })
          .catch((error) => {
            console.log(error);
            rej()
          })
      })
    }
  },
  modules: {
  }
})
