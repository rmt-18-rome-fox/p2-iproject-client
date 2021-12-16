import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from "sweetalert2";

Vue.use(Vuex)

// let baseUrl = "http://localhost:3000";
let baseUrl = "https://i-big.herokuapp.com";


export default new Vuex.Store({
  state: {
    isLogin : false,
    isLoginGL : false,
    isRegister: false,
    product : [],
    cart : [],
    cartLength : "",
    detailProduct: [],
    dataQR : '',
  },
  mutations: {
    ISLOGIN(state, payload) {
      state.isLogin = payload
    },

    ISLOGIN_GL(state, payload) {
      state.isLoginGL = payload
      console.log(state.isLoginGL);
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

    FETCH_CART(state, payload) {
      state.cart = payload
    },

    FETCH_CART_LENGTH(state, payload) {
      state.cartLength = payload
    },

    GET_DETAIL(state, payload) {
      state.detailProduct = payload
    },

    QR_CODE(state, payload) {
      state.dataQR = payload
    }

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
          console.log(response.data);
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
            title: `Success add ${response.data.ProductId} to Favorite!`,
          });

      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: 'Sorry, you must Sign In first',
        });
      }
    },

    fetchFavorite(context) {
      let url = `${baseUrl}/public/favorite`;
      axios({
        method: "GET",
        url,
        headers: {
          token : localStorage.token
        }
      })
        .then(({ data }) => {
          context.commit("FETCH_CART", data)
          context.commit("FETCH_CART_LENGTH", data.length)

        })
        .catch((err) => {
          console.log(err);
        });
    },

    async calBMI(context,payload) {
        try {
          let response = await axios({
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/bmi',
            params: {age: payload.age, weight: payload.weight, height: payload.height},
            headers: {
              'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
              'x-rapidapi-key': '8a2cc8bca1mshf123ad465cdd47bp1cc9a5jsn305fd03044ca'
            }
          })
          Swal.fire(`BMI : ${response.data.data.bmi}
Health : ${response.data.data.health}
Healthy Range : ${response.data.data.healthy_bmi_range}
`)
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
    },

    async calIdeal(context,payload) {
        try {
          let response = await axios({
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
            params: {gender: payload.gender, height: payload.height},
            headers: {
              'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
              'x-rapidapi-key': '8a2cc8bca1mshf123ad465cdd47bp1cc9a5jsn305fd03044ca'
            }
          })
          Swal.fire(`Devine : ${response.data.data.Devine}
Hamwi : ${response.data.data.Hamwi}
Miller : ${response.data.data.Miller}
Robinson : ${response.data.data.Devine}
`)
        } catch (err) {
          console.log(err);
        }
    },

    async calMacros(context,payload) {
        try {
          let response = await axios({
            method: 'GET',
              url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
              params: {
              age: payload.age,
              gender: payload.gender,
              height: payload.height,
              weight: payload.weight,
              activitylevel: payload.level,
              goal: payload.goals
              },
              headers: {
              'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
              'x-rapidapi-key': '8a2cc8bca1mshf123ad465cdd47bp1cc9a5jsn305fd03044ca'
              }
          })
          Swal.fire(`Calorie : ${response.data.data.calorie}
Balanced : 
      - carbs : ${Math.ceil(response.data.data.balanced.carbs)}
      - fat : ${Math.ceil(response.data.data.balanced.fat)}
      - protein : ${Math.ceil(response.data.data.balanced.protein)}

High Protein :
      - carbs : ${Math.ceil(response.data.data.highprotein.carbs)}
      - fat : ${Math.ceil(response.data.data.highprotein.fat)}
      - protein : ${Math.ceil(response.data.data.highprotein.protein)}

Low Carbs :
      - carbs : ${Math.ceil(response.data.data.lowcarbs.carbs)}
      - fat : ${Math.ceil(response.data.data.lowcarbs.fat)}
      - protein : ${Math.ceil(response.data.data.lowcarbs.protein)}

Low Fat :
      - carbs : ${Math.ceil(response.data.data.lowfat.carbs)}
      - fat : ${Math.ceil(response.data.data.lowfat.fat)}
      - protein : ${Math.ceil(response.data.data.lowfat.protein)}
`)

          // console.log(response.data);
        } catch (err) {
          console.log(err);
        }
    },

    async checkoutCart(context) {
        try {
          let url = `${baseUrl}/public/checkout`;
          const response = await axios({
          method: "PUT",
          url,
          headers: {
            token : localStorage.token
          }
        })

        console.log(response.data);
        window.snap.pay(response.data.token)
       } catch (err) {
          console.log(err);
        }
    },

    async getDetail(context, payload) {
      try {
        let url = `${baseUrl}/public/products/${payload}`
        let response = await axios.get(url)

        context.commit("GET_DETAIL", response.data)
        

        let urlQR = `https://api.happi.dev/v1/qrcode`

        let responseQR = await axios.get(urlQR, {
          params: {
            data : response.data.imgUrl
          },
          headers: {
            'x-happi-key' : `c0ea0cld6rw7OJ6QcFh62XyPPbP98Oj5JYUAP9KjQ9T5AY0Niue227iC`
          }
        })

        context.commit("QR_CODE", responseQR.data)

      } catch (err) {
        console.log(err);
      }
      
    },

    async google(context, payload) {
      try {
        let url = `${baseUrl}/public/authGoogle`;
        //let url = "https://movie-cms-h8.herokuapp.com";

        const response = await axios({
          url,
          method: "POST",
          data: {
          idToken: payload.getAuthResponse().id_token,
        },
        })

        console.log(response.data);
        context.commit("ISLOGIN_GL", true)

        localStorage.token = data.token;
        localStorage.email = data.dataUser.email;
        localStorage.role = data.dataUser.role;

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
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.msg,
        });
      }
    }
  },
  modules: {
  }
})
