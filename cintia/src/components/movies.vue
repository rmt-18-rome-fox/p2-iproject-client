<template>
  <!-- MoviesCard -->
  <div class="d-flex flex-wrap">
    <div class="group" v-for="movie in movies" :key="movie.id">
      <div class="relative">
        <div class="w-full">
          <img
            style="height: 400px; width: auto"
            :src="movie.poster"
            class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100 rounded-md"
          />
          <div
            class="absolute bottom-0 px-2 py-4 flex flex-col bg-gradient-to-t from-black w-full rounded-md"
          >
            <p
              class="text-xl text-white uppercase inline-block align-start text-center pl-2 font-bold"
            >
              {{ movie.title }}
            </p>
            <p
              class="text-md text-white inline-block align-start text-center pl-2"
            >
              {{ movie.genre }}
            </p>
            <p
              class="text-md text-white inline-block align-start text-center pl-2"
            >
              {{ movie.actors }}
            </p>
            <p
              class="text-md text-white inline-block align-start text-center pl-2"
            >
              {{ movie.plot }}
            </p>
            <div class="flex justify-center items-center h-16">
              <button
                @click.prevent="add(movie.id)"
                class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest font-bold"
              >
                Book this Movie
              </button>
            </div>
          </div>
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
    add(id) {
      this.$store
        .dispatch("aAdd", id)
        .then(() => {
          this.$router.push("/favourites");
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
