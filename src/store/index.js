import Vue from "vue"
import Vuex from "vuex"
// import VueAuthenticate from 'vue-authenticate'
import VueSpeech from "vue-speech"
import axios from "axios"

Vue.use(Vuex)
Vue.use(VueSpeech)
// Vue.use(VueAuthenticate), {
//   baseUrl: 'http://localhost:3000'
// }

export default new Vuex.Store({
	state: {
		recipes: [],
		apiUrl: "https://api.edamam.com/search",
		baseUrl: "https://ip-foodify.herokuapp.com/",
		isLoggedIn: false,
	},
	mutations: {
		SET_RECIPES(state, payload) {
			state.recipes = payload
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
						app_id: "5b6623d5",
						app_key: "46674aa2193dbb7b88ffd897331e661a",
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
		// async doLogin({commit}) {
		//   try {
		//     let response = await axios.post()
		//   } catch (err) {

		//   }
		// }
	},
	modules: {},
})
