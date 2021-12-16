import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: "",
  },
  mutations: {
    SET_ACCESS_TOKEN(state, payload) {
      state.access_token = payload;
    },
  },
  actions: {
    doLogin(context, payload) {
      return axios.post("http://localhost:3000/users/login", payload);
    },
    doRegister(context, payload) {
      return axios.post("http://localhost:3000/users/register", payload);
    },
    fetchPosts(context, payload) {
      return axios.get("http://localhost:3000/posts/", {
        headers: {
          access_token: payload,
        },
      });
    },
  },
  modules: {},
});
