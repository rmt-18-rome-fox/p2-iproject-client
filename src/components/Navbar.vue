<template>
  <div class="navbar navbar-expand-lg bg-light">
      <h4 style="margin: 10px;">Kanban Board</h4>
      <a style="margin: 10px" href="" @click.prevent="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout: function () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>