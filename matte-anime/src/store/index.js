import Vue from 'vue'
import Vuex from 'vuex'
import localUrl from '../apis/local'
import jikanUrl from '../apis/jikan'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    upComingAnimes: []
  },
  mutations: {
    SET_IS_LOGIN(state, payload){
      state.isLogin = payload
    },
    SET_UP_COMING_ANIMES(state, payload){
      state.upComingAnimes = payload
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
      jikanUrl.get('/season/later')
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
      })
      .catch(({err}) => {
        console.log({err});
      })
    }
  },
  modules: {
  }
})
