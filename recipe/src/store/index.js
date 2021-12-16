import Vue from 'vue'
import Vuex from 'vuex'
import swal from  'sweetalert2'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'https://foodrecipes-rome.herokuapp.com'

export default new Vuex.Store({
  state: {
    recipes: [],
    recipe: [],
    bookmarks: [],
    selectedFavourite: {}
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
    SET_SELECTED_FAVOURITE (state, recipe) {
      state.selectedFavourite = recipe
    }
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
        localStorage.status = response.data.status
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
        const message = response.data.message
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    async fetchRecipes ({commit}, query) {
      try {
        const url = !query ? baseUrl + '/recipes' : baseUrl + `/recipes?searchTerm=${query}`
        const data = await axios ({
          url,
          method: "get",
        })
        commit('GET_RECIPES', data.data)
      } catch ({response}) {
        const message = response.data.message
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    async fetchRecipeDetail ({commit},id) {
      try {
        const recipe = await axios ({
          url: baseUrl + '/recipes/detail/'+ id,
          method: "get",
        })
        commit('GET_RECIPE_DETAIL', recipe.data)
      } catch ({response}) {
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
        commit('GET_RECIPES', recipes.data.recipes)
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
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
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
          url: baseUrl + `/users/favourites/${id}`,
          headers : {access_token: localStorage.access_token},
          method: "post"
        })
        await dispatch("fetchRecipes")
        dispatch('alertBookmark', `${title} successfuly bookmarked`)
      } catch ({response}) {
        const message = response.data
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    async fetchFavourite ({commit}) {
      try {
        const response = await axios ({
          url: baseUrl + "/users/favourites",
          method: "get",
          headers: {
            access_token: localStorage.access_token
          }
        })
        commit('GET_BOOKMARKS', response.data)
      } catch ({response}) {
        const message = response.data.message
        swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
      })
      }
    },
    async filter({commit} , filter) {
      try {
        const {searchTerm} = filter
        const filterUrl= `/recipes?searchTerm=${searchTerm}`
        
        const response = await axios ({
          method: 'get',
          url:  baseUrl + `${filterUrl}`
        })
        commit('GET_RECIPES', response.data)
      } catch ({response}) {
        const {message} = response.data
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    async subscribe ({commit, dispatch}) {
      try{
        const response = await axios ({
          method: 'get',
          url:  baseUrl + '/users/subscribe',
          headers: {
            access_token: localStorage.access_token
          }
        })
        await window.open(response.data.invoiceUrl, '_blank')
        const updateResponse = await axios ({
          url: baseUrl + '/users/status',
          method: "patch",
          headers: {access_token: localStorage.access_token}
        })
        localStorage.status = "Premium"
        dispatch('alertBookmark', `you're now premium member`)
      } catch ({response}) {
        const {message} = response.data
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },

    async fetchFavouriteByRecipeId ({commit}, recipeId) {
      try {
        const response = await axios({
          url: baseUrl + `/users/favourites/recipe/${recipeId}`,
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })
        commit('SET_SELECTED_FAVOURITE', response.data)

      } catch({response}) {
        const message = response.data.message
        swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
        })

      }
    },
    async deleteFavourite ({dispatch}, id) {
      try {
        const response = await axios ({
          url: baseUrl + "/users/delete/" +id,
          method: "delete",
          headers: {
            access_token: localStorage.access_token
          }
        })
        await dispatch('fetchFavourite')
        swal.fire({
          icon: 'success',
          title: 'success',
          text: 'Success delete data'
        })
      } catch ({response}) {
        const message = response.data.message
        swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
        })
      }
    },
    async inputNotes ({dispatch},{notes,id}) {
      try {
        const {data} = await axios ({
          url: baseUrl + "/users/favourites/" + id,
          data : {notes},
          method: 'patch',
          headers: {
            access_token: localStorage.access_token
          }
        })
        dispatch('alertBookmark', data.msg)
      } catch ({response}) {
        const message = response.data.message
        swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
        })

      }
    }
  },
  modules: {
  }
})
