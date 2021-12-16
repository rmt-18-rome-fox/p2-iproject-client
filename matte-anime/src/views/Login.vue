<template>
<div id="login-page">
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 box-content p-8 border-4">
      <div class="">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to MatteAnime
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="doLogin">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email">Email</label>
            <input v-model="email" name="email" type="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Input Email" required/>
          </div>
          <br>
          <div>
            <label for="password">Password</label>
            <input v-model="password" name="password" type="text" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Input Password" required/>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Login
          </button>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <p class="font-medium">
              Don't have an account yet? <span role="button" class="text-blue-500 hover:text-blue-700" @click.prevent="toRegister">Register</span>
            </p>
          </div>
        </div>

        <!-- <div class="flex items-center justify-between">
          <facebook-login class="button"
            appId="298771618827246"
            @login="getUserData"
            @logout="onLogout"
            @get-initial-status="getUserData">
          </facebook-login>
        </div> -->
      </form>
    </div>
  </div>
</div>
</template>

<script>
import swal from 'sweetalert2'
import facebookLogin from 'facebook-login-vuejs';

export default {
  name: "Login",
  data(){
    return {
      email: "",
      password: ""
    }
  },
  components: {
    facebookLogin
  },
  methods: {
    toRegister(){
      this.$router.push('/register')
    },
    doLogin(){
      this.$store.dispatch("doLogin", {email: this.email, password:this.password})
      .then((res) => {
        console.log({res});
        console.log('masuk swal');
        swal.fire({
          icon: 'success',
          text: 'Success Login'
          })
        this.$router.push('/')
      })
      .catch((err) => {
        if(err.response.data.message){
          swal.fire({
            icon: 'error',
            text: err.response.data.message
          })
        }
        else {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>