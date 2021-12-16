<template>
  <div class="container mt-5">
    <h1>Login Page</h1>
    <b-form class="loginForm"
      @submit.prevent="doLogin">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
          v-model="loginForm.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Password:" label-for="input-3">
        <b-form-input
          type="password"
          id="input-3"
          placeholder="Enter Password"
          v-model="loginForm.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="dark" class="mt-2">Submit</b-button>
    </b-form>
    <router-link to="/register">Don't have an account? Sign up!</router-link>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: "LoginPage",
    data(){
        return{
            loginForm:{
                email: "",
                password: ""
            }
        }
    },
    methods:{
        doLogin(){
            this.$store.dispatch("goLogin", this.loginForm)
            .then((resp) =>{
              Swal.fire(
                'Welcome!',
                `Login success`,
                'success'
              )
              localStorage.setItem("access_token", resp.data.access_token)
              this.$store.commit("setToken", true)
              this.$router.push("/books")
            })
            .catch(err =>{
              console.log(err);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
            })
        }
    }
}
</script>

<style>
.loginForm{
    width: 50vh;
}
</style>