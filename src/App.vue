<template>
  <div id="app">
    <Navbar v-if="isLoggedIn"></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
  created: function () {
    if (localStorage.access_token) {
      this.$store.commit('SET_LOGIN', true)
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style>
body {
  background-color: #150b28
}
</style>
