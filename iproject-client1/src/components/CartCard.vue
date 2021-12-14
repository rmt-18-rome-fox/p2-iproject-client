<template>
  <div class="card w-50 ml-5 mt-4">
    <div class="card-header">
      <h3>{{ item.name }}</h3>
    </div>
    <div class="card-body d-flex flex-row">
      <div class="left-side col-8">
        <h5 class="card-title">Total Item: {{ item.OrderDetail.quantity }}</h5>
        <p class="card-text">Total Price: Rp. {{ calcPrice(item.OrderDetail.quantity, item.price) }}</p>
        <p class="card-text badge badge-warning">Status: {{ item.OrderDetail.orderStatus }}</p>
      </div>
      <div class="right-side col-4">
        <button type="button" class="btn btn-success">Pay</button>
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
  },
};
</script>

<style></style>
