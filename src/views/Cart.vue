<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-12 my-5">
          <h1 class="text-center">Cart</h1>
        </div>
        <div class="row mx-auto" style="width: 80%" v-if="carts.length > 0">
          <div
            class="col-6 d-flex shadow-lg p-3 rounded"
            v-for="cart in carts"
            :key="cart.id"
          >
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
                <b-button
                  variant="outline-danger"
                  @click.prevent="deleteCart(cart.id)"
                >
                  <font-awesome-icon :icon="['fas', 'trash-alt']" /> &nbsp;
                  Delete</b-button
                >
              </div>
            </div>
          </div>
        </div>
        <div v-else class="mx-auto mb-5">
          <b-img
            src="https://ik.imagekit.io/johannes/Empty_Jo6oasq50.png?updatedAt=1639583060788"
            alt="Empty Cart"
            width="400px"
            height="400px"
          ></b-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
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
    deleteCart(id) {
      this.$store
        .dispatch("deleteCart", id)
        .then(({ data }) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: data,
          });

          this.fetchCart();
        })
        .catch((err) => {
          console.log(err);
        });
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
