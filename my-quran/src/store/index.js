import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// const baseUrl = 'https://my-quran-webapp.herokuapp.com'
const baseUrl = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    isLogin: false,
    listSurah: [],
    detailSurah: [],
    prayerTimes: [],
    allJuzs: []
  },
  mutations: {
    LOGIN(state, data) {
      state.isLogin = data
    },
    GET_LIST_SURAH(state, data) {
      state.listSurah = data.chapters
    },
    GET_DETAIL_SURAH(state, data) {
      state.detailSurah = data
    },
    GET_PRAYER_TIMES(state, data) {
      state.prayerTimes = data.data
    },
    GET_All_JUZS(state, data) {
      state.allJuzs = data.juzs
    },
    GET_DETAIL_JUZS(state, data) {
      state.detailSurah = data
    },
    PAGINATION_BY_JUZS(state, data) {
      state.detailSurah = data
    },
    PAGINATIION_BY_CHAPTER(state, data) {
      state.detailSurah = data
    }
  },
  actions: {
    login(context, payload) {
      // console.log(payload, 'ini di action')
      return new Promise((resolve, reject) => {
        axios.post(`${baseUrl}/login`, payload)
        .then(({data}) => {
          resolve(data)
          context.commit('LOGIN', true)
        })
        .catch(err => {
          reject(err)
        })
      })
    },

    register(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${baseUrl}/register`, payload)
        .then(({data}) => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    fetchListSurah(context) {
      axios({
        method: "GET",
        url: `${baseUrl}/chapters`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        context.commit('GET_LIST_SURAH', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    fetchSurahById(context, id) {
      axios({
        method: "GET",
        url: `${baseUrl}/chapters/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        context.commit('GET_DETAIL_SURAH', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    fetchPrayerTimes(context) {
      axios({
        method: "GET",
        url: `${baseUrl}/prayerTimes`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        context.commit('GET_PRAYER_TIMES', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getJuzs(context) {
      axios({
        method: "GET",
        url: `${baseUrl}/juzz`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        context.commit('GET_All_JUZS', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    detailSurahById(context, id) {
      axios({
        method: "GET",
        url: `${baseUrl}/juzz/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        context.commit('GET_DETAIL_JUZS', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    paginationByJuzs(context, payload) {
      axios({
        method: "GET",
        url: `${baseUrl}/juzz/${payload.juzsNumber}?page=${payload.page}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        context.commit('PAGINATION_BY_JUZS', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    paginationByChapter(context, payload) {
      let {page, chapterNumber} = payload
      chapterNumber = chapterNumber.split(':')[0]

      axios({
        method: "GET",
        url: `${baseUrl}/chapters/${chapterNumber}?page=${page}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        context.commit('PAGINATIION_BY_CHAPTER', data)
      })
      .catch(err => {
        console.log(err)
      })
    }

  },
  
  modules: {
  }
})
