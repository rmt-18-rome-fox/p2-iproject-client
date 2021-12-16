<template>
  <div class="section">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <div class="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 class="mb-0 pb-3"><span>Sign In </span><span>Sign Up</span></h6>
            <input
              class="checkbox"
              type="checkbox"
              id="reg-log"
              name="reg-log"
            />
            <label for="reg-log"></label>
            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">
                <div class="card-front">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <div class="form-group">
                        <input
                          v-model="loginForm.email"
                          type="email"
                          name="logemail"
                          class="form-style"
                          placeholder="Your Email"
                          id="logemail"
                          autocomplete="off"
                        />
                        <i class="input-icon uil uil-at"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input
                          v-model="loginForm.password"
                          type="password"
                          name="logpass"
                          class="form-style"
                          placeholder="Your Password"
                          id="logpass"
                          autocomplete="off"
                        />
                        <i class="input-icon uil uil-lock-alt"></i>
                      </div>
                      <a @click.prevent="successLogin" href="#" class="btn mt-4"
                        >Sign In</a
                      >
                      <div class="mb-0 mt-4 text-center">
                        <div id="toRegister" class="form-text">
                          Don't have an account?
                          <router-link to="/register">
                            Register an account
                          </router-link>
                        </div>
                        <div id="emailHelp" class="form-text">
                          Or Sign In with Google Account
                          <center>
                          <GoogleLogin
                            :params="params"
                            :renderParams="renderParams"
                            :onSuccess="onSuccess"
                          ></GoogleLogin>
                        </center>
                        </div>
                        <br />
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-back">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <div class="form-group mt-2">
                        <input
                          v-model="registerForm.email"
                          type="email"
                          name="logemail"
                          class="form-style"
                          placeholder="Your Email"
                          id="logemail"
                          autocomplete="off"
                        />
                        <i class="input-icon uil uil-at"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input
                          v-model="registerForm.password"
                          type="password"
                          name="logpass"
                          class="form-style"
                          placeholder="Your Password"
                          id="logpass"
                          autocomplete="off"
                        />
                        <i class="input-icon uil uil-lock-alt"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input
                          v-model="registerForm.username"
                          type="text"
                          name="logpass"
                          class="form-style"
                          placeholder="Your Username"
                          id="logpass"
                          autocomplete="off"
                        />
                        <i class="input-icon uil uil-lock-alt"></i>
                      </div>
                      <a 
                      @click.prevent="successRegister"
                      href="#" class="btn mt-4">Sign Up</a>
                      <div id="toLogin" class="form-text">
                        Already have an account?
                        <router-link to="/login">
                          Log in with email</router-link
                        >
                      </div>

                      <div id="emailHelp" class="form-text">
                        Or Sign In with Google Account
                        <center>
                         <GoogleLogin
                        :params="params"
                        :renderParams="renderParams"
                        :onSuccess="onSuccess"
                      ></GoogleLogin>
                      </center>
                      </div>
                      <br />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2";
import axios from "axios";
import GoogleLogin from "vue-google-login";

export default {
  name: "Login",
  components: {
    GoogleLogin,
  },

  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },

      registerForm: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },

      params: {
        client_id:
          "929104104787-fsdvl1cng9ggba7hropufjkpiilu6vnm.apps.googleusercontent.com",
      },

      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    ...mapActions(["loginUser", "registerUser", "google"]),
   

    checkToken() {
      if (localStorage.token) {
        this.$router.push("/");
      } else {
        console.log("ERROR: No token");
      }
    },

    async successLogin() {
      await this.loginUser(this.loginForm);

      // console.log(this.isLogin);

      if (this.isLogin === true) {
        this.$router.push("/");
      } else {
        console.log("ERROR");
      }
    },

    async onSuccess(googleUser) {
      await this.google(googleUser)
          this.$router.push("/")
          
        
    },

    async successRegister() {
      await this.registerUser(this.registerForm);

      if (this.isRegister === true) {
        this.$router.push("/login");
        this.registerForm = {
              username: "",
              email: "",
              password: "",
              phoneNumber: "",
              address: "",
            };
      } else {
        console.log("ERROR");
      }
    }
  },

  computed: {
    ...mapState(["isLogin", "isLoginGL"]),
  },

  created() {
    this.checkToken();
  },
};
</script>

<style>
</style>