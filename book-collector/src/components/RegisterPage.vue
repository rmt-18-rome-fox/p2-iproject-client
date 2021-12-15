<template>
  <div class="container mt-5">
    <b-form @submit.prevent="doRegister">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
          v-model="registerForm.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Enter name"
          v-model="registerForm.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Password:" label-for="input-3">
        <b-form-input
          type="password"
          id="input-3"
          placeholder="Enter Password"
          v-model="registerForm.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
    <router-link to="/login">Already have an account?</router-link>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data(){
    return{
      registerForm:{
        email: "",
        name: "",
        password: ""
      }
    }
  },
  methods: {
    doRegister(){
      this.$store.dispatch("goRegister", this.registerForm)
      .then(resp =>{
        console.log(resp);
        this.$router.push("/login")
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }
}
</script>

<style>
.registerForm{
    margin: 50px;
    width: 50vh;
}
</style>