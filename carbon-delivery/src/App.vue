<template>
  <div>
    <Navbar />
    <router-view />
    <div class="absolute bottom-0 w-full">
      <HFooter class="bg-red-500" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HFooter from './components/vue-hacktiv-footer.vue'

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
