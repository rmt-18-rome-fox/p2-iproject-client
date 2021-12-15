<template>
  <div>
    <Navbar></Navbar>
    <div class="bg-container w-100">
      <div v-if="orderDetail.length == 0" class="warning bg-white w-100">
        <h1 class="text-center py-1">THERE IS NO ITEM ON YOURCART</h1>
        <h2 class="text-center py-1">Please add first on home menu</h2>
      </div>
      <div class="row mx-0 pr-3 pl-3">
        <!-- CARD -->
        <CartCard v-for="item in orderDetail" :key="item.id" :item="item"></CartCard>
      </div>
      <div>
        <!-- <button type="button" class="btn btn-success" @click.prevent="payMidtrans">Pay</button> -->
      </div>
    </div>

    <div v-if="orderDetail.length > 0" class="footer w-100 d-flex justify-content-center"><button type="button" class="btn btn-success" @click.prevent="payMidtrans">Click Here To Pay</button></div>
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
  /* background-color: #fcf1cf; */
  /* min-height: 100vh; */
  padding-top: 100px;

  /* width: 100%; */
}
.main-container-cart {
  background-color: #fcf1cf;
  color: #4b450e;
  /* min-height: 100vh; */
}
.btn-success {
  width: 30%;
  height: 50px;
  background-color: #dbb736;
  color: #4b450e;
  border-radius: 10px;
  border-width: 3px;
  border-color: #4b450e;
  font-size: 20px;
}

.btn-success:hover {
  width: 30%;
  height: 50px;
  background-color: #4b450e;
  color: #dbb736;
  font-weight: bold;
  border-radius: 10px;
  border-width: 3px;
  border-color: #dbb736;
  font-size: 20px;
}

.footer {
  height: 100px;
  margin-top: 30px;

  /* background-color: #4b450e; */
}
</style>
