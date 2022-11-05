import Vue from "vue";
import Vuex from "vuex";
import localUrl from "../apis/local";
import jikanUrl from "../apis/jikan";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    topAnimes: [],
    choosenAnime: {},
    watchLists: [],
    pageJikan: 1,
  },
  mutations: {
    SET_IS_LOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_TOP_ANIMES(state, payload) {
      state.topAnimes = payload;
    },
    PUSH_TOP_ANIMES(state, payload) {
      state.topAnimes = [...state.topAnimes, ...payload];
    },
    SET_CHOOSEN_ANIMES(state, payload) {
      state.choosenAnime = payload;
    },
    SET_WATCH_LISTS(state, payload) {
      state.watchLists = payload;
    },
  },
  actions: {
    doLogin({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        localUrl
          .post("/login", { email, password })
          .then(({ data }) => {
            localStorage.setItem("access_token", data.access_token);
            commit("SET_IS_LOGIN", true);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    doRegister({ commit }, { email, password, fullName }) {
      return new Promise((resolve, reject) => {
        localUrl
          .post("/register", { email, password, fullName })
          .then(({ data }) => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchAnimes({ commit }, payload) {
      return new Promise((resolve, reject) => {
        jikanUrl
        .get(`/top/anime?limit=24&page=1`)
        .then(({ data }) => {
          commit("SET_TOP_ANIMES", data.data);
        })
        .catch((err) => {
          reject(err)
        });
      })
    },
    fetchAnimesNext({ commit }, pageJikan) {
      return new Promise((resolve, reject) => {
        jikanUrl
          .get(`/top/anime?limit=24&page=${pageJikan}`)
          .then(({ data }) => {
            commit("PUSH_TOP_ANIMES", data.data);
          })
          .catch((err) => {
            reject(err)
          });
      })
    },
    animeDetail({ commit }, jikanAnimeId) {
      return new Promise((resolve, reject) => {
        jikanUrl
          .get(`/anime/${jikanAnimeId}`)
          .then(({ data }) => {
            commit("SET_CHOOSEN_ANIMES", data.data);
          })
          .catch(({ err }) => {
            reject(err)
          });
      })
    },
    addToWatchList({ commit }, { JikanAnimeId, title, image_url }) {
      return new Promise((resolve, reject) => {
        localUrl
          .post(
            "/watchlists",
            { JikanAnimeId, priority: "Must Watch", title, image_url },
            { headers: { access_token: localStorage.getItem("access_token") } }
          )
          .then(({ data }) => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchWatchLists({ commit }, payload) {
      localUrl
        .get("/watchlists", {
          headers: { access_token: localStorage.getItem("access_token") },
        })
        .then(({ data }) => {
          commit("SET_WATCH_LISTS", data);
        })
        .catch((err) => {
        });
    },
    updateStatus({ commit }, { status, JikanAnimeId }) {
      return new Promise((resolve, reject) => {
        localUrl
          .patch(
            `/watchlists/${JikanAnimeId}`,
            { status },
            { headers: { access_token: localStorage.getItem("access_token") } }
          )
          .then((res) => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deleteWatchList({ commit }, JikanAnimeId) {
      return new Promise((resolve, reject) => {
        localUrl
          .delete(`watchlists/${JikanAnimeId}`, {
            headers: { access_token: localStorage.getItem("access_token") },
          })
          .then((res) => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    readSynopsis({ commit }, text) {
      return new Promise((resolve, reject) => {
        localUrl
          .post("/synopsis-reader", { text })
          .then(({data}) => {
            const audio = new Audio(data.data)
            audio.play()
            resolve()
          })
          .catch((err) => {
            reject()
          });
      })
    },
  },
  modules: {},
});
