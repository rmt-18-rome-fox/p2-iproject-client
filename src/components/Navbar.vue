<template>
  <div class="navbar navbar-expand-lg bg-light">
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