import axios from "axios";
import Vue from 'vue';
import Vuex from 'vuex';
import axiosArticles from "../apis/article"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchedNews: [],
    isLoggedIn: "false"
  },
  mutations: {
    MUTATE_FETCHNEWS(state, payload) {
      state.fetchedNews = payload
    },
    MUTATE_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    async fetchNews(context, payload) {
      try {
        let response = []
        console.log(payload, '<<<<<<111');
        if(payload) {
          response = await axios.get(`http://api.mediastack.com/v1/news?access_key=082efd54ede2e28fbf9f1690cd147412&languages=en&keywords=${payload}`);
        } else {
          response = await axios.get("http://api.mediastack.com/v1/news?access_key=082efd54ede2e28fbf9f1690cd147412&languages=en");
        }
        // console.log("masuk sini <<<<11111");
        
        context.commit("MUTATE_FETCHNEWS", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async doLogin(context, payload) {
      try {
        const response = await axiosArticles.post('/admins/login', payload)
        console.log(response.data, "111<<<<<");
        localStorage.setItem("access_token", response.data.access_token)
        context.commit("MUTATE_ISLOGGEDIN", true)
      } catch (err) {
        console.log(err);
      }
    },
    async publishArticle(context, payload) {
      try {
        await axiosArticles.post('/articles', payload, {
          headers: {'access_token': localStorage.getItem("access_token")}
        })
      } catch (err) {
        console.log(err);
      }
    }
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
  modules: {
  }
})
