<template>
  <!-- Navigation-->
  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <router-link class="navbar-brand" to="/">I-BIG</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li v-if="isLogin" class="nav-item"><router-link class="nav-link active" aria-current="page" to="/">Dashboard</router-link></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Calculator</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a  class="dropdown-item disabled" href="#!">Calculator</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><router-link class="dropdown-item" to="/calculator/bmi">BMI</router-link></li>
                                <li><router-link class="dropdown-item" to="/calculator/ideal">Ideal Weight</router-link></li>
                                <li><router-link class="dropdown-item" to="/calculator/macros">Macros</router-link></li>
                            </ul>
                        </li>
                        <li v-if="isLogin" class="nav-item"><a @click.prevent="logOut" class="nav-link" href="#!">Logout</a></li>
                        <li v-if="!isLogin" class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
                        <li v-if="!isLogin" class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
                    </ul>
                    <form class="d-flex">
                        <button 
                        v-if="isLogin"
                        @click="toWish"
                        class="btn btn-outline-dark" type="button">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{{cartLength}}</span>
                        </button>
                        
                    </form>
                </div>
            </div>
        </nav>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"

export default {
    name : "Navbar",

    data() {
        return {
        titleSearch: "",
        ratingSearch: "",
        };
    },

    computed : {
        ...mapState(["isLogin", "cartLength"])
    },


    methods : {
        ...mapMutations({
        isLoginMutation: "ISLOGIN"
        },
        {
        cartLength : "cartLength"
        }),

        ...mapActions(["fetchFavorite"]),

        toWish () {
            this.$router.push("/cart")
        },

        logOut() {
          let emailUser = localStorage.email;
          localStorage.clear();
          this.isLoginMutation(false)
          this.$router.push('/')

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
            title: `Thank you, ${emailUser}! You have been logged out`,
          });

          // let auth2 = gapi.auth2.getAuthInstance();
          // auth2.signOut().then(function () {
          //   console.log("User signed out.");
          // });
        },
    },

    created() {
        this.fetchFavorite()
    }
}
</script>

<style>

</style>