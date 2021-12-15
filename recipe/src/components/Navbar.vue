<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <router-link  class="nav-link text-black"  to="/" tabindex="-1" aria-disabled="true" > Home </router-link>
        <router-link  class="nav-link text-black" v-if="isLoggedIn === false" to="/register"  tabindex="-1" aria-disabled="true" > Register </router-link>
        <router-link  class="nav-link text-black" v-if="isLoggedIn === true" to="/favourites" tabindex="-1" aria-disabled="true"> Favourite </router-link>
        <router-link  class="nav-link text-black" v-if="isLoggedIn === false" to="/login"  tabindex="-1" aria-disabled="true" > Login </router-link>
        <a class="nav-link text-black"  tabindex="-1" v-if="isLoggedIn === true" aria-disabled="true"  @click="logout">Logout</a>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
name: "Navbar",
data () {
  return {
      isLoggedIn: !!localStorage.access_token
    }
},
  methods : {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>