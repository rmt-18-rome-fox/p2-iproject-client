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
      <a href="#" class="btn-buy btn btn-primary">Buy</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['coffeePowder'],
};
</script>

<style></style>
