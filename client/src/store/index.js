import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const serverUrl = "https://server-mylovelypetshop.herokuapp.com"

export default new Vuex.Store({
  state: {
    isLog: false,
    isRegister: false,
    productData: { },
    orderData: { },
    successAddProduct: { },
    allError: { },
    checkoutData: { },
    historyData: { },
    statusRefresh: { },
  },
  mutations: {
    LOG_IN(state, payload) {
      state.isLog = payload
    },
    REGISTER(state, payload) {
      state.isRegister = payload
    },
    ERROR_HANDLER(state, payload) {
      state.allError = payload
    },
    FETCH_PRODUCT(state, payload) {
      state.productData = payload
    },
    FETCH_ALL_ORDER(state, payload) {
      state.orderData = payload
    },
    TRY_ADD_ORDER(state, payload) {
      state.successAddProduct = payload
    },
    FETCH_CHECKOUT(state, payload) {
      state.checkoutData = payload
    },
    FETCH_HISTORY(state, payload) {
      state.historyData = payload
    },
    REFRESH_STATUS(state, payload) {
      state.statusRefresh = payload
    },
  },
  actions: {
    async onLogServer(context, payload) {

      try {

        const response = await axios.post(`${serverUrl}/login`, payload)

        context.commit("LOG_IN", true)

        localStorage.access_token = response.data.access_token;
        

      } catch (err) {
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },
    async onLogGoogle(context, payload) {

      try {

        const response = await axios.post(`${serverUrl}/googleVer`, payload)

        context.commit("LOG_IN", true)

        console.log(`hello?`)

        localStorage.access_token = response.data.access_token;

      } catch (err) {
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },
    async onRegisterServer(context, payload) {

      try {
        const response = await axios.post(`${serverUrl}/register`, payload)
        context.commit("REGISTER", true)
        localStorage.username = response.data.username;

      } catch (err) {
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },
    async onFetchItem(context) {

      try {

        const response = await axios.get(`${serverUrl}/products`)

        context.commit("FETCH_PRODUCT", response.data)

      } catch (err) {
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },

    async onOrder(context, payload) {

      try {

        const access_token = payload

        const response = await axios.get(`${serverUrl}/order`, { headers: { access_token }})

        context.commit("FETCH_ALL_ORDER", response.data)

      } catch (err) {
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },

    async addProductToOrder(context, payload) {

      try {

        const access_token = localStorage.getItem('access_token')

        const response = await axios.post(`${serverUrl}/order/${payload}`, { }, { headers:  { access_token }  })
        
        context.commit("TRY_ADD_ORDER", response.data)

      } catch (err) {
        console.log(err.response.data)
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },

    async onCheckout(context, payload) {

      try {

        const access_token = payload

        const response = await axios.get(`${serverUrl}/checkout`, { headers: { access_token }})

        context.commit("FETCH_CHECKOUT", response.data.orderDerail)

      } catch (err) {
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },

    async onChargeMidTrans(context) {

      try {

        const access_token = localStorage.getItem(`access_token`)

        const response = await axios.post(`${serverUrl}/checkout/charge`, {} , { headers: { access_token }})

        window.snap.pay(response.data.result.token)

      } catch (err) {
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },

    async getAllStatus(context) {

      try {

        const access_token = localStorage.getItem(`access_token`)

        const response = await axios.get(`${serverUrl}/status` , { headers: { access_token }})

        context.commit("FETCH_HISTORY", response.data.findAllhistoryLog)

      } catch (err) {
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },
    async refreshStatus(context, payload) {

      try {
        const access_token = localStorage.getItem(`access_token`)

        const response = await axios.patch(`${serverUrl}/status/${payload}`, {} , { headers: { access_token }})

        context.commit("REFRESH_STATUS", response.data)

      } catch (err) {
        const errorLog = { msg: err.response.data.message, status: err.response.status }
        context.commit("ERROR_HANDLER", errorLog)
      }
    },
  },
  modules: {
  }
})
