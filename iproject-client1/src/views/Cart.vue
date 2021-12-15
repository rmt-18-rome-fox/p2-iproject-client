<template>
  <div>
    <Navbar></Navbar>
    <div class="bg-container d-flex">
      <div class="main-container-cart d-flex flex-column">
        <!-- CARD -->
        <CartCard v-for="item in orderDetail" :key="item.id" :item="item"></CartCard>
      </div>
      <div>
        <button type="button" class="btn btn-success" @click.prevent="payMidtrans">Pay</button>
      </div>
    </div>
  </div>
  <!-- <img src="coffeePowder.imageUrl" alt="" srcset="" height="200" /> -->
  <!-- <a href="#" class="btn-buy btn btn-primary" v-if="roleUser == 'customer'">Buy</a>
            <a href="#" class="btn-buy btn btn-primary mr-3" v-if="roleUser == 'admin'" @click.prevent="toFormUpdate(coffeePowder.id)">Edit</a> -->
  <!-- <a href="#" class="btn-buy btn btn-primary" v-if="roleUser == 'admin'">Delete</a> -->
</template>

<script>
import CartCard from '../components/CartCard.vue';
import Navbar from '../components/Navbar.vue';
export default {
  name: 'Cart',
  components: {
    Navbar,
    CartCard,
  },
  created() {
    this.$store.dispatch('fetchOrderDetail').then(() => {
      this.$store.dispatch('checkPayment').then(() => {
        this.$store.dispatch('fetchOrderDetail');
      });
    });
  },
  computed: {
    orderDetail: function () {
      return this.$store.state.orderDetail;
    },
  },
  methods: {
    payMidtrans() {
      // window.snap.pay('d6630e05-b433-41c7-973f-8196bdd01058');
      this.$store.dispatch('payMidtrans').then(() => {
        // this.$router.push(`/formedit/${id}`);
      });
    },
  },
};
</script>

<style>
.bg-container {
  background-color: #fcf1cf;
  min-height: 100vh;
}
.main-container-cart {
  background-color: #fcf1cf;
  color: #4b450e;
  /* min-height: 100vh; */
}
.btn-success {
  width: 100%;
}
</style>
