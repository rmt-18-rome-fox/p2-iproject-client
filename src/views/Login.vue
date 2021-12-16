<template>
  <div class="container bg-light rounded d-flex justify-content-center" style="max-width: 400px; margin-top: 16rem;">
    <div class="login-form">
      <div style="margin: 10px;"><br>
          <h2 style="text-align: center">Login</h2>
      </div>
      <form style="margin: 10px;" @submit.prevent="login">
          <div class="form-group">
              <label for="email">Email</label>
              <input v-model="email" type="text" class="form-control" id="email" placeholder="Enter email">
          </div>
          <div class="form-group">
              <label for="password">Password</label>
              <input v-model="password" type="password" id="password" class="form-control" placeholder="Enter password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form><br>

      <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin><br><br>
      <p>Feel like you don't belong? Register <a href="/register" @click.prevent="showRegister">here</a></p><br>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import GoogleLogin from 'vue-google-login'
import { LoaderPlugin } from 'vue-google-login'
/* eslint-enable */
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  /* eslint-disable */
  components: {
    GoogleLogin,
    LoaderPlugin
  },
  data: function () {
  /* eslint-enable */
    return {
      email: '',
      password: '',
      params: {
        client_id: '870994995976-3icnvt5huafd24tgt4oi18djqs2eih22.apps.googleusercontent.com'
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(() => {
            this.$router.push('/')
        })

      this.email = ''
      this.password = ''
    },
    showRegister: function () {
        this.$router.push('register')
    },
    githubLogin: function () {
      this.$store.dispatch('githubLogin', {
        code: this.$route.query.code
      })
    },
    onSuccess: function (googleUser) {
      this.$store.dispatch('googleLogin', {
        idToken: googleUser.getAuthResponse().id_token
      })
        .then(() => {
          this.$router.push('/')
        })
    },
    onFailure: function () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sorry, there must be a mistake on our part. OR try clearing your browser cache?'
      })
    }
  },
  created: function () {
  }
}
</script>

<style>

</style>