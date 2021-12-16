import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    topics: [],
    quotes: "",
    weather: {},
  },
  mutations: {
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_TOPICS (state, payload) {
      state.topics = payload
    },
    SET_QUOTES (state, payload) {
      state.quotes = payload
    },
    SET_WEATHER (state, payload) {
      state.weather = payload
    }
  },
  actions: {
    doLogin(context, payload) {
      console.log(payload, `payload doLogin Store`)
      return axios({
        method: "POST",
        url: "/login",
        data: payload,
      });
    },
    doRegister ( context, payload ) {
      return axios({
        method: "POST",
        url: "/register",
        data: payload,
      });
    },
    googleSignIn(context, payload) {
      return axios({
        method: "POST",
        url: "/google-signin",
        data: {
          id_token: payload,
        },
      });
    },
    fetchTopics (context) {
      console.log(`fetchTopics on Store`)
      axios({
        method: "GET",
        url: "/topics",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      .then(({data}) => {
        console.log(data, `fetchTopics onStore`)
        context.commit("SET_TOPICS", data)
      }).catch((err) => {
        console.log(err.response.data.message)
      });
    },
    getQuotes (context) {
      console.log(`getQuotes onStore`)
      // const tweets = context.state.tweets
      axios({
        method: "GET",
        url: `/quotes`,
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      .then (({data}) => {
        context.commit('SET_QUOTES', data)
        console.log(data, `getQuotes onStore`);
      })
      .catch ((err) => {
        console.log(err.response.data);
      })
    },
    getWeather (context) {
      console.log(`api Weather, onStore`)
      let baseURL = `https://api.weatherbit.io/v2.0/current?lat=${localStorage.lat}&lon=${localStorage.lng}&key=66ca5f5a42ae4e19bb17a9d47dc0efc4&include=minutely`
      axios({
        method: "GET",
        url: baseURL,
        
      })
      .then (({data}) => {
        console.log(`weather onStore`)
        console.log("ini weather", data.data[0]);
        context.commit('SET_WEATHER', data.data[0])
      })
      .catch ((err) => {
        console.log(err.response.data);
      })
    },
    postTopic (context, payload) {
      console.log(`payload`, payload)

      return axios({
        method: "POST",
        url: "/topics",
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: payload
      }) 

    }
  },
  
  modules: {
  }
})
