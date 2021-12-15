import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const baseUrl = "http://localhost:5050";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
    books: [],
    book: [],
    carts: [],
    loadingScreen: false,
    shippingCost: "",
    estimatedTime: "",
    courier: "",
  },
  mutations: {
    SUCCESS_FETCH_CITIES(state, cities) {
      state.cities = cities.map(({ city_id, city_name }) => {
        return {
          value: { CityId: city_id, cityName: city_name },
          text: city_name,
        };
      });
    },
    SUCCESS_FETCH_BOOKS(state, books) {
      state.books = books;
    },
    SUCCESS_SHOW_DETAIL(state, book) {
      state.book = book;
    },
    SUCCESS_FETCH_CART(state, carts) {
      state.carts = carts;
    },
    SUCCESS_GET_SHIPPING_DATA(state, { shipping }) {
      state.shippingCost = shipping.results[0].costs[0].cost[0].value;
      state.estimatedTime = shipping.results[0].costs[0].cost[0].etd;
      state.courier = shipping.results[0].name;
    },
  },
  actions: {
    fetchCities() {
      return axios({
        method: "GET",
        url: `${baseUrl}/apis/cities`,
      });
    },
    doLogin(context, { email, password }) {
      const data = { email, password };
      return axios({
        method: "POST",
        url: `${baseUrl}/users/login`,
        data,
      });
    },
    doRegister(context, { email, password, name, CityId, role, cityName }) {
      const data = { email, password, name, CityId, cityName };
      return axios({
        method: "POST",
        url: `${baseUrl}/${role}s/register`,
        data,
      });
    },
    fetchBooks() {
      return axios({
        method: "GET",
        url: `${baseUrl}/users/books`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    showDetail(context, id) {
      return axios({
        method: "GET",
        url: `${baseUrl}/users/books/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    fetchCart() {
      return axios({
        method: "GET",
        url: `${baseUrl}/customers/carts`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    addToCart(context, bookId) {
      return axios({
        method: "POST",
        url: `${baseUrl}/customers/carts/${bookId}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    shipping(context, { sellerCityId, customerCityId }) {
      console.log(sellerCityId);
      console.log(customerCityId);
      const data = {
        destination: sellerCityId,
        origin: customerCityId,
        weight: 500,
        courier: "jne",
      };
      return axios({
        method: "POST",
        url: `${baseUrl}/apis/shipping`,
        data,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
  },
  modules: {},
});
