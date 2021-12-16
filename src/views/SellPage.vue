<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <h1 class="text-center my-5">My Store</h1>
      <router-view></router-view>
    </div>
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
