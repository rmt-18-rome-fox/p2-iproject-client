<template>
  <div>
    <section class="wrapper" id="login-form">
      <div
        class="container"
        style="
          width: 400;
          padding: 3rem !important;
          border: 2px solid rgba(0, 0, 0, 0.125);
        "
      >
        <div class="card-body">
          <h2>Log in</h2>
          <form @submit.prevent="doLogin">
            <div class="mb-3">
              <!-- <div v-if="error" class="alert alert-danger" role="alert">
                <p>{{ error }}</p>
              </div> -->
              <label for="InputEmail" class="form-label">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="login-email"
              />
            </div>
            <div class="mb-3">
              <label for="InputPassword" class="form-label">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="login-password"
              />
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Sign In</button>
            <!-- <facebook-login
              class="button"
              appId="326022817735322"
              @login="getUserData"
              @logout="onLogout"
              @get-initial-status="getUserData"
            >
            </facebook-login> -->
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import router from "../router/index"
// import facebookLogin from 'facebook-login-vuejs';

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    doLogin() {
      this.$store
        .dispatch("doLogin", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/');
        })
        // .catch(() => {});
    },
  },
};
</script>

<style>
</style>