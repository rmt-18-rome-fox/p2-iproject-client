import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: "",
    postById: [],
    isLogin: localStorage.getItem("access_token"),
  },
  mutations: {
    SET_ACCESS_TOKEN(state, payload) {
      state.access_token = payload;
    },
    SET_POST(state, payload) {
      state.postById.push(payload);
    },
    IS_LOGIN(state, payload) {
      state.isLogin = payload;
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
    getPostById(context, payload) {
      return axios.get(`http://localhost:3000/posts/${payload.postId}`, {
        headers: {
          access_token: payload.access_token,
        },
      });
    },
    doDeleteComment(context, payload) {
      return axios.delete(`http://localhost:3000/posts/${payload.postId}/comments/${payload.commentId}`, {
        headers: {
          access_token: payload.access_token,
        },
      });
    },
    doDeletePost(context, payload) {
      return axios.delete(`http://localhost:3000/posts/${payload.postId}`, {
        headers: {
          access_token: payload.access_token,
        },
      });
    },
  },
  modules: {},
});
