<template>
  <!-- Booking Card -->
  <div>
    <div
      class="d-flex justify-content-center"
      style="margin: 20px"
      v-for="booking in bookings"
      :key="booking.id"
    >
      <div class="card" style="width: 60rem; margin: 10px; padding: 20px">
        <div class="d-flex">
          <img :src="booking.movie.poster" alt="Card image cap" />
          <div class="text-justify pl-4 align-self-center">
            <a :href="'//' + booking.movie.imdbUrl" target="_blank">
              <h5 class="card-title">{{ booking.movie.title }}</h5></a
            >
            <p class="card-text">Genre: {{ booking.movie.genre }}</p>
            <p>Actors: {{ booking.movie.actors }}</p>
            <p>Plot: {{ booking.movie.plot }}</p>
            <a
              href="#"
              class="btn btn-danger"
              @click="deleteBooking(booking.movie.id)"
              >Cancel Booking</a
            >
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
      bookings: [],
    };
  },
  methods: {
    fetchBookings() {
      this.$store
        .dispatch("aFetchBookings")
        .then((res) => {
          this.bookings = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteBooking(id) {
      this.$store
        .dispatch("aDelete", id)
        .then(() => {
          this.$router.push("/movies");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchBookings();
  },
};
</script>

<style></style>
