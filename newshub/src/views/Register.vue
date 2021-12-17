<template>
  <div class="container mt-5">
    <b-form
      class="d-flex flex-column justify-content-center align-items-center"
      v-on:submit.prevent="formSubmitHandler"
    >
      <div><h3>Sign Up</h3></div>

      <b-form-group class="w-25" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="dataUser.email"></b-form-input>
      </b-form-group>
      <b-form-group class="w-25" label="Password:" label-for="input-2">
        <b-form-input
          type="password"
          id="input-2"
          v-model="dataUser.password"
        ></b-form-input>
      </b-form-group>

      <b-button class="w-25 mt-2 mb-3" type="submit" variant="success"
        >Register</b-button
      >
    </b-form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Register",
  data() {
      return {
          dataUser: {
              email: "",
              password: ""
          }
      }
  },
  methods: {
      ...mapActions(["doUserRegister"]),
      async formSubmitHandler() {
          this.doUserRegister(this.dataUser)
          this.$router.push({name: 'Login'})
      }
  }
};
</script>

<style></style>
