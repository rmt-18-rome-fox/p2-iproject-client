<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <navbar></navbar>
    <router-view />
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
import {mapMutations} from "vuex";

export default {
  name: "App",
  components: { Navbar, HFooter },
  methods: {
    ...mapMutations({
      mutateIsLoggedIn: "MUTATE_ISLOGGEDIN"
    }),
    created() {
    if (localStorage.getItem("access_token")){
      this.mutateIsLoggedIn(true)
    }
  },
  }
};
</script>

<style>
/* #app {
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
} */
</style>
