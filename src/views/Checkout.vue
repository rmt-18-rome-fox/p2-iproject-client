<template>
  <div>
    <Navbar></Navbar>
    <div
      class="container d-flex justify-content-center align-content-center mt-5"
    >
      <div style="width: 50%">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">Checkout</h1>

            <b-img
              center
              class="rounded my-5"
              :src="book.imageUrl"
              alt="Center image"
              width="250px"
              height="325px"
            ></b-img>
            <div class="row mb-5">
              <div class="col-12">
                <b-card no-body>
                  <b-tabs card>
                    <b-tab title="Book Detail" active>
                      <b-card-text>Title: {{ book.title }}</b-card-text>
                      <b-card-text>Price: {{ book.price }}</b-card-text>
                      <b-card-text>Author: {{ book.author }}</b-card-text>
                      <b-card-text>Genre: {{ book.genre }}</b-card-text>
                      <b-card-text
                        >Published Year: {{ book.publishedYear }}</b-card-text
                      >
                    </b-tab>
                    <b-tab title="Shipping Detail">
                      <b-card-text>Origin: {{ userCityName }}</b-card-text>
                      <b-card-text
                        >Destination: {{ book.User.cityName }}</b-card-text
                      >
                      <b-card-text
                        >Shipping Cost: {{ shippingCost }}</b-card-text
                      >
                      <b-card-text
                        >Estimated Delivery Time:
                        {{ estimatedTime }} days</b-card-text
                      >
                      <b-card-text>Courier: {{ courier }}</b-card-text>
                    </b-tab>
                    <b-tab title="Payment Detail">
                      <b-card-text>Book's Price: {{ book.price }}</b-card-text>
                      <b-card-text
                        >Shipping Cost: {{ shippingCost }}</b-card-text
                      >
                      <b-card-text
                        >Total Price:
                        {{ book.price + shippingCost }}</b-card-text
                      >
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
            </div>
            <div class="row">
              <div class="col-12 d-flex justify-content-center mb-5">
                <b-button
                  style="background-color: #463e87"
                  @click.prevent="confirmPayment"
                >
                  <font-awesome-icon :icon="['fas', 'dot-circle']" />
                  &nbsp; Pay With OVO
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
import "animate.css";
import Swal from "sweetalert2";
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
    shipping() {
      const customerCityId = +localStorage.user_cityId;
      const sellerCityId = this.$store.state.book.User.CityId;
      this.$store
        .dispatch("shipping", {
          sellerCityId,
          customerCityId,
        })
        .then(({ data }) => {
          this.$store.commit("SUCCESS_GET_SHIPPING_DATA", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    confirmPayment() {
      Swal.fire({
        title: "Confirm Payment",
        text: `Total Price: 
        ${new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(
          this.$store.state.book.price + this.$store.state.shippingCost
        )}`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#463e87",
        cancelButtonColor: "#d33",
        confirmButtonText: "Pay Now!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const cost =
            this.$store.state.book.price + this.$store.state.shippingCost;
          this.$store
            .dispatch("confirmPayment", cost)
            .then(({ data }) => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Payment confirmed",
                showConfirmButton: false,
                timer: 1500,
              });

              const transactionId = data.id;

              return this.$store.dispatch("createTransaction", {
                cost,
                bookId: this.$route.params.bookId,
                transactionId,
              });
            })
            .then(({ data }) => {
              this.$router.push("/transaction");
            })
            .then((res) => {
              this.$store.dispatch(
                "deleteCartIfExist",
                this.$store.state.book.id
              );
            })
            .catch((err) => {
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Payment failed",
                showConfirmButton: false,
                timer: 1500,
              });
            });
        }
      });
    },
  },
  created() {
    this.showDetail();
    this.shipping();
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
    shippingCost() {
      return this.$store.state.shippingCost;
    },
    estimatedTime() {
      return this.$store.state.estimatedTime;
    },
    courier() {
      return this.$store.state.courier;
    },
  },
};
</script>

<style></style>
