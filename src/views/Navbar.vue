<template>
   <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="nav-link pr-3" to="/mainpage">Home</router-link>
        <router-link class="nav-link pr-3" to="/login">Sign In</router-link>
        <router-link class="nav-link pr-3" to="/addcar">Add Car</router-link>
        <a class="nav-link pr-3" href="#" v-on:click.prevent="logoutUser">Sign Out</a>
      </div>
    </nav>
</template>

<script>
export default {
  methods: {
    logoutUser () {
      this.$store.dispatch('logoutUser')
      this.$router.push({ name: 'Login' })
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
