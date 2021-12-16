import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const baseUrl = `https://coffpow-dev.herokuapp.com`;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: null,
    coffeePowders: [],
    coffeePowdersById: [],
    coffeePowderUpdateId: null,
    orderDetail: [],
  },
  mutations: {
    SET_IS_LOGIN: function (state, payload = false) {
      state.isLogin = payload;
    },
    SET_COFFEE_POWDERS: function (state, payload = []) {
      state.coffeePowders = payload;
    },
    SET_COFFEE_POWDERS_BY_ID: function (state, payload = []) {
      state.coffeePowdersById = payload;
    },
    SET_UPDATE_COFFEEPOWDER_ID: function (state, payload = null) {
      state.coffeePowderUpdateId = payload;
    },
    SET_CART_ORDERDETAIL: function (state, payload = null) {
      state.orderDetail = payload;
    },
  },
  actions: {
    // ===================================================== ### LOGIN ### =====================================================
    toLogin: function ({ commit }, { email, password }) {
      // console.log('ACTION LOGIN');
      // console.log(payload);
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `${baseUrl}/login`,
          data: { email, password },
        })
          .then(({ data }) => {
            // console.log(data);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('idUser', data.id);
            localStorage.setItem('roleUser', data.role);
            localStorage.setItem('emailUser', data.email);
            commit('SET_IS_LOGIN', true);
            resolve();
          })
          .catch((err) => {
            // console.log(err)
            reject(err);
          });
      });
    },
    // ===================================================== ### REGISTER ### =====================================================
    toRegister: function (context, payload) {
      // console.log(payload);
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `${baseUrl}/register`,
          data: payload,
        })
          .then(() => {
            //   console.log(res)
            resolve();
          })
          .catch((err) => {
            // console.log(err)
            reject(err);
          });
      });
    },
    // ===================================================== ### FETCH COFFEE POWDERS ### =====================================================
    fetchCoffeePowders: function ({ commit }) {
      axios({
        url: `${baseUrl}/coffeepowder`,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then(({ data }) => {
          // console.log(data);
          commit('SET_COFFEE_POWDERS', data);
          // router.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // ===================================================== ### FETCH ONE COFFEE POWDERS ### =====================================================
    fetchCoffeePowdersById: function ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseUrl}/admin/coffeepowder/${id}`,
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            // console.log(data);
            commit('SET_COFFEE_POWDERS_BY_ID', data);
            resolve();
            // router.push('/');
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
    // ===================================================== ### ADD NEW PRODUCT ### =====================================================
    addNewProduct: function (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `${baseUrl}/admin/coffeepowder`,
          data: payload,
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(() => {
            //   console.log(res)
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    // ===================================================== ### DIRECT TO FORM UPDATE ### =====================================================
    toFormUpdate: function ({ commit }, id) {
      // console.log(heroId, power, role, '<<<<<<<<<<ini di state');
      // console.log(payload);
      return new Promise((resolve, reject) => {
        commit('SET_UPDATE_COFFEEPOWDER_ID', id);
        axios({
          url: `${baseUrl}/admin/coffeepowder/${id}`,
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            // console.log(data);
            commit('SET_COFFEE_POWDERS_BY_ID', data);
            resolve();
            // router.push('/');
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
      // this.fetchCoffeePowdersById(id);
    },
    // ===================================================== ### EDIT PRODUCT ### =====================================================
    editProduct: function (context, payload) {
      return new Promise((resolve, reject) => {
        // console.log(payload);
        axios({
          method: 'PUT',
          url: `${baseUrl}/admin/coffeepowder/${payload.id}`,
          data: payload,
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(() => {
            //   console.log(res)
            resolve();
          })
          .catch((err) => {
            // console.log(err)
            reject(err);
          });
      });
    },
    // ===================================================== ### FETCH ORDER DETAIL ### =====================================================
    fetchOrderDetail: function ({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseUrl}/orderdetail`,
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            // console.log(data);
            commit('SET_CART_ORDERDETAIL', data);
            resolve();
            // router.push('/');
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
    // ===================================================== ### ADD NEW CART ### =====================================================
    addNewCart: function (context, id) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseUrl}/orderdetail/${id}`,
          method: 'post',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(() => {
            // console.log(data);
            // commit('SET_CART_ORDERDETAIL', data);
            // router.push('/');
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
    // ===================================================== ### PAY MIDTRANS ### =====================================================
    payMidtrans: function () {
      // console.log('HALO MIDTRANS');
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseUrl}/paycharge`,
          method: 'post',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(({ data }) => {
            // console.log(data.result.token);
            window.snap.pay(data.result.token);
            // commit('SET_CART_ORDERDETAIL', data);
            // router.push('/');
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
    // ===================================================== ### CHECK STATUS PAYMENT MIDTRANS ### =====================================================
    checkPayment: function () {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseUrl}/checkstatuspayment`,
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(() => {
            // commit('SET_CART_ORDERDETAIL', data);
            // router.push('/');
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
    // ===================================================== ### PATCH ++ ORDER DETAIL ### =====================================================
    patchPlusOrderDetail: function (context, orderDetailId) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseUrl}/orderdetailplus/${orderDetailId}`,
          method: 'patch',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(() => {
            // commit('SET_CART_ORDERDETAIL', data);
            // router.push('/');
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
    // ===================================================== ### PATCH -- ORDER DETAIL ### =====================================================
    patchMinusOrderDetail: function (context, orderDetailId) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseUrl}/orderdetailminus/${orderDetailId}`,
          method: 'patch',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(() => {
            // commit('SET_CART_ORDERDETAIL', data);
            // router.push('/');
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject();
          });
      });
    },
    // ===================================================== ### PATCH/DELETE CARD ### =====================================================
    toPatchDelete: function (context, id) {
      // console.log(heroId, power, role, '<<<<<<<<<<ini di state');
      // console.log(payload);
      return new Promise((resolve, reject) => {
        axios({
          url: `${baseUrl}/admin/coffeepowder/${id}`,
          method: 'patch',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        })
          .then(() => {
            // console.log(data);
            // commit('SET_COFFEE_POWDERS_BY_ID', data);
            resolve();
            // router.push('/');
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
      // this.fetchCoffeePowdersById(id);
    },
  },

  modules: {},
});
