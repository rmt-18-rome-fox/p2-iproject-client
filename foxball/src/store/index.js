import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    posts: [],
    currentUser: '',
    messages: [],
    status: '',
  },
  mutations: {
    LOGIN(state, payload) {
      state.isLogin = payload
    },
    FETCH_POST(state, payload) {
      state.posts = payload
    },
    INITIATE_USER(state, payload) {
      state.currentUser = payload
    },
    SOCKET_GOTMESSAGE(state, payload) {
      state.messages = payload
    },
    SOCKET_USERSTATUS(state, payload) {
      state.status = payload.status
    }
  },
  actions: {
    async logginIn(context, payload) {
      try {
        const response = await axios.post('/login', payload)
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('username', response.data.dataUser.username)
        localStorage.setItem('email', response.data.dataUser.email)
        context.commit('LOGIN', true);
        context.commit('INITIATE_USER', localStorage.getItem('username'));
        this._vm.$socket.client.emit('user', payload)
      } catch (err) {
        context.commit('LOGIN', false);
        console.log(err);
      }
    },
    async fetchPost(context) {
      try {
        const response = await axios.get('/post', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FETCH_POST', response.data)
      } catch (err) {
        console.log(err);
      }
    },
    socket_connect() {
      console.log('connected', this._vm.$socket);
    },
    socket_disconnect() {
      console.log('disconnected', this._vm.$socket);
    },
    socket_customEventServer(context, payload) {
      console.log('customEventServer', payload);
    },
    customEventServer(context, payload) {
      this._vm.$socket.client.emit('customEventClient', payload)
    },
    sendChatMsg(context, payload) {
      this._vm.$socket.client.emit('sendingChatMsg', {
        username: localStorage.getItem('username'),
        message: payload.trim()
      })
    },
    socket_userStatus(context, payload) {
      context.commit('SOCKET_USERSTATUS', payload)
    },
    socket_gotMessage(context, payload) {
      context.commit('SOCKET_GOTMESSAGE', payload)
    }
  },
  modules: {
  }
})
