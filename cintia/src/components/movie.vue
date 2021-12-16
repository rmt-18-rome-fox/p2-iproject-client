<template>
  <div class="d-flex justify-content-center" style="margin: 20px">
    <div class="card" style="width: 60rem; margin: 10px; padding: 20px">
      <div class="d-flex">
        <img  :src="movies.poster" alt="Card image cap" />
        <div class="text-justify pl-4 align-self-center">
          <a :href="'//' + movies.imdbUrl" target="_blank">
            <h5 class="card-title">{{ movies.title }}</h5></a
          >
          <p class="card-text">Genre: {{ movies.genre }}</p>
          <p>Actors: {{ movies.actors }}</p>
          <p>Plot: {{ movies.plot }}</p>
          <a href="#" class="btn btn-primary" @click="back"
            >Back to Movies List</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import Swal from "sweetalert2";

export default {
  data() {
    return {
      movies: [],
      id: this.$route.params.id,
    };
  },
  methods: {
    detailProduct() {
      this.$store
        .dispatch("aFetchOne", this.id)
        .then((res) => {
          this.movies = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back() {
      this.$router.push("/movies");
    },
  },
  created() {
    this.detailProduct();
  },
};
</script>

<style></style>
