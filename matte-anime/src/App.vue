<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <HFooter/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: "App",
  components: {
      Navbar,
      HFooter
    }
}
</script>
<style>
</style>
