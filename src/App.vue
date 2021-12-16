<template>
  <div id="app">
    <!-- <navbar :isLoggedIn="isLoggedIn"></navbar>
    <router-view /> -->
    <Home />
  </div>
</template>

<script>
// import Navbar from "./components/Navbar.vue"
import Home from "./views/Home.vue"
export default {
  components: { Home},
  // computed: {
  //   isLoggedIn() {
  //     return this.$store.state.isLoggedIn
  //   }
  // },
  // created() {
  //   if(localStorage.access_token) {
  //     this.$store.commit("set_is_logged_in", true)
  //   }
  // }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
