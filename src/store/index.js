import Vue from "vue"
import Vuex from "vuex"
// import VueAuthenticate from 'vue-authenticate'
import VueSpeech from "vue-speech"
import axios from "axios"
import router from "../router/index"

Vue.use(Vuex)
Vue.use(VueSpeech)
// Vue.use(VueAuthenticate), {
//   baseUrl: 'http://localhost:3000'
// }

export default new Vuex.Store({
	state: {
		recipes: [],
		recipeDetail: {},
		favorites: [],
		apiUrl: "https://api.edamam.com/search",
		// baseUrl: "https://ip-foodify.herokuapp.com",
		baseUrl: "http://localhost:3000",
		isLoggedIn: false,
	},
	mutations: {
		SET_RECIPES(state, payload) {
			state.recipes = payload
		},
		SET_IS_LOGGED_IN(state, payload) {
			state.isLoggedIn = payload
		},
		SET_RECIPES_BY_ID(state, payload) {
			state.recipeDetail = payload
		},
		SET_FAVORITES(state, payload) {
			state.favorites = payload
		},
	},
	actions: {
		async getRandomRecipes({ state, commit }) {
			try {
				const items = ["plan", "pizza", "chicken", "beef", "meats"]
				const item = items[Math.floor(Math.random() * items.length)]
				let response = await axios.get(`${state.baseUrl}/foodify`, {
					params: {
						q: item,
						app_id: "77c1ea2e",
						app_key: "b22bf21dd9e8f582274c54a7634b2a49",
						from: 0,
						to: 9,
					},
				})
				console.log(response.data.hits, "<<<<<<<<< data hits")
				commit("SET_RECIPES", response.data.hits)
			} catch (err) {
				console.log(err)
				commit("SET_RECIPES", [])
			}
		},
		async getDetailsRecipe({ state, commit }, payload) {
			try {
				let response = await axios.get(`${state.apiUrl}?app_id=77c1ea2e&app_key=b22bf21dd9e8f582274c54a7634b2a49&q=${payload}`, {
					params: {
						q: "",
						from: 0,
						to: 9,
					},
				})
				// console.log(response.data.hits[0], "<<<< ini response")
				commit("SET_RECIPES_BY_ID", response.data.hits[0].recipe)
			} catch (err) {
				console.log(err)
			}
		},
		async postFavourite({ state }, { label, image, dishType }) {
			try {
				let response = await axios.post(
					`${state.baseUrl}/favourites`,
					{
						label,
						image,
						dishType,
					},
					{ headers: { access_token: localStorage.access_token } }
				)
			} catch (err) {
				console.log({ err })
			}
		},
		doLogin({ state }, payload) {
			return axios.post(`${state.baseUrl}/login`, payload)
		},
		async getFavourites({ state, commit }) {
			try {
				let response = await axios.get(`${state.baseUrl}/favourites`, {
					headers: { access_token: localStorage.access_token },
				})
				console.log(response.data, "<<<< response dari get favorite")
				commit("SET_FAVORITES", response.data)
			} catch (err) {
				console.log(err)
			}
		},
		async readIngredients({ state }, text) {
			try {
				let response = await axios.get(
					`${state.baseUrl}/foodify/recipe-reader`,
					{
						headers: { access_token: localStorage.access_token },
					},
					{ text }
				)
				console.log(text);
				let audio = new Audio(response.data)
				audio.play()
			} catch (err) {
				console.log(err)
			}
		},
	},
	modules: {},
})
