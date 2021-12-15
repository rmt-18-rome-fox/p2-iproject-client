import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: false,
    baseUrl: "https://cintia-cinema-ticketing-apps.herokuapp.com",
  },
  mutations: {},
  actions: {
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
  },
  modules: {},
});
