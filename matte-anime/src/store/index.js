import Vue from 'vue'
import Vuex from 'vuex'
import localUrl from '../apis/local'
import jikanUrl from '../apis/jikan'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    upComingAnimes: [],
    choosenAnime: {},
    watchLists: []
  },
  mutations: {
    SET_IS_LOGIN(state, payload){
      state.isLogin = payload
    },
    SET_UP_COMING_ANIMES(state, payload){
      state.upComingAnimes = payload
    },
    SET_CHOOSEN_ANIME(state, payload){
      state.choosenAnime = payload
    },
    SET_WATCH_LISTS(state, payload){
      state.watchLists = payload
    }
  },
  actions: {
    doLogin({commit}, {email, password}){
      return new Promise((resolve, reject) => {
        localUrl.post('/login', {email, password})
        .then(({data}) => {
          console.log({data});
          localStorage.setItem("access_token", data.access_token)
          commit("SET_IS_LOGIN", true);
          resolve()
        })
        .catch((err)=> {
          console.log({err});
        })
      })
    },
    doRegister({commit}, {email, password, fullName}){
      return new Promise((resolve, reject) => {
        localUrl.post('/register', {email, password, fullName})
        .then(({data}) => {
          console.log({data});
          resolve()
        })
        .catch((err)=> {
          console.log({err});
        })
      })
    },
    fetchAnimes({commit}, payload){
      jikanUrl.get('/season/2021/winter')
      .then(({data}) => {
        console.log({ini: data.anime});
        commit("SET_UP_COMING_ANIMES", data.anime);
      })
      .catch((err) => {
        console.log({err});
      })
    },
    animeDetail({commit}, jikanAnimeId){
      console.log('masuk');
      jikanUrl.get(`/anime/${jikanAnimeId}`)
      .then(({data}) => {
        console.log({data});
        commit("SET_CHOOSEN_ANIME", data)
      })
      .catch(({err}) => {
        console.log({err});
      })
    },
    addToWatchList({commit}, {JikanAnimeId, title, image_url}){
      return new Promise((resolve, reject) => {
        localUrl.post('/watchlists', {JikanAnimeId, priority: "Must Watch", title, image_url}, {headers: {access_token: localStorage.getItem("access_token")}})
        .then(({data}) => {
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
      })
    },
    fetchWatchLists({commit}, payload) {
      localUrl.get('watchlists', {headers: {access_token: localStorage.getItem("access_token")}})
      .then(({data}) => {
        // console.log({data});
        commit("SET_WATCH_LISTS", data)
      })
      .catch((err) => {
        console.log({err});
      })
    }
  },
  modules: {
  }
})
