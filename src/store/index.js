import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityIsFound: false,
    citySearch: "",
    weatherToday: [],
    ipClient: {},
  },
  mutations: {
    MUTATE_WEATHER(state, payload) {
      state.weatherToday = payload
    },
    MUTATE_SEARCH(state, payload) {
      state.citySearch = payload
    },
    MUTATE_CITY_ISFOUND(state) {
      state.cityIsFound = !state.cityIsFound
    },
  },
  actions: {
    async getIpClient() {
      console.log('<<< MASUK');
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
        
        this.dispatch("getRawDataWeatherByIp", dataIp)
      } catch (err) {
        console.log(err);
      }
    },
    async getRawDataWeatherByIp(context, payload) {
      try {
        
        const response = await axios.post(
           `http://localhost:3000/weather/current`,{
             ...payload
          }
        );
        const sendData = response.data
        console.log(sendData,"<<<< DATA");
        context.commit("MUTATE_WEATHER", sendData)
        
      } catch (err) {
        console.log(err);
      }
    },

  },
  modules: {
  }
})
