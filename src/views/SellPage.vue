<template>
  <div class="container">
    <Navbar></Navbar>
    <h1>Sell page</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "SellPage",
  components: {
    Navbar,
  },
};
</script>

<style></style>
