<template>
  <div id="app">
    <div id="nav">
      <body class="d-flex flex-column min-vh-100">
      <navbar></navbar>
      <router-view/>
    <footer class="mt-auto">
    <HFooter></HFooter>
    </footer>
      </body>
    </div>
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'

export default ({
  components: {
    Navbar,
    HFooter
  }
})
</script>

<style>

</style>
