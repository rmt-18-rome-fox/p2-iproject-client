<template>
  <div>
    <Navbar></Navbar>
    <div
      class="container d-flex justify-content-center align-content-center mt-5"
    >
      <div class="border" style="width: 50%">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">Checkout</h1>

            <b-img
              center
              class="rounded"
              :src="book.imageUrl"
              alt="Center image"
              width="250px"
              height="325px"
            ></b-img>
            {{ book }}
            <div>
              <p>User City: {{ userCityName }}</p>
              <p>Seller City: {{ book.User.cityName }}</p>
              <button
                class="btn btn-primary"
                @click.prevent="shippingCost(book.User.CityId)"
              >
                Check shipping cost
              </button>
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
  name: "Checkout",
  components: { Navbar },
  methods: {
    showDetail() {
      this.$store
        .dispatch("showDetail", this.$route.params.bookId)
        .then(({ data }) => {
          this.$store.commit("SUCCESS_SHOW_DETAIL", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    shippingCost(sellerCityId) {
      const customerCityId = +localStorage.user_cityId;
      this.$store
        .dispatch("shippingCost", { sellerCityId, customerCityId })
        .then(({ data }) => {
          console.log("masokk");
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.showDetail();
  },
  computed: {
    book() {
      return this.$store.state.book;
    },
    userCityId() {
      return localStorage.user_cityId;
    },
    userCityName() {
      return localStorage.user_cityName;
    },
  },
};
</script>

<style></style>
