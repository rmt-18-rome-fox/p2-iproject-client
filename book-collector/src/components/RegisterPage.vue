<template>
  <div class="container mt-5">
    <h1>Register Page</h1>
    <b-form class="registerForm"
      @submit.prevent="doRegister">
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

      <b-button type="submit" variant="dark" class="mt-2">Submit</b-button>
    </b-form>
    <router-link to="/login">Already have an account?</router-link>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
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
        Swal.fire(
          'Good job!',
          `Register ${resp.data.name} success`,
          'success'
        )
        this.$router.push("/login")
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
.registerForm{
    width: 50vh;
}
</style>