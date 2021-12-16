<template>
  <div>
    <Navbar />
    <router-view />
    <HFooter class="" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  components: {
    Navbar,
    HFooter
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
