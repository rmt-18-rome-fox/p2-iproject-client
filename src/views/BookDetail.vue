<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row my-5">
        <div class="col-12">
          <h1 class="text-center">{{ book.title }}</h1>
        </div>
        <div class="row mx-auto mt-5" style="width: 80%">
          <div class="col-6 d-flex justify-content-center align-items-center">
            <b-img
              :src="book.imageUrl"
              fluid
              alt="Fluid image"
              style="width: 300px"
              height="500px"
              rounded
            ></b-img>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-12">
                <h2 class="my-5">
                  {{
                    new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(book.price)
                  }}
                </h2>
              </div>
            </div>

            <div class="row mb-5">
              <div class="col-12">
                <b-card no-body>
                  <b-tabs card>
                    <b-tab title="Book Detail" active>
                      <b-card-text>Author: {{ book.author }}</b-card-text>
                      <b-card-text>Genre: {{ book.genre }}</b-card-text>
                      <b-card-text
                        >Published Year: {{ book.publishedYear }}</b-card-text
                      >
                    </b-tab>
                    <b-tab title="Seller Detail">
                      <b-card-text>Name: {{ book.User.name }}</b-card-text>
                      <b-card-text
                        >Location: {{ book.User.cityName }}</b-card-text
                      >
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
            </div>

            <div class="row" v-if="role === 'customer'">
              <div class="col-12">
                <b-button
                  variant="outline-success"
                  style="margin-right: 35px"
                  @click.prevent="doCheckout(book.id)"
                >
                  <font-awesome-icon :icon="['fas', 'shopping-cart']" /> &nbsp;
                  Buy Now
                </b-button>
                <b-button
                  variant="outline-warning"
                  @click.prevent="addToCart(book.id)"
                >
                  <font-awesome-icon :icon="['fas', 'shopping-basket']" />
                  &nbsp; Add To Cart
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Navbar from "../components/Navbar.vue";
export default {
  name: "BookDetail",
  components: { Navbar },
  methods: {
    showDetail() {
      const id = +this.$route.params.id;
      this.$store
        .dispatch("showDetail", id)
        .then(({ data }) => {
          this.$store.commit("SUCCESS_SHOW_DETAIL", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToCart(bookId) {
      this.$store
        .dispatch("addToCart", bookId)
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
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1000,
          });
        });
    },
    doCheckout(id) {
      this.$router.push(`/checkout/${id}`);
    },
  },
  created() {
    this.showDetail();
  },
  computed: {
    book() {
      return this.$store.state.book;
    },
    role() {
      return localStorage.user_role;
    },
  },
};
</script>

<style></style>
