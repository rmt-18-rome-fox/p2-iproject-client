<template>
  <div id="app" class="bg-green-800 min-h-screen bg-opacity-25">
    <Sidebar class="pt-6" v-if="isLogin === true"></Sidebar>
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Sidebar,
  },
  methods: {
    ...mapMutations({
      isLoggedIn: "LOGIN",
    }),
    ...mapActions(["customEventServer"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLoggedIn(true);
    }
  },
  computed: {
    ...mapState(["isLogin"]),
  },
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
