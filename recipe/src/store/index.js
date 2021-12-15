import Vue from 'vue'
import Vuex from 'vuex'
import swal from  'sweetalert2'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    recipes: [],
    recipe: [],
    bookmarks: []
  },
  mutations: {
    GET_RECIPES (state, recipes) {
      state.recipes = recipes
    },
    GET_RECIPE_DETAIL (state, recipe){
      state.recipe = recipe
    },
    GET_BOOKMARKS (state, bookmarks) {
      state.bookmarks = bookmarks
    },
  },
  actions: {
    async login(data, loginForm) {
      try {
        const response = await axios ({
          url: baseUrl + "/login",
          method: "post",
          data: loginForm
        })
        localStorage.setItem ("access_token", response.data.access_token)
      } catch({response}) {
        const message = response.data.message
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    async register ({commit}, registerForm) {
      try {
        const data = await  axios ({
          url: baseUrl + `/register`,
          method: "post",
          data: registerForm
        })
      } catch ({response}) {
        console.log(response);
        const message = response.data.message
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    async fetchRecipes ({commit}) {
      console.log("masuk store");
      try {
        const data = await axios ({
          url: baseUrl + '/recipes',
          method: "get",
        })
        console.log(data,">>>>>>>>>>>>>");
        commit('GET_RECIPES', data.data)
      } catch ({response}) {
        console.log(response);
        const message = response.data.message
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    async fetchRecipeDetail ({commit},id) {
      console.log(id);
      try {
        const recipe = await axios ({
          url: baseUrl + '/recipes/detail/'+ id,
          method: "get",
        })
        commit('GET_RECIPE_DETAIL', recipe.data)
      } catch ({response}) {
        console.log(response);
        const message = response.data.message
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    async searchRecipes ({commit} , query) {
      try {
        const queryUrl = []
        const recipes = await axios({
          url: baseUrl +`/recipes?searchTerm=${query}`,
          method: "get"
        })
        console.log(recipes);
        commit('GET_RECIPES', recipes.data.movies)
      } catch ({response}) {
        const message = response.data.message
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    alertBookmark ({commit}, message) {
      const Toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        iconColor: 'green',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: message
      })
    },
    async addToBookmark ({commit, dispatch}, {id, title}) {
      try {
        const response = await axios ({
          url: baseUrl + `/public/favourites/${id}`,
          headers : {access_token: localStorage.access_token},
          method: "post"
        })
        await dispatch("fetchFavourite")
        dispatch('alertBookmark', `${title} successfuly bookmarked`)
      } catch ({response}) {
        const message = response.data.message
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
  },
  modules: {
  }
})
