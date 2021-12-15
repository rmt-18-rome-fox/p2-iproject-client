import Vue from 'vue'
import Vuex from 'vuex'
import heroAxios from '../apis/heroAxios'
// import superAxios from '../apis/superAxios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hero: []
  },
  mutations: {
    SET_HERO(state,payload){
      state.hero = payload
    },
  },
  actions: {
    fetchHero (context){
      heroAxios({
        method:"get",
        url:`/hero`
        })
        .then((response) =>{
          context.commit('SET_HERO',response.data)
        })
        .catch((err) =>{
          console.log(err)
        })

      
    },
    detailHero (context,{id}){
      console.log({id}, '>>>>>>>>>>>>>>>>>>>>>>> payload')
      return new Promise((resolve,reject)=>{
        heroAxios({
        method:"get",
        url:`/hero/${id}`
        
        })
        .then((response) =>{
         console.log(response.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> data cuy")
          resolve()
          
        })
        .catch(() =>{
          
          reject()
        })
    
      })
    },
    Register (context,{username,email,password,phoneNumber}){
      return new Promise((resolve,reject)=>{
        heroAxios({
          method: "post",
          url: "/customer/register",
          data: {
            username,
            email,
            password,
            phoneNumber,
          },
        })
        .then(() =>{
         
          resolve()
        })
        .catch((err)=>{
          
          reject(err)
        })
      })
    },
    login (context,{email,password}){
      return new Promise((resolve,reject)=>{
        heroAxios({
          method: "post",
          url: "/login",
          data: {
            email,
            password,
          },
        })
        .then(({data}) =>{
          localStorage.setItem("access_token", data.access_token)
          resolve()
        })
        .catch((err)=>{
          reject(err)
        })
      })
    },
  },
  modules: {
  }
})
