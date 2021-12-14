import Vue from 'vue'
import Vuex from 'vuex'
import localUrl from '../apis/local'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_IS_LOGIN(state, payload){
      state.isLogin = payload
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
    }
  },
  modules: {
  }
})
