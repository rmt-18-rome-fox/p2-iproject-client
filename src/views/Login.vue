<template>
  <div class="d-flex justify-content-center">
    <div class="fullbody d-flex align-items-center">
      <div class="card">
        <div class="card-header">
          <h3>Sign In</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="submitLogin">
            <div class="d-grid gap-2">
              <div class="input-group form-group">
                <input type="text" class="form-control" placeholder="username" v-model="formLogin.email" />
              </div>
              <div class="input-group form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                  v-model="formLogin.password"
                />
              </div>
              <div class="input-group form-group">
                <input
                  type="submit"
                  value="Login"
                  class="loginsubmit btn btn-dark w-100"
                />
              </div>
            </div>
          </form>
          <hr />
          <div>
               <GoogleLogin class="btn btn-primary w-100" :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Google Login</GoogleLogin>
          </div>
          <hr />
          <div>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Don't have an account?<router-link to="/register">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'

export default {
  data () {
    return {
      params: {
        client_id: '1086311842266-vb72lnlpo5bfcep796dnrrru4bu2dph9.apps.googleusercontent.com'
      },
      formLogin: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('loginUser', this.formLogin)
        .then(data => {
          localStorage.setItem('email', this.formLogin.email)
          this.$store.dispatch('setUsername', this.formLogin.email)
          this.$router.push('/socket')
        })
        .catch(err => console.log(err))
    },
    onSuccess (googleUser) {
      const basic = googleUser.getBasicProfile()
      const payload = googleUser
      this.$store.dispatch('authGoogle', payload)
        .then((data) => {
          localStorage.setItem('email', basic.getEmail())
          this.$store.dispatch('setUsername', basic.getEmail())
          this.$router.push('/mainpage')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onFailure (googleUser) {
      console.log('FAILYA')
    }
  },
  computed: {
  }

}
</script>

<style>
</style>
