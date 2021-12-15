<template>
  <div id="app">
    <div v-if="loadingScreen === true">
      <LoadingScreen></LoadingScreen>
    </div>
    <div v-if="loadingScreen === false">
      <router-view />
    </div>
  </div>
</template>

<script>
import LoadingScreen from "./components/LoadingScreen.vue";
export default {
  name: "App",
  components: {
    LoadingScreen,
  },
  computed: {
    loadingScreen() {
      return this.$store.state.loadingScreen;
    },
  },
};
</script>

<style></style>
