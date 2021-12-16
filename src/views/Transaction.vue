<template>
  <div>
    <Navbar></Navbar>
    <div class="row">
      <div class="col-12">
        <h1 class="my-5 text-center">Transaction</h1>
        <div
          v-if="transactions.length > 0"
          class="container"
          style="width: 50%"
        >
          <div
            v-for="transaction in transactions"
            :key="transaction.id"
            class="row mb-4 p-4 rounded shadow-lg"
            style="border: 2px solid rgba(0, 0, 0, 0.2)"
          >
            <div class="col-3 text-center">
              <img
                :src="transaction.Book.imageUrl"
                alt=""
                width="100px"
                height="125px"
              />
            </div>
            <div class="col-3 text-center">
              <h6 class="mb-4">Title</h6>
              {{ transaction.Book.title }}
            </div>
            <div class="col-3 text-center">
              <h6 class="mb-4">Total Price</h6>
              {{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(transaction.amount)
              }}
            </div>
            <div class="col-3 text-center">
              <h6 class="mb-4">Payment Status</h6>
              <font-awesome-icon
                style="font-size: 26px; color: green"
                :icon="['fas', 'check-circle']"
                v-if="transaction.status === 'SUCCEEDED'"
              />
              <font-awesome-icon
                style="font-size: 26px; color: orange"
                :icon="['fas', 'clock']"
                v-if="transaction.status === 'Pending'"
              />
            </div>
          </div>
        </div>
        <div
          v-else
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
      this.$store
        .dispatch("fetchTransactions")
        .then(({ data }) => {
          this.$store.commit("SUCCESS_FETCH_TRANSACTIONS", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchTransactions();
  },
  computed: {
    transactions() {
      return this.$store.state.transactions;
    },
  },
};
</script>

<style></style>
