import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    posts: [],
    currentUser: '',
    messages: [],
    status: '',
    standingTables: [],
    arrNews: [],
    arrLikes: []
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
    },
    FETCH_TABLE(state, payload) {
      state.standingTables = payload
    },
    FETCH_NEWS(state, payload) {
      state.arrNews = payload
    },
    FETCH_LIKE(state, payload) {
      state.arrLikes = payload
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
        Swal.fire({
          title: `Hello ${response.data.dataUser.username}`,
          text: "Welcome!",
          icon: "success",
          confirmButtonText: "Continue Sign In!",
        });
      } catch (err) {
        context.commit('LOGIN', false);
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
      }
    },
    async googleSuccess(context, payload) {
      try {
        const response = await axios({
          url: '/authGoogle',
          method: "post",
          data: {
            idToken: payload.getAuthResponse().id_token,
          },
        })
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('username', response.data.dataFromGoogle.username)
        context.commit('LOGIN', true);
        Swal.fire({
          title: `Hello ${response.data.dataFromGoogle.username}`,
          text: "Welcome!",
          icon: "success",
          confirmButtonText: "Continue Sign In!",
        });
      } catch (err) {
        context.commit('LOGIN', false);
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
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
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
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
    },
    async fetchTable(context) {
      try {
        const response = await axios({
          url: '/standing',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FETCH_TABLE', response.data)
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
      }
    },
    async addPost(context, payload) {
      try {
        let form = new FormData();
        form.append("caption", payload.caption);
        form.append("imgUrl", payload.imgUrl);
        await axios({
          url: '/post',
          method: 'POST',
          data: form,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
      }
    },
    async fetchNews(context) {
      try {
        const response = await axios({
          url:'/news',
          methods: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FETCH_NEWS', response.data)
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
      }
    },
    async fetchLike(context) {
      try {
        const response = await axios({
          url: '/likes',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('FETCH_LIKE', response.data)
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
      }
    },
    async likedPost(context, payload) {
      try {
        await axios({
          url: `/likes/${payload}`,
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        Swal.fire({
          position: "top-end",
          title: `Success like post`,
          text: `Great`,
          icon: "success",
          confirmButtonText: "ok",
        });
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
      }
    },
    async registerFans(context, payload) {
      try {
        await axios({
          url: '/fans/register',
          method: 'POST',
          data: payload
        })
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
      }
    },
    async removeLike(context, payload) {
      try {
        await axios({
          url: `/likes/${payload}`,
          method: 'DELETE',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        Swal.fire({
          position: "top-end",
          title: `Success remove like`,
          text: `hmmm`,
          icon: "success",
          confirmButtonText: "Next!",
        });
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Check Again!",
        });
      }
    },
    
  },
  modules: {
  }
})
