<template>
  <div>
    <Navbar></Navbar>
    <div class="main-container-home d-flex justify-content-center">
      <div class="container2-home col-8">
        <Card v-for="coffeePowder in coffeePowders" :key="coffeePowder.id" :coffeePowder="coffeePowder" class="shadow"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Card from '../components/Card.vue';
export default {
  name: 'Home',
  components: {
    Navbar,
    Card,
  },
  created() {
    this.$store.dispatch('fetchCoffeePowders');
  },
  computed: {
    coffeePowders: function () {
      return this.$store.state.coffeePowders;
    },
  },
};
</script>

<style>
.main-container-home {
  background-color: #fcf1cf;
  color: #4b450e;
  /* height: 100vh; */
}

.main-container-home .btn-buy {
  background-color: #4b450e;
  border-color: #4b450e;
}

.main-container-home .btn-buy:hover {
  background-color: #dbb736;
  color: #4b450e;
  border-color: #dbb736;
  font-weight: bold;
}
</style>
