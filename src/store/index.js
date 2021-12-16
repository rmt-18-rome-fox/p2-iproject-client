import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    bookinglist: [],
    currentBook: [],
    carById: {},
    email: '',
    chats: []
  },
  mutations: {
    SOCKET_RECMESSERVER (state, payload) {
      state.chats = payload
    },
    IS_SET_EMAIL (state, payload) {
      state.email = payload
    },
    IS_CAR_BY_ID (state, payload) {
      state.carById = payload
    },
    ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    ISBOOKING (state, payload) {
      state.bookinglist = payload
    },
    ISCURRENTBOOK (state, payload) {
      state.currentBook = payload
    }
  },
  actions: {
    loginUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: 'http://localhost:3000/login',
          data: {
            email: payload.email,
            password: payload.password
          }
        })
          .then(data => {
            localStorage.setItem('access_token', data.data.access_token)
            resolve(data)
          })
          .catch(err => reject(err))
      })
    },
    registerUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/register', payload)
          .then(data => resolve(data))
          .catch(err => reject(err))
      })
    },
    fetchBooking (context, payload) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/car',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('ISBOOKING', data.data)
          console.log(data)
        })
        .catch(err => console.log(err))
    },
    bookingCar (context, payload) {
      axios({
        method: 'post',
        url: `http://localhost:3000/book/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          dateStart: payload.dateStart,
          dateEnd: payload.dateEnd
        }
      })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },
    logoutUser (context, payload) {
      localStorage.clear()
    },
    fetchCurrentBook (context, payload) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/book',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('ISCURRENTBOOK', data.data)
        })
        .catch(err => console.log(err))
    },
    authGoogle (context, payload) {
      const googletoken = { idToken: payload.getAuthResponse().id_token }
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/authGoogle', googletoken)
          .then((data) => {
            localStorage.setItem('access_token', data.data.access_token)
            context.commit('ISLOGIN', true)
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    fetchCarId (context, payload) {
      axios({
        method: 'get',
        url: `http://localhost:3000/car/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('IS_CAR_BY_ID', data.data)
        })
        .catch(err => console.log(err))
    },
    // TESSSSSSSSSSSSSSSSS
    socket_connect () {
      console.log('connect', this._vm.$socket)
    },
    socket_disconect () {
      console.log('disconnect', this._vm.$socket)
    },
    forRefresh (_, payload) {
      this._vm.$socket.client.emit('forRefresh', payload)
    },
    setUsername (context, payload) {
      context.commit('IS_SET_EMAIL', payload)
      this._vm.$socket.client.emit('setUsername', payload)
    },
    sendMessage (_, payload) {
      this._vm.$socket.client.emit('sendMessageToServer', {
        user: this.state.email,
        message: payload.chatMessage,
        bookId: payload.bookId
      })
    },
    socket_receiveMessageFromServer (_, payload) {
      _.commit('SOCKET_RECMESSERVER', payload)
    }
  },
  modules: {
  }
})
