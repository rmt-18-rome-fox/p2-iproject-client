<template>
  <!-- MoviesCard -->
  <div class="container vh-100">
    <div class="d-flex justify-content-center mx-1 my-5 flex-wrap">
      <div
        class="card"
        style="width: 18rem; margin: 10px"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      >
        <img class="card-img-top" :src="movie.poster" alt="Card image cap" />
        <div class="card-body">
          <strong
            ><h5 class="card-title">{{ movie.title }}</h5></strong
          >
          <p class="card-text">
            {{ movie.genre }}
          </p>
          <a href="#" class="btn btn-primary mb-2" @click="addBooking(movie.id)"
            >Book this Movie</a
          >

          <router-link :to="'movies/' + movie.id"
            ><a href="#" class="btn btn-success mb-2" to="path"
              >Find out more</a
            ></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    fetchMovies() {
      this.$store
        .dispatch("aFetch")
        .then((res) => {
          this.movies = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addBooking(id) {
      this.$store
        .dispatch("aAdd", id)
        .then(() => {
          this.$router.push("/bookings");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchMovies();
  },
};
</script>

<style></style>
