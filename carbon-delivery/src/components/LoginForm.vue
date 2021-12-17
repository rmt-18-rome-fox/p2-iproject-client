<template>
  <form>
      <div class="grid grid-cols-3">
          <div class="col-start-2 bg-white rounded-xl grid grid-rows-6 p-4">
              <div class="row-span-3 grid grid-cols-4">
                  <label for="email" class="col-span-2 justify-self-center self-center">Email</label>
                  <input v-model="email" type="email" class="col-span-2 bg-gray-900 outline-none bg-transparent p-1 border-b-2 justify-self-center">
              </div>
              <div class="row-span-3 grid grid-cols-4">
                  <label for="password" class="col-span-2 justify-self-center self-center">Password</label>
                  <input v-model="password" type="password" class="col-span-2 bg-gray-900 outline-none bg-transparent p-1 border-b-2 justify-self-center">
              </div>
          </div>
      </div>
      <div class="grid grid-cols-3">
          <div class="col-start-2">
              <div class="row-span-2 grid grid-cols-4">
                  <div class="col-span-4 flex justify-evenly mt-2">
                    <button @click="goToRegister" type="button" class="w-1/3 transition ease-in-out bg-[#114646] rounded-lg p-2 text-white text-center">
                        Register
                    </button>
                    <button type="submit" v-if="!loading" @click="login" class="w-1/3 transition ease-in-out bg-[#114646] rounded-lg p-2 text-white text-center">
                        Sign in
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
      </transition>
      <div class="grid grid-rows-3">
      <transition name="slide-fade">
        <div>
            <div class="absolute left-8 top-6 text-7xl text-gray-200/10 bg-transparent" disabled>Login</div>
        </div>
      </transition>
      <transition name="slide-fade">
      <div v-if="email">
          <input :value="email" class="text-8xl text-gray-200/10 bg-transparent" disabled>
      </div>
      </transition>
      <transition name="slide-fade">
        <div v-if="password">
            <input :value="fakePassword" class="text-8xl text-gray-200/10 bg-transparent" disabled>
        </div>
      </transition>
      </div>
  </form>
</template>

<script>
export default {
  name: 'loginForm',
  data () {
    return {
      email: "",
      password: "",
      hashedPassword: "",
      loading: false,
      error: false
    }
  },
  computed: {
    fakePassword () {
      return this.hash(this.password[this.password.length - 1])
    }
  },
  methods: {
    hash(letter) {
        const alphabet = '1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*'
        const max = alphabet.length
        letter = alphabet[Math.floor(Math.random() * max)]
        return letter
    },
    login() {
        this.loading = true
        this.error = false
        
        const email = this.email
        const password = this.password

        this.$store.dispatch('login', { email, password })
        .then(() => {
            this.loading = false
            this.$router.push('/dashboard')
        })
        .catch((err) => {
          this.loading = false  
          this.error = err.response.data.message
        })
    },
    goToRegister() {
        this.$router.push('/register')
    }
  },
  created() {
    this.error = false
    if(this.$store.state.isLoggedIn) {
      this.$router.push('/dashboard')
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