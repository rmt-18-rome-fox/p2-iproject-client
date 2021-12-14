<template>
  <div id="app" class="bg-gray-100 mt-0">
    <Sidebar class=""></Sidebar>
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
  data() {
    return {
      isLogin: false,
    };
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
