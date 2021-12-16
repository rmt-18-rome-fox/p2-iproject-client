<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    style="height: 100vh; width: 100%"
    id="mainContainer"
  >
    <div
      class="row animate__animated animate__fadeInUp shadow-lg rounded"
      style="width: 95%; height: 400px"
    >
      <div class="col-5">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_ivMD4s.json"
          background="transparent"
          speed="1"
          style="width: 400px; height: 400px"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="col" style="border-left: 2px solid rgba(70, 62, 135, 0.6)">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import "@lottiefiles/lottie-player";
export default {
  name: "Login",
  methods: {
    fetchCities() {
      this.$store
        .dispatch("fetchCities")
        .then(({ data }) => {
          this.$store.commit("SUCCESS_FETCH_CITIES", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchCities();
  },
};
</script>

<style scoped></style>
