import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let baseUrl = "http://localhost:10000"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    games: [],
    favGames : [],
    detail :[]
  },
  mutations: {
    ISLOGIN(state,payload){
      state.isLogin = payload
    },
    FETCHGAMES(state,payload){
      state.games = payload
    },
    FILTERGAME(state,payload){
      state.games = payload
   },
   ADDFAV(state,payload){
     state.favGames.push(payload)
   },
   FAVGAMES(state,payload){
     state.favGames = payload
   },
   GAMEDETAIL(state,payload){
    state.detail = payload
   }
  },
  actions: {
    loginUser(context, payload){
      return new Promise((resolve,reject)=>{
         let url = `${baseUrl}/login`
         axios({
           method: 'POST',
           url,
           data : payload
         })
         .then(({data})=>{
             resolve(data)
             context.commit('ISLOGIN', true)
         })
         .catch(err=>{
             reject(err)
         })
      })
     },
     registerUser(context,payload){
      return new Promise((resolve,reject)=>{
        let url= `${baseUrl}/register`
        axios({
           method: 'POST',
           url,
           data: payload
        })
        .then(({data})=>{
            resolve(data)
        })
        .catch(err=>{
           reject(err)
        })
    })
  },
  fetchGames(context){
    let url = `${baseUrl}/games`;
    axios({
      method: "GET",
      url,
      headers : {
        access_token: localStorage.getItem("acces_token"),
      }
    })
    .then(({data}) => {
      
        context.commit('FETCHGAMES', data)
    })
    .catch((err) => {
        console.log(err);
    });
  },
  filtered(context,payload){
    let url = `${baseUrl}/games?genre=${payload.genre}&title=${payload.title}&page=${payload.page}`;
    return new Promise ((resolve,reject)=>{ 
    axios({
        method: "GET",
        url,
        headers : {
          access_token: localStorage.getItem("acces_token"),
        }
      })
      .then(({data}) => {
        context.commit('FILTERGAME', data)
        console.log(data, `AAAAAAAAAAAAAAAAA`)
        resolve(data)
      })
      .catch((err) => {
         reject(err)
        })
      });
    },
    addFavGame(context,payload){
      let url = `${baseUrl}/favoritegames/${payload.GameId}`
      return new Promise((resolve,reject)=>{
        axios({
          method: 'POST',
          url :url,
          headers : {
            access_token: localStorage.getItem("acces_token"),
          }
        })
        .then(({data})=>{
          context.commit('ADDFAV', data)
          resolve(data)
        })
        .catch(err=>{
          reject(err)
        })
      })
    },
    fetchFavorites(context){
      let url = `${baseUrl}/favoritegames`
      axios({
        method :'GET',
        url:url,
        headers : {
          access_token: localStorage.getItem("acces_token"),
        }
      })
      .then(({data})=>{
        context.commit('FAVGAMES', data)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    gameDetail(context,payload){
      let url = `${baseUrl}/games/${payload}`
      axios({
        method :'GET',
        url:url,
        headers : {
          access_token: localStorage.getItem("acces_token"),
        }
      })
      .then(({data})=>{
        context.commit('GAMEDETAIL', data)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    googleLogin(context,payload){
      return new Promise ((resolve,reject)=>{
        axios({
              url : `${baseUrl}/googleAuth`,
              method: 'POST',
              data: {
                  idToken : payload.getAuthResponse().id_token
              }
          })
          .then(({data})=>{
            resolve(data)
            context.commit('ISLOGIN', true)
        })
        .catch(err=>{
           reject(err)
        })
      }) 
        
  }
    
  },
  modules: {
  }
})
