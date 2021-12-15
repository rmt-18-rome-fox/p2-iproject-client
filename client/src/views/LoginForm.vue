<template>
    <div>
        <div class="wrapper-form position-relative">
          <div class="login-box">
              <h2>Sign In</h2>
              <form>
                  <div class="user-box">
                      <input v-model="logForm.email" type="email" name="" required="">
                      <label>Email</label>
                  </div>
                  <div class="user-box">
                      <input v-model="logForm.password" type="password" name="" required="">
                      <label>Password</label>
                  </div>
                  <a href="#" @click.prevent="onLog">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Sign in
                  </a>
              </form>
              <hr>
                  <p class="text-white text-center">
                    Don't have an account yet ? 
                  </p>
                  <router-link class="p-2" to="/register">Sign Up</router-link>
              <hr>
              <p class="text-white text-center">
                  Or Log in with
              </p>
              <div class="row justify-content-center">
                <GoogleLogin class="align-self-center p-3 google-class-button" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import GoogleLogin from 'vue-google-login';
import Swal from "sweetalert2"

export default {
  components:{
    GoogleLogin
  },
  data() {
    return {
      logForm: {
        email: "",
        password: "",
      },
      params: {
          client_id: "979383457448-dapn1mei8spt2oejpodc0klumg2q96ep.apps.googleusercontent.com"
      },
      renderParams: {
          width: 50,
          height: 50,
          longtitle: false,
          theme: 'light',
      }
    };
  },
  methods: {
    ...mapActions(["onLogServer", "onLogGoogle"]),

    async onLog() {

     try {

        await this.onLogServer(this.logForm);

        if(this.allError.msg) throw { err: this.allError }
        
        if (this.isLog === true) {
            const success = `Hi, Welcome`
            this.alertSuccess(success)
            this.$router.push("/");
        } else {
          this.$router.push("/register");
        }
     } catch (err) {
       this.alertError(err)
     }
    },
    alertSuccess(string){
      Swal.fire({
          position: "top-end",
          text: `${string}`,
          width: 300,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
      })
    }, 
    alertError(error){
      Swal.fire({
          title: `Oops...`,
          icon: `error`,
          text: `${error.err.msg}`,
          width: 600,
          padding: '3em',
          background: '#fff url(https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif)',
          footer: `Status: ${error.err.status}`,
      })
    },
    onSuccess(googleUser) {
      let idToken = googleUser.getAuthResponse().id_token
      this.onLogGoogle({idToken: idToken})

      if(this.allError.msg) throw { err: this.allError }

      const success = `Hi, welcome back`
      this.alertSuccess(success)
      this.$router.push("/");
       
    },
    onFailure(error){
      this.$router.push("/register");
      console.log('OH NOES', error)
    },
  },
  computed: {
    
    ...mapState(["isLog", "allError"]),
  
  },
};
</script>

<style>

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  background: linear-gradient(#141e30, #243b55);
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

.google-class-button svg {
  border-radius: 50px!important;
  background-color: #fff;
  padding: 5px;
}

.wrapper-form {
  width: 100%;
  min-height: 100vh;
}

</style>
