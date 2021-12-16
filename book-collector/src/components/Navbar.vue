<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
      <router-link class="navbar-brand" to="/books">Book-Collector</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/books"
            v-if="token">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/bookmarks"
            v-if="token">Bookmark</router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/detectlang"
            v-if="token">Try detect language</router-link>
        </li>
        <li class="nav-item">
          <a @click.prevent="doLogout"
            class="nav-link"
            v-if="token"
            style="cursor: pointer">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name:"Navbar",
  methods:{
    doLogout(){
      localStorage.clear()
      this.$store.commit("setToken", false)
      this.$router.push("/login")
      this.checkToken()
    }
  },
  computed:{
    token(){
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
</style>