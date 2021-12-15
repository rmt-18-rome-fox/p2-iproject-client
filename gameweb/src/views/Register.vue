<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Icon -->
      <div class="fadeIn first">
        <img
          src="https://www.pngitem.com/pimgs/m/398-3983382_android-game-icon-png-transparent-png.png"
          id="icon"
          alt="User Icon"
        />
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleRegister">
        <input
          type="text"
          id="email"
          class="fadeIn second"
          placeholder="email"
          v-model="email"
        />
        <input
          type="password"
          id="password"
          class="fadeIn third"
          placeholder="password"
          v-model="password"
        />
        <input type="submit" class="fadeIn fourth" value="Sign Up" />
      </form>

      <p>
        Already Have an Account?
        <a href="#!" class="fw-bold text-body" @click.prevent="toLogin"
          ><u>Login here</u></a
        >
      </p>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    toLogin() {
        this.$router.push("Login");
    },
    handleRegister() {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.$store
        .dispatch("registerUser", user)
        .then((data) => {
          this.$router.push("Login");
          Swal.fire({
            title: "Hooray!",
            text: `Success Creating Account with email ${data.email}`,
            icon: "success",
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
  },
};
</script>

<style>
</style>