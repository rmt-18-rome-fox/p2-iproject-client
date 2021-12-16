<template>
  <div id="app">
    <navbar :isLoggedIn="isLoggedIn"></navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/mycharacters">My Character</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
export default {
  components: {Navbar},
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  },
  created() {
    if(localStorage.access_token) {
      this.$store.commit("set_is_logged_in", true)
    }
  }
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
