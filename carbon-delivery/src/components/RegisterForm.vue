<template>
  <form>
      <div class="grid grid-cols-3">
          <div class="col-start-2 bg-white rounded-xl grid grid-rows-6 p-4">
              <div class="row-span-2 grid grid-cols-4">
                  <label for="name" class="col-span-2 justify-self-center self-center">Name</label>
                  <input v-model="name" type="name" class="col-span-2 bg-gray-900 outline-none bg-transparent p-1 border-b-2 justify-self-center">
              </div>
              <div class="row-span-2 grid grid-cols-4">
                  <label for="email" class="col-span-2 justify-self-center self-center">Email</label>
                  <input v-model="email" type="email" class="col-span-2 bg-gray-900 outline-none bg-transparent p-1 border-b-2 justify-self-center">
              </div>
              <div class="row-span-2 grid grid-cols-4">
                  <label for="password" class="col-span-2 justify-self-center self-center">Password</label>
                  <input v-model="password" type="password" class="col-span-2 bg-gray-900 outline-none bg-transparent p-1 border-b-2 justify-self-center">
              </div>
          </div>
      </div>
      <div class="grid grid-cols-3">
          <div class="col-start-2">
              <div class="row-span-2 grid grid-cols-4">
                  <div class="col-span-4 flex justify-evenly mt-2">
                    <button @click="backToLogin" type="button" class="w-1/3 transition ease-in-out bg-[#114646] rounded-lg p-2 text-white text-center">
                        Back
                    </button>
                    <button @click="register" type="submit" v-if="!loading" class="w-1/3 transition ease-in-out bg-[#114646] rounded-lg p-2 text-white text-center">
                        Confirm
                    </button>
                    <div v-if="loading" class="border-white border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-6 h-6 self-center rounded-full animate-spin"></div>
                  </div>
              </div>
          </div>
      </div>
        <transition name="slide-fade">
          <div v-if="error">
            <div class="flex justify-center">
              <div class="mt-8 rounded-lg text-center text-sm text-gray-900 p-1 bg-red-500" disabled>{{ error }}</div>
            </div>
          </div>
          <div v-if="wantLogin">
            <div class="flex justify-center">
              <div class="mt-8 rounded-lg text-center text-sm text-gray-900 p-1 bg-red-500" disabled>You have to register an account first :)</div>
            </div>
          </div>
        </transition>
        <div class="w-1/3 absolute left-8 top-24 text-7xl text-gray-200/10 bg-transparent" disabled>Register</div>
  </form>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: "",
      password: "",
      email: "",
      loading: false,
      error: false
    }
  },
  computed: {
    wantLogin () {
      return this.$store.state.wantLogin
    }
  },
  methods: {
    backToLogin () {
      this.$router.push('/login')
    },
    register () {
      this.loading = true
      this.error = false
      const name = this.name
      const email = this.email
      const password = this.password

      this.$store.dispatch('register', { name, email, password })
      .then(() => {
        this.loading = false
        this.$router.push('/login')
      })
      .catch((err) => {
        console.log(err)
        this.loading = false
        console.log(err.response.data)
        this.error = err
      })
    }
  }
}
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
</style>