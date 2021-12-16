<template>
  <div id="register-page">
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full box-content p-8 border-4 space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register to MatteAnime
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="doRegister">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email">Email</label>
            <input v-model="email" name="email" type="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Input Username" required/>
          </div>
          <br>
          <div>
            <label for="password">Password</label>
            <input v-model="password" name="password" type="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Input Username" required/>
          </div>
          <br>
          <div>
            <label for="fullName">Full Name</label>
            <input v-model="fullName" name="fullName" type="text" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Input Username" required/>
          </div>
          <br>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Submit
          </button>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <p class="font-medium">
              Back to Login: <span role="button" class="text-blue-500 hover:text-blue-700" @click.prevent="toLogin">Back</span>
            </p>
          </div>
        </div>

      </form>
    </div>
  </div>
</div>
</template>

<script>
import swal from 'sweetalert2'

export default {
  name: "Register",
  data(){
    return {
      email: "",
      password: "",
      fullName: ""
    }
  },
  methods: {
    toLogin(){
      this.$router.push('/login')
    },
    doRegister(){
      this.$store.dispatch("doRegister", {email: this.email, password: this.password, fullName: this.fullName})
      .then((res) => {
        console.log('masuk swal');
        swal.fire({
          icon: 'success',
          title: 'Success Regist',
          text: 'Now You Can Login to MatteAnime'
        })
        this.$router.push('/login')
      })
      .catch((err) => {
        if(err.response.data.message){
          swal.fire({
            icon: 'error',
            text: err.response.data.message
          })
        } else {
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