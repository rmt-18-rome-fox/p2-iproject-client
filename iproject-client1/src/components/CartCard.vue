<template>
  <div class="card ml-5 mt-2 mb-2">
    <div class="card-header">
      <h3>{{ item.CoffeePowder.name }}</h3>
    </div>
    <div class="card-body d-flex flex-row">
      <div class="left-side col-8">
        <h5 class="card-title">Total Item: {{ calcPrice(item.quantity, item.CoffeePowder.price) / item.CoffeePowder.price }}</h5>
        <p class="card-text">Total Price: Rp. {{ calcPrice(item.quantity, item.CoffeePowder.price) }}</p>
        <p class="card-text badge badge-warning">Status: {{ item.orderStatus }}</p>
        <br />
        <button type="button" class="btn btn-primary" @click.prevent="patchPlusOrderDetail(item.id)">Add 1 Item</button>
        <button type="button" class="btn btn-danger" @click.prevent="patchMinusOrderDetail(item.id)">Remove 1 Item</button>
      </div>
      <div class="right-side col-4">
        <!-- <button type="button" class="btn btn-success">Pay</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['item'],
  methods: {
    calcPrice(quantity, priceItem) {
      return quantity * priceItem;
    },
    patchPlusOrderDetail(orderDetailId) {
      console.log(orderDetailId);
      this.$store.dispatch('patchPlusOrderDetail', orderDetailId).then(() => {
        this.$store.dispatch('fetchOrderDetail');
      });
    },
    patchMinusOrderDetail(orderDetailId) {
      this.$store.dispatch('patchMinusOrderDetail', orderDetailId).then(() => {
        this.$store.dispatch('fetchOrderDetail');
      });
    },
  },
};
</script>

<style></style>
