import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import baseUrl from '../../helpers/globalVar'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    originCoord: localStorage.getItem("originCoord"),
    destinationCoord: localStorage.getItem("destCoord"),
    isLoggedIn: false,
    wantLogin: false,
    lastShipment: {},
    userHistory: {}
  },
  mutations: {
    SET_WANT_ACCOUNT(state, payload = false) {
      state.wantLogin = payload
    },
    SET_CURRENT_USER() {
      console.log("ok");
    },
    SET_LOGIN_STATUS(state, payload = false) {
      state.isLoggedIn = payload
    },
    SET_MOST_RECENT_DATA(state, routeDetail) {
      state.lastShipment = routeDetail
    },
    SET_USER_HISTORY(state, historyArr = {}) {
      state.userHistory = historyArr
    }
  },
  actions: {
    calculate({ dispatch }, { originQuery, destQuery, weight }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `${baseUrl}/api/mapbox`,
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
          data: {
            originQuery,
            destQuery
          }
        })
          .then(({ data }) => {
            let distance = data.routes[0].distance / 1000;
            const origin = data.routes[0].legs[0].summary.split(',')[0]
            const destination = data.routes[0].legs[0].summary.split(',')[1]
            return dispatch("getCarbonFootprint", {distance, weight, origin, destination});
          })
          .then((response) => {
            console.log("masuk", response);
            console.log(
              "masuk kesini :",
              response.data.data.attributes.carbon_kg
            );
            const carbonEmitted = response.data.data.attributes.carbon_kg;
            resolve(carbonEmitted);
          })
          .catch((err) => {
            reject(err)
          });
      });
    },
    getCarbonFootprint({ commit }, {distance, weight, origin, destination}) {
      
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `${baseUrl}/api/carbon-interface`,
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
          data: {
            weight,
            distance
          }
        })
          .then((response) => {
            const routeDetail = {
              distance,
              carbonEmitted : response.data.data.attributes.carbon_kg, 
              origin, 
              destination 
            }
            console.log('migration success')
            commit('SET_MOST_RECENT_DATA', routeDetail)
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    login({ commit }, { email, password }) {
      return new Promise ((resolve, reject) => {
        axios({
          method: 'POST',
          url: `${baseUrl}/login`,
          data: {
            email,
            password
          }
        })
        .then(({ data }) => {
          const { access_token } = data
          localStorage.setItem('access_token', access_token)
          commit('SET_LOGIN_STATUS', true)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    register(context, { name, email, password }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `${baseUrl}/register`,
          data: {
            name,
            email,
            password
          }
        })
        .then(() => {
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    postHistory(context, routeDetails) {
      return new Promise((resolve, reject) => {
        console.log(">>>>>>", localStorage.getItem('access_token'))
        axios({
          method: 'POST',
          url: `${baseUrl}/1/history`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: routeDetails
        })
        .then(({ data }) => {
          console.log("about history post :", data)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    fetchHistory({ commit }) {
      return new Promise ((resolve, reject) => {
        axios({
          method: 'GET',
          url: `${baseUrl}/1/history`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          console.log("data received: ", data)
          commit('SET_USER_HISTORY', data)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {},
});
