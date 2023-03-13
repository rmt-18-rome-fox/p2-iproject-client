<template>
  <div class="home">
    <Navbar />
    <MovieComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import MovieComponent from "@/components/movies.vue";

export default {
  name: "Movies",
  components: {
    Navbar,
    MovieComponent,
  },
};
</script>
