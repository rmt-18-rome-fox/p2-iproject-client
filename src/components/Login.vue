<template>
  <form @submit.prevent="doLogin" ref="formLogin">
    <label for="chk" aria-hidden="true">Login</label>
    <input
      v-model="email"
      class="inputCustom customInput"
      type="email"
      name="email"
      placeholder="Email"
    />
    <input
      v-model="password"
      class="inputCustom customInput"
      type="password"
      name="pswd"
      placeholder="Password"
    />
    <button style="width: 60%; height: 40px;">Login</button>
    <div class="justify-content-center">
      <GoogleLogin
        :params="params"
        :renderParams="renderParams"
        :onSuccess="doSuccess"
        :onFailure="doFailure"
      ></GoogleLogin>
    </div>
  </form>
</template>

<script>
import GoogleLogin from "vue-google-login";
import Swal from 'sweetalert2'
export default {
  name: "Login",
  components: {
    GoogleLogin,
  },
  data: function () {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "757517290102-s3igftm58rk9mi4l4a0aack39ertk5n5.apps.googleusercontent.com",
      },
      renderParams: {
        width: 350,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    doLogin () {
      const payload = {
        email: this.email,
        password: this.password,
      };
      console.log(payload, `payload login`)
      this.$store.dispatch("doLogin", payload)
      .then(({ data }) => {
        console.log(data, "payload doLogin on Login");
        localStorage.setItem("access_token", data.access_token);
        this.$store.commit("SET_ISLOGIN", true);
        this.$router.push("/");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
      });
    },
    doSuccess(googleuser) {
      // console.log(`masuk goolge`);
      let google_token = googleuser.getAuthResponse().id_token;
      this.$store
        .dispatch("googleSignIn", google_token)

        .then(({ data }) => {
          // console.log(data, "doSuccess");
          localStorage.setItem("access_token", data.access_token);
          this.$store.commit("SET_ISLOGIN", true);
          this.$router.push("/");

          localStorage.setItem("role", data.role);
          localStorage.setItem("id", data.id);
          this.$refs.formLogin.reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          // console.log(err.response.data.message);
          this.$refs.formRegister.reset();
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        });
    },
    doFailure(googleUser) {
      // console.log(googleUser, "Failure Google Login");
    },
  },
};
</script>

<style>
</style>