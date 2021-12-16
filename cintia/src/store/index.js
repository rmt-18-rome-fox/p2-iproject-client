import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersist from "vuex-persist";
const vuexPersist = new VuexPersist({
  key: "cintia",
  storage: localStorage,
});
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    user: false,
    baseUrl: "https://cintia-cinema-ticketing-apps.herokuapp.com",
    // baseUrl: "http://localhost:3012",
  },
  mutations: {
    mLogin(state) {
      state.user = true;
    },
    mLogout(state) {
      state.user = false;
    },
  },
  actions: {
    aLogout: ({ commit }) => {
      commit("mLogout");
      localStorage.removeItem("access_token");
    },
    aRegister({ state }, { email, password }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "post",
          url: `${state.baseUrl}/users/register`,
          data: { email, password },
        };
        axios(config)
          .then((res) => {
            resolve(res.data.message);
          })
          .catch((err) => {
            reject(err.response.data.message);
          });
      });
    },
    aLogin({ commit, state }, { email, password }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "post",
          url: `${state.baseUrl}/users/login`,
          data: { email, password },
        };
        axios(config)
          .then((res) => {
            localStorage.setItem("access_token", res.data.access_token);
            commit("mLogin");
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aFetch({ state }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "get",
          url: `${state.baseUrl}/movies`,
        };
        axios(config)
          .then((res) => {
            // console.log(res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aFetchOne({ state }, id) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "get",
          url: `${state.baseUrl}/movies/${id}`,
        };
        axios(config)
          .then((res) => {
            // console.log(res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aFetchBookings({ state }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "get",
          url: `${state.baseUrl}/bookings`,
          headers: {
            access_token: localStorage.access_token,
          },
        };
        axios(config)
          .then((res) => {
            // console.log(res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aAdd({ state }, id) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "post",
          url: `${state.baseUrl}/bookings/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        };
        axios(config)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aDelete({ state }, id) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "delete",
          url: `${state.baseUrl}/bookings/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        };
        axios(config)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aPayNow({ state }, id) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "post",
          url: `${state.baseUrl}/payments/midtrans`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            MovieId: id,
          },
        };
        axios(config)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aPaidSuccess({ state }, id) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "patch",
          url: `${state.baseUrl}/payments/midtrans/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        };
        axios(config)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
