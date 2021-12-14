import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: null,
    coffeePowders: [],
    coffeePowdersById: [],
    coffeePowderUpdateId: null,
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
  },
  actions: {
    // ===================================================== ### LOGIN ### =====================================================
    toLogin: function ({ commit }, { email, password }) {
      // console.log('ACTION LOGIN');
      // console.log(payload);
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/login',
          data: { email, password },
        })
          .then(({ data }) => {
            // console.log(data);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('idUser', data.id);
            localStorage.setItem('roleUser', data.role);
            // localStorage.setItem('emailUser', data.email)
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
          url: 'http://localhost:3000/register',
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
        url: `http://localhost:3000/coffeepowder`,
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
          url: `http://localhost:3000/admin/coffeepowder/${id}`,
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
          url: 'http://localhost:3000/admin/coffeepowder',
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
    // ===================================================== ### DIRECT TO FORM UPDATE ### =====================================================
    toFormUpdate: function ({ commit }, id) {
      // console.log(heroId, power, role, '<<<<<<<<<<ini di state');
      // console.log(payload);
      return new Promise((resolve, reject) => {
        commit('SET_UPDATE_COFFEEPOWDER_ID', id);
        axios({
          url: `http://localhost:3000/admin/coffeepowder/${id}`,
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
        console.log(payload);
        axios({
          method: 'PUT',
          url: `http://localhost:3000/admin/coffeepowder/${payload.id}`,
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
  },

  modules: {},
});
