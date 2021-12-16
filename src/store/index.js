import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import newAxios from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityIsFound: false,
    citySearch: "",
    weatherToday: [],
    weatherForecast: [],
    ipClient: {},
    pageToogle: false
  },
  mutations: {
    MUTATE_WEATHER(state, payload) {
      state.weatherToday = payload
    },
    MUTATE_FORECAST_WEATHER(state, payload) {
      state.weatherForecast = payload
    },
    MUTATE_SEARCH(state, payload) {
      state.citySearch = payload
    },
    MUTATE_SW_PAGE(state) {
      state.pageToogle = !state.pageToogle
    },
    MUTATE_CITY_ISFOUND(state) {
      state.cityIsFound = !state.cityIsFound
    },
  },
  actions: {
    swPage(context) {
      context.commit("MUTATE_SW_PAGE")
    },
    async getIpClient() {
      try {
        const response = await axios.get(
           "https://ipapi.co/json/",
        );
        
        const sendData = response.data
       
        let dataIp = {
          city: sendData.city,
          lat: sendData.latitude,
          lon: sendData.longitude
        }
        
        this.dispatch("getCurrentWeather", dataIp)
        localStorage.setItem("city", dataIp.city)
      } catch (err) {
        console.log(err);
      }
    },
    getCurrentWeather(context, payload) {
      return new Promise((resolve, reject) => {
        newAxios({
          url: `/weather/current`,
          method: "POST",
          data: {...payload}
        })
        .then(({data}) => {
          context.commit("MUTATE_WEATHER", data)
          
          resolve(data)
        })
        .catch((err) => {
          console.log(err.response.data.message);
          reject(err)
        })

      })
      
    },
    getForecastWeather(context) {

      return new Promise((resolve, reject) => {
        newAxios({
          url: `/weather/forecast`,
          method: "POST",
          data: {
            city: localStorage.getItem("city")
          }
        })
        .then(({data}) => {
          context.commit("MUTATE_FORECAST_WEATHER", data)
          
          resolve(data)
        })
        .catch((err) => {
          console.log(err.response.data.message);
          reject(err)
        })

      })
      
    },

  },
  modules: {
  }
})
