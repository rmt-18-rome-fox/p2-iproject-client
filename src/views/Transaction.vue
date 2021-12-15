<template>
  <div>
    <Navbar></Navbar>
    <div class="row">
      <div class="col-12">
        <h1 class="my-5 text-center">Transaction</h1>
        <div
          class="d-flex justify-content-center flex-column align-items-center"
        >
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_a7vr2ghs.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></lottie-player>
          <h5 style="font-weight: 400">No transaction found</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@lottiefiles/lottie-player";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Transaction",
  components: {
    Navbar,
  },
  methods: {
    fetchTransactions() {
      this.$store.dispatch("fetchTransactions");
    },
  },
};
</script>

<style></style>
