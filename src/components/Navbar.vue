<template>
  <div class="navbar d-flex bg-light">
      <img src="../assets/Logo_Hacktiv8.jpg" alt="Hacktiv8_Logo" width=50 class="rounded">
      <h4 style="margin: 10px;">Hallita</h4>
      <a style="margin: 10px" href="" @click.prevent="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout: function () {
      this.$emit('logout')
    }
  }
}
</script>

<style>
</style>