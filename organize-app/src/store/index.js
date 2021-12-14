import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    set_isLogin(state, payload = ''){
      state.isLogin = payload
    }
  },
  actions: {
    doLogin: function({commit}, {email, password}){
      return new Promise((res, rej)=>{
        axios({
          method: 'POST',
          url: '/login',
          data: {
            email, password
          }
        })
        .then(({data})=>{
          localStorage.setItem('access_token', data.access_token)
          commit ('set_isLogin', true)
          res()
        })
        .catch((error)=>{
          console.log(error);
        })
      })
    },
    doRegister: function({commit}, {name, email, password, address}){
      return new Promise((res, rej)=>{
        axios({
          method: 'POST',
          url: '/register',
          data: {
            name, email, password, address
          }
        })
        .then(()=>{
          commit('set_isLogin', false)
          res()
        })
        .catch((error)=>{
          console.log(error);
        })
      })
    }
  },
  modules: {
  }
})
