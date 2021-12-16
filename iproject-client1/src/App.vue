<template>
  <div id="app">
    <router-view id="page" />
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer';
export default {
  name: 'App',
  created() {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_IS_LOGIN', true);
    }
  },
  components: {
    HFooter,
  },
};
</script>

<style>
#app {
  background-image: url(https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
  background-size: cover;
  background-repeat: repeat;
  min-height: 100vh;
  width: 100vw;
  font-family: 'Outfit', sans-serif;
}
</style>
