<template>
  <div class="semi-body-login d-flex">
    <div class="main-container-login d-flex">
      <div class="container1-login m-5 d-flex flex-column col-3">
        <a href="https://www.freepnglogos.com/pics/coffee-logo-png" title="Image from freepnglogos.com"
          ><img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png" height="500" alt="coffee logo design creative idea logo elements"
        /></a>
        <img src="https://www.freepnglogos.com/pics/coffee-logo-png" alt="" srcset="" />
      </div>
      <div class="container2-login m-5 d-flex flex-column col-7">
        <h1>Login</h1>
        <br />
        <form class="col-8" @submit.prevent="toLogin">
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="inputEmailLogin" class="form-control" placeholder="e.g. user1@mail.com" v-model="email" />
            <label class="form-label" for="inputEmailLogin">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="inputPasswordLogin" class="form-control" placeholder="********" v-model="password" />
            <label class="form-label" for="inputPasswordLogin">Password</label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn-signin btn btn-primary btn-block mb-4">Sign in</button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Not a member? <router-link class="to-register" to="/register">Register</router-link></p>
            <!-- <router-link class="to-register" to="/">Home</router-link> -->
            <p>or sign up with:</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    // ===============================>>> METHODS UNTUK LOGIN BIASA <<<===============================
    toLogin() {
      this.$store
        .dispatch('toLogin', { email: this.email, password: this.password })
        .then(() => {
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.semi-body-login {
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fcf1cf;
}
.container1-login {
  justify-content: center;
  align-items: center;
}
.container2-login {
  justify-content: center;
  align-items: center;
  display: flex;
}
.main-container-login {
  background-color: #bfd973;
  width: 75vw;
  height: 75vh;
  border-radius: 40px;
}
.container2-login h1 {
  color: #4b450e;
}
.container2-login .btn-signin {
  background-color: #4b450e;
  border-color: #4b450e;
}
.container2-login .btn-signin:hover {
  background-color: #dbb736;
  border-width: 1px;
  color: #4b450e;
  font-weight: bold;
}
.container2-login .to-register {
  color: #4b450e;
}
.container2-login .to-register:hover {
  font-weight: bold;
}
</style>
