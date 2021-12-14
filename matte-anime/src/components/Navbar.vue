<template>
  <nav>
    <router-link v-if="!isLogin" to="/login">Login</router-link>
    <br>
    <router-link to="/my-watch-list">My WatchList</router-link>
    <br>
    <span role="button" @click="doLogout" v-if="isLogin">Logout</span>
    <br><br>
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
      swal.fire('Logout')
    }
  }
}
</script>

<style>

</style>