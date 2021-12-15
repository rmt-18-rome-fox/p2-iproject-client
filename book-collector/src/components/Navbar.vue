<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
      <router-link class="navbar-brand" to="/books">Book-Collector</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/books">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/bookmarks">Bookmark</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
</style>