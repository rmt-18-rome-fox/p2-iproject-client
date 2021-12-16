<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_LOGIN_STATUS', true)
    } else {
      this.$store.commit('SET_LOGIN_STATUS')
    }
  }
}
</script>

<style>
/* #map {
  height: 100vh;
  width: 100vw
} */
</style>
