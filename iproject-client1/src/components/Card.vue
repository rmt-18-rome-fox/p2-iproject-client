<template>
  <div class="card w-100 my-5">
    <div class="card-header">
      Item {{ coffeePowder.id }}
      <h5 class="card-title">Jenis: {{ coffeePowder.type }}</h5>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-6">
          <div class="image-wrapper">
            <img :src="coffeePowder.imageUrl" alt="" srcset="" />
          </div>
          <h4 class="card-title text-center pt-3">{{ coffeePowder.name }}</h4>
        </div>
        <div class="col-6">
          <div class="row pt-5">
            <div class="col-6">
              <!-- <p><span class="font-weight-bold">Stock:</span></p> -->
            </div>
            <div class="col-6">
              <!-- <p>{{ coffeePowder.stock }}</p> -->
            </div>
            <div class="col-6">
              <p><span class="font-weight-bold">Price:</span></p>
            </div>
            <div class="col-6">
              <p>Rp. {{ coffeePowder.price }}</p>
            </div>
            <div class="col-6">
              <p><span class="font-weight-bold">Grind Size:</span></p>
            </div>
            <div class="col-6">
              <p>{{ coffeePowder.grindSize }}</p>
            </div>
            <div class="col-6">
              <p><span class="font-weight-bold">Roast Level:</span></p>
            </div>
            <div class="col-6">
              <p>{{ coffeePowder.roastLevel }}</p>
            </div>
            <div class="col-12 pt-5">
              <a href="#" class="btn-buy btn btn-primary" v-if="roleUser == 'customer'" @click.prevent="addNewCart(coffeePowder.id)">Add to YourCart</a>
              <a href="#" class="btn-buy btn btn-primary mr-3" v-if="roleUser == 'admin'" @click.prevent="toFormUpdate(coffeePowder.id)">Edit</a>
            </div>
          </div>
          <!-- <p></p>
          <p><span class="font-weight-bold">Price:</span> {{ coffeePowder.price }}</p>
          <p><span class="font-weight-bold">Grind Size:</span> {{ coffeePowder.grindSize }}</p>
          <p><span class="font-weight-bold">Roast Level:</span> {{ coffeePowder.roastLevel }}</p> -->
        </div>
      </div>

      <p class="card-text">{{ coffeePowder.description }}</p>

      <!-- <a href="#" class="btn-buy btn btn-primary" v-if="roleUser == 'admin'">Delete</a> -->
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
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
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success Add Item To YourCart!',
            showConfirmButton: false,
            timer: 2000,
          });
          this.$router.push(`/cart`);
        });
        console.log('KELAR ');
      });
    },
  },
};
</script>

<style>
.image-wrapper img {
  width: 100%;
  height: auto;
  /* max-width: 100px; */
}
</style>
