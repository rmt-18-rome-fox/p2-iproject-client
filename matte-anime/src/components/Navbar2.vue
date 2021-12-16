<template>
  <nav class="flex flex-row justify-evenly bg-gray-500 h-10 items-center">
    <div id="Identity" class="">
      <p>MatteAnime</p>
    </div>
    <div class="flex justify-between">
      <router-link to="/" class="mr-5">Home</router-link>
      <router-link to="/my-watch-lists" class="ml-5">My WatchList</router-link>
    </div>
    <div class="">
    <router-link v-if="!isLogin" to="/login">Login</router-link>
    <span role="button" @click="doLogout" v-if="isLogin">Logout</span>
    </div>
  </nav>
</template>

<script>
import swal from 'sweetalert2'

export default {
  name: "Navbar",
  created(){
    if(localStorage.getItem("access_token")) this.$store.commit("SET_IS_LOGIN", true)
    else this.$store.commit("SET_IS_LOGIN", false)
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    doLogout(){
      localStorage.clear()
      this.$store.commit("SET_IS_LOGIN", false)
      this.$router.push('/')
      swal.fire('You hasbeen Logout')
    },
  }
}
</script>

<style>

</style>