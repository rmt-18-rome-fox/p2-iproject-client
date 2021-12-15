<template>
  <div class="loginForm">
    <b-form @submit.prevent="doLogin">
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

      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
    <router-link to="/register">Don't have an account? Sign up!</router-link>
  </div>
</template>

<script>
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
                localStorage.setItem("access_token", resp.data.access_token)
                this.$router.push("/books")
            })
            .catch(err =>{
              console.log(err);
            })
        }
    }
}
</script>

<style>
.loginForm{
    margin: 50px;
    width: 50vh;
}
</style>