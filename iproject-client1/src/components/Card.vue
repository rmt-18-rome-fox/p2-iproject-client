<template>
  <div class="card w-75 m-5">
    <div class="card-header">Item {{ coffeePowder.id }}</div>
    <div class="card-body">
      <h4 class="card-title">{{ coffeePowder.name }}</h4>
      <h5 class="card-title">Jenis: {{ coffeePowder.type }}</h5>
      <img :src="coffeePowder.imageUrl" alt="" srcset="" height="200" />
      <br />
      <br />
      <p class="card-text">{{ coffeePowder.description }}</p>
      <p>Stock: {{ coffeePowder.stock }}</p>
      <p>Price: {{ coffeePowder.price }}</p>
      <p>Grind Size: {{ coffeePowder.grindSize }}</p>
      <p>Roast Level: {{ coffeePowder.roastLevel }}</p>
      <a href="#" class="btn-buy btn btn-primary" v-if="roleUser == 'customer'" @click.prevent="addNewCart(coffeePowder.id)">Add to YourCart</a>
      <a href="#" class="btn-buy btn btn-primary mr-3" v-if="roleUser == 'admin'" @click.prevent="toFormUpdate(coffeePowder.id)">Edit</a>
      <!-- <a href="#" class="btn-buy btn btn-primary" v-if="roleUser == 'admin'">Delete</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['coffeePowder'],
  data() {
    return {
      roleUser: '',
    };
  },
  created() {
    this.roleUser = localStorage.roleUser;
  },
  methods: {
    toFormUpdate(id) {
      this.$store.dispatch('toFormUpdate', id).then(() => {
        this.$router.push(`/formedit/${id}`);
      });
    },
    addNewCart(id) {
      this.$store.dispatch('addNewCart', id).then(() => {
        this.$store.dispatch('fetchOrderDetail').then(() => {
          this.$router.push(`/cart`);
        });
        console.log('KELAR ');
      });
    },
  },
};
</script>

<style></style>
