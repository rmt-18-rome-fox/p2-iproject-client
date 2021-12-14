<template>
  <div>
    <Navbar></Navbar>
    <div class="bg-container">
      <div class="main-container-cart d-flex flex-column">
        <!-- CARD -->
        <CartCard v-for="item in orderDetail[0].CoffeePowders" :key="item.id" :item="item"></CartCard>
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
    this.$store.dispatch('fetchOrderDetail');
  },
  computed: {
    orderDetail: function () {
      return this.$store.state.orderDetail;
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
