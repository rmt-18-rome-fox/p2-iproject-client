<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_IS_LOGIN", true);
    }
  },
};
</script>

<style></style>
