<template>
  <div id="app">
    <login></login>
    <home></home>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Login from './views/Login.vue'
export default {
  components: {
    Home,
    Login
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

</style>
