import Vue from 'vue'
import Vuex from 'vuex'
import heroAxios from '../apis/heroAxios'
// import superAxios from '../apis/superAxios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hero: [],
    currentUser: "",
    chats: []
  },
  mutations: {
    SET_HERO(state,payload){
      state.hero = payload
    },
    SET_CURENTUSER(state,payload){
      state.currentUser = payload
    },
    SOCKET_RECEIVEMESSAGEFROMSERVER(state,payload){
      console.log("chat from server >>>>>>>>>>>>>>",payload)
      state.chats = payload
    }
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
          console.log(data.user.email,"data login >>>>>>>>>>>>>>>>>")
          localStorage.setItem("access_token", data.access_token)
          localStorage.setItem("email", data.user.email)
          
          resolve()
        })
        .catch((err)=>{
          reject(err)
        })
      })
    },
    socket_connect(){
      console.log("connected", this._vm.$socket)
    },
    socket_disconnect(){
      console.log("disconnected", this._vm.$socket)
    },
    socket_customEventFromServer(context,payload){
      console.log("customEventFromServer", payload)
    },
    sendCustomEventFromServe(context, payload){
      this._vm.$socket.client.emit("customEventFromClient",payload)
    },
    setUsername(context, payload){
      console.log(payload, "dari username >>>>>>>>>>>>>>")
      context.commit("SET_CURENTUSER", payload)

      this._vm.$socket.client.emit("setUsername",payload)
    },
    sendMessage(context, payload){
      this._vm.$socket.client.emit("sendMessageToServer",{
        user: this.state.currentUser,
        message: payload.trim()
      })
    },
    socket_receiveMessageFromServer(context,payload){
      // state.chats = payload
      console.log(payload, "chat from server >>>>>>>>>>>>>>")
      context.commit("SOCKET_RECEIVEMESSAGEFROMSERVER", payload)
    }
  },
  modules: {
  }
})
