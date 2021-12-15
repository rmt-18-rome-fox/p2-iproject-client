import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const baseUrl = "http://localhost:3000"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    bookmarks: []
  },
  mutations: {
    setBooks(state, payload){
      state.books = payload
    },
    setBookmarks(state, payload){
      state.bookmarks = payload
    }
  },
  actions: {
    goRegister(context, payload){
      console.log(payload);
      return axios.post(`${baseUrl}/register`, payload)
    },
    goLogin(context, payload){
      console.log(payload);
      return axios.post(`${baseUrl}/login`, payload)
    },
    fetchBooks(context, payload){
      console.log(payload);
      return axios.get(`${baseUrl}/books`, {
        headers:{
          access_token: localStorage.access_token
        }
      })
    },
    fetchBookmarks(context, payload){
      console.log(context, payload);
      return axios.get(`${baseUrl}/bookmarks`, {
        headers:{
          access_token: localStorage.access_token
        }
      })
    },
    bookDetail(context, payload){
      return axios.get(`${baseUrl}/books/${payload}`)
    },
    addBookmark(context, payload){
      console.log(payload,"masuk sini");
      return axios.post(`${baseUrl}/bookmarks/${payload}`, {}, {
        headers:{
          access_token: localStorage.access_token
        }
      })
    },
    deleteBookmark(context, payload){
      return axios.delete(`${baseUrl}/bookmarks/${payload}`, {
        headers:{
          access_token: localStorage.access_token
        }
      })
    }
  },
  modules: {
  }
})