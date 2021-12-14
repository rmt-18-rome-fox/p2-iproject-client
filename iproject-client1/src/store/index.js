import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: null,
    coffeePowders: [],
  },
  mutations: {
    SET_IS_LOGIN: function (state, payload = false) {
      state.isLogin = payload;
    },
    SET_COFFEE_POWDERS: function (state, payload = []) {
      state.coffeePowders = payload;
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
            console.log(data);
            localStorage.setItem('access_token', data.access_token);
            // localStorage.setItem('idUser', data.data.id) // JIKA BUTUH USER ID TITIPIN DISINI
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
  },

  modules: {},
});
