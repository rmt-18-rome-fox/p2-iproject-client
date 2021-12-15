<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-12 my-4">
          <h1 class="text-center">Cart</h1>
        </div>
        <div class="row mx-auto" style="width: 80%">
          <div class="col-6 d-flex border" v-for="cart in carts" :key="cart.id">
            <div style="width: 50%">
              <b-img
                width="200px"
                height="300px"
                :src="cart.Book.imageUrl"
                alt="Book"
                class="rounded"
              ></b-img>
            </div>
            <div
              style="width: 50%"
              class="d-flex flex-column justify-content-between align-items-center text-center py-3"
            >
              <div>
                <h2>{{ cart.Book.title }}</h2>
                <p>Author: {{ cart.Book.author }}</p>
                <p>
                  {{
                    new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(cart.Book.price)
                  }}
                </p>
              </div>
              <div class="buttons">
                <b-button
                  variant="outline-success"
                  class="mb-3"
                  @click.prevent="doCheckout(cart.Book.id)"
                >
                  <font-awesome-icon :icon="['fas', 'shopping-cart']" /> &nbsp;
                  Buy Now
                </b-button>
                <b-button variant="outline-danger">
                  <font-awesome-icon :icon="['fas', 'trash-alt']" /> &nbsp;
                  Delete</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Cart",
  components: { Navbar },
  methods: {
    fetchCart() {
      this.$store
        .dispatch("fetchCart")
        .then(({ data }) => {
          this.$store.commit("SUCCESS_FETCH_CART", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    doCheckout(id) {
      this.$router.push(`/checkout/${id}`);
    },
  },
  created() {
    this.fetchCart();
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
  },
};
</script>

<style></style>
