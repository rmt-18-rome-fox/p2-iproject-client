import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import axiosArticles from "../apis/article";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fetchedNews: [],
    isLoggedIn: "false",
    userRole: "",
    publishedArticles: [],
    articleData: {},
    alternativeNews: false,
  },
  mutations: {
    MUTATE_USERROLE(state, payload) {
      state.userRole = payload
    },
    MUTATE_FETCHNEWS(state, payload) {
      state.fetchedNews = payload;
    },
    MUTATE_ALTERNATIVENEWS(state, payload) {
      state.alternativeNews = payload;
    },
    MUTATE_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload;
    },
    MUTATE_PUBLISHEDARTICLES(state, payload) {
      state.publishedArticles = payload;
    },
    MUTATE_ARTICLEDATA(state, payload) {
      state.articleData = payload;
    },
  },
  actions: {
    async loginWithGoogle(context, payload) {
      try {
        const response = await axiosArticles.post("/admins/authgoogle", {
          id_token: payload,
        });

        localStorage.setItem("access_token", response.data.access_token);
        context.commit("MUTATE_USERROLE", "admin")
        localStorage.setItem("role", "admin");
        context.commit("MUTATE_ISLOGGEDIN", true);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchNews(context, payload) {
      try {
        const response = await axiosArticles.post("/articles/mediastack", {
          payload: payload,
        });

        context.commit("MUTATE_FETCHNEWS", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async alternativeFetchNews(context) {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=XIgkrjOQL13AOXeCYFykMwGPORZ6Vaal"
        );

        context.commit("MUTATE_FETCHNEWS", response.data.results);
        context.commit("MUTATE_ALTERNATIVENEWS", true);
      } catch (err) {
        console.log(err);
      }
    },
    async doLogin(context, payload) {
      try {
        const response = await axiosArticles.post("/admins/login", payload);
        localStorage.setItem("access_token", response.data.access_token);
        context.commit("MUTATE_USERROLE", "admin")
        localStorage.setItem("role", "admin");
        context.commit("MUTATE_ISLOGGEDIN", true);
      } catch (err) {
        console.log(err);
      }
    },
    async doUserRegister(context, payload) {
      try {
        await axiosArticles.post("/users/register", payload);
      } catch (err) {
        console.log(err);
      }
    },
    async doAdminRegister(context, payload) {
      try {
        await axiosArticles.post("/admins/register", payload);
      } catch (err) {
        console.log(err);
      }
    },
    async doUserLogin(context, payload) {
      try {
        const response = await axiosArticles.post("/users/login", payload);
        localStorage.setItem("access_token", response.data.access_token);
        context.commit("MUTATE_USERROLE", "user")
        localStorage.setItem("role", "user");
        context.commit("MUTATE_ISLOGGEDIN", true);
      } catch (err) {
        console.log(err);
      }
    },
    async publishArticle(context, payload) {
      try {
        await axiosArticles.post("/articles", payload, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
      } catch (err) {
        console.log(err);
      }
    },
    async getMainArticles(context) {
      try {
        const response = await axiosArticles.get("/articles");
        context.commit("MUTATE_PUBLISHEDARTICLES", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getArticleDetail(context, payload) {
      try {
        const response = await axiosArticles.get(`/articles/${payload}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        context.commit("MUTATE_ARTICLEDATA", response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    // processNews: (state) => {
    //   return state.fetchedNews.data.map((el, index) => {
    //     return {
    //       text: el.name,
    //       value: el.id,
    //     };
    //   });
    // },
  },
  modules: {},
});
