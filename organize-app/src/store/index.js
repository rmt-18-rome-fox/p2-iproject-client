import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    tasks: [],
    taskDetail: {}
  },
  mutations: {
    set_isLogin(state, payload = ''){
      state.isLogin = payload
    },
    fetch_task(state, payload){
      state.tasks = payload
    },
    fetch_task_detail(state, payload=[]){
      state.taskDetail = payload
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
          rej()
        })
      })
    },
    doRegister: function({commit}, {name, email, password, address}){
      return new Promise((res, rej)=>{
        console.log(name, email, password, address);
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
          rej()
        })
      })
    },
    getTasks: function({commit}){
      return new Promise((res, rej)=>{
        axios({
          method: 'GET',
          url: '/tasks',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
        })
        .then(({data})=>{
          commit('fetch_task', data.findTask)
          res()
        })
        .catch((error)=>{
          console.log(error);
          rej()
        })
      })
    },
    getTaskDetail({commit}, id){
      return new Promise((res, rej) =>{
        axios({
          method: 'GET',
          url: `/tasks/${id}`
        })
        .then(({data})=>{
          commit(fetch_task_detail, data.findTask)
          res()
        })
        .catch((error)=>{
          console.log(error);
          rej()
        })
      })
    }
  },
  modules: {
  }
})
