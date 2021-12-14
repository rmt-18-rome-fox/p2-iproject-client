import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const baseUrl = "http://localhost:3000/"

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
      return axios.post(`${baseUrl}/register`, payload)
    },
    goLogin(context, payload){
      return axios.post(`${baseUrl}/login`, payload)
    },
    fetchBooks(context, payload){
      console.log(context, payload);
      return axios.get(`https://gutendex.com/books`)
    },
    fetchBookmarks(context, payload){
      console.log(context, payload);
      axios.get(`${baseUrl}/bookmarks`)
    },
    bookDetail(context, payload){
      return axios.get(`${baseUrl}/bookmarks/${payload}`)
    }
  },
  modules: {
  }
})