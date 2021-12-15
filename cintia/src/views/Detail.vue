<template>
  <div class="home">
    <Navbar />
    <Detail />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import Detail from "@/components/movie.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Detail,
  },
};
</script>
