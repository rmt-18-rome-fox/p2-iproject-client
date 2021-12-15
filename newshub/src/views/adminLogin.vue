<template>
  <div class="container mt-5">
    <b-form
      class="d-flex flex-column justify-content-center align-items-center"
      v-on:submit.prevent="formSubmitHandler"
    >
      <div><h3>Sign In</h3></div>

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

      <b-button class="w-25 mt-2" type="submit" variant="primary"
        >Submit</b-button
      >
     <b-button class="w-25 mt-3" variant="success" v-on:click="goToRegister"
        >Register</b-button
      >
      <!-- <GoogleLogin
        :params="params"
        :renderParams="renderParams"
        :onSuccess="onSuccess"
        :onFailure="onFailure"
        class="mt-3"
      ></GoogleLogin> -->
    </b-form>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: "adminLogin",
    data() {
        return {
            dataUser: {
                email: "",
                password: ""
            }
        }
    },
    computed: {
        ...mapState(["isLoggedIn"])
    },
    methods: {
        ...mapActions(["doLogin"]),
        async formSubmitHandler() {
           await this.doLogin(this.dataUser) 
           if (this.isLoggedIn === true) {
               this.$router.push("/dashboard");
           }
        },
        goToRegister() {
          this.$router.push({ name: "adminRegister" });
        }
    }
}
</script>

<style>

</style>