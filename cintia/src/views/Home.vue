<template>
  <div class="home">
    <Navbar />
    <HomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import HomeComponent from "@/components/home.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    HomeComponent,
  },
};
</script>
