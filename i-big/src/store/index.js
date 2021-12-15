import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from "sweetalert2";

Vue.use(Vuex)

let baseUrl = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    isLogin : false,
    isRegister: false,
    product : [],
  },
  mutations: {
    ISLOGIN(state, payload) {
      state.isLogin = payload
    },

    ISREGISTER(state, payload) {
      state.isRegister = payload
    },

    FETCH_PRODUCT(state, payload) {
      state.product = payload
    },

    FETCH_FILTER(state, payload) {
      state.product = payload
    },
  },
  actions: {
    async loginUser(context, payload) {
      try {
        let url = `${baseUrl}/public/login`;
        const response = await axios.post(url, payload)
        context.commit("ISLOGIN", true)

        localStorage.token = response.data.token;
        localStorage.email = response.data.dataUser.email;
        localStorage.role = response.data.dataUser.role;

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: `Welcome, ${localStorage.email}!`,
        });

      } catch (err) {
        context.commit("ISLOGIN", false)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Email/Password",
        });
      }
    },

    async registerUser(context, payload) {
      try {
          let url = `${baseUrl}/public/register`;
          const response = await axios.post(url, payload)
          context.commit("ISREGISTER", true)

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: `Hello ${response.data.email} Success create an account.`,
          });

      } catch (err) {
          context.commit("ISREGISTER", false)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.msg,
          });
      }
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: `Success create an account.`,
            });
            this.state.registerForm = {
              username: "",
              email: "",
              password: "",
              phoneNumber: "",
              address: "",
            };
      }, 

    async fetchProduct(context) {
      try {
        let url = `${baseUrl}/public/products`;
        let response = await axios.get(url)

        context.commit("FETCH_PRODUCT", response.data)

      } catch (err) {
        console.log(err);
      }
    },

    async filtered(context, payload) {
      try {
        let url = `${baseUrl}/public/products?name=${payload.titleSearch}&page=${payload.page}`

        let response = await axios.get(url)

        context.commit("FETCH_FILTER", response.data)

        if(response.data.TotalPage < payload.page ) {
          console.log('KOSOONG');
        }

      } catch (err) {
        console.log(err);
      }
      
    },

    async addFavorite(context, payload) {
      try {
        console.log(payload);
        let url = `${baseUrl}/public/favorite/${payload}`;
        const response = await axios({
          method: "POST",
          url,
          headers: {
            token : localStorage.token
          }
        })
          console.log('WE DID IT');
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
  
          Toast.fire({
            icon: "success",
            title: `Success add ${response.data.MovieId} to Favorite!`,
          });

      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: 'Sorry, you must Sign In first',
        });
      }
    },


  },
  modules: {
  }
})
