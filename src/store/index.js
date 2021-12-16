import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
const baseUrl = "https://p2-basiccharcreation.herokuapp.com";
// const baseUrl = "http://localhost:3000";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    classes: {}, //{count: , res: []}
    spells: {},
    races: {},
    access_token: "",
    myCharacters: [],
    isLoggedIn: false,
    imageResult: {}, //{name:"", res:[]}
  },
  mutations: {
    set_classes(state, payload) {
      state.classes = payload;
    },
    set_spells(state, payload) {
      state.spells = payload;
    },
    set_races(state, payload) {
      state.races = payload;
    },
    set_access_token(state, payload) {
      state.access_token = payload;
    },
    set_my_characters(state, payload) {
      state.myCharacters = payload;
    },
    set_is_logged_in(state, payload) {
      state.isLoggedIn = payload;
    },
    set_image_result(state, payload) {
      state.imageResult = payload;
    },
  },
  actions: {
    login(context, payload) {
      return axios({
        method: "post",
        url: `${baseUrl}/login`,
        data: { ...payload },
      });
    },
    getMyCharacters() {
      return axios({
        method: "get",
        url: `${baseUrl}/user/characters`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    getRaces(context) {
      axios({
        method: "get",
        url: `${baseUrl}/races`,
      })
        .then(({ data }) => {
          context.commit("set_races", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getClasses(context) {
      axios({
        method: "get",
        url: `${baseUrl}/classes`,
      })
        .then(({ data }) => {
          context.commit("set_classes", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSpells(context) {
      axios({
        method: "get",
        url: `${baseUrl}/spells`,
      })
        .then(({ data }) => {
          context.commit("set_spells", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    register(context, payload) {
      return axios({
        method: "post",
        url: `${baseUrl}/register`,
        data: { ...payload },
      });
    },
    deleteChar(context, id) {
      return axios({
        method: "delete",
        url: `${baseUrl}/user/characters/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    findImage(context, payload) {
      return axios({
        method: "get",
        url: `${baseUrl}/avatar`,
        params: {
          q: payload,
        },
      });
    },
    addCharacter(context, payload) {
      return axios({
        method: "post",
        url: `${baseUrl}/user/characters`,
        data: {
          ...payload,
        },
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
  },
  modules: {},
});
