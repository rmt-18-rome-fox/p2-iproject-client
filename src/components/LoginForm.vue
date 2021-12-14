<template>
  <div class="container">
    <h1>Login</h1>
    <div class="row my-5">
      <form style="width: 70%" class="mx-auto" @submit.prevent="doLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="formData.email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="formData.password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
    <div class="row d-flex justify-content-center">
      <p>
        Don't have an account yet?
        <router-link to="/auth/register">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    doLogin() {
      this.$store
        .dispatch("doLogin", this.formData)
        .then(({ data }) => {
          localStorage.access_token = data.access_token;
          localStorage.user_name = data.userData.name;
          localStorage.user_cityId = data.userData.cityId;
          localStorage.user_cityName = data.userData.cityName;
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
