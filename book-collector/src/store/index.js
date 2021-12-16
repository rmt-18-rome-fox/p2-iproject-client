import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const baseUrl = "https://iproject-siska.herokuapp.com"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    bookmarks: [],
    book: [],
    isLogin: false
  },
  mutations: {
    setBooks(state, payload){
      state.books = payload
    },
    setBookmarks(state, payload){
      state.bookmarks = payload
    },
    setBookDetail(state, payload){
      state.book = payload
    },
    setToken(state, payload){
      state.isLogin = payload
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
      return axios.get(`${baseUrl}/books/${payload}`, {
        headers:{
          access_token: localStorage.access_token
        }
      })
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
    },
    getPagination(context, payload){
      return axios.get(`${baseUrl}/books?page=${payload}`, {
        headers:{
          access_token: localStorage.access_token
        }
      })
    },
    doSearchBook(context, payload){
      return axios.get(`${baseUrl}/books?search=${payload}`, {
        headers:{
          access_token: localStorage.access_token
        }
      })
    },
    detectLang(context, payload){
      return axios.post(`${baseUrl}/detectlang`, payload)
    }
  },
  modules: {
  }
})