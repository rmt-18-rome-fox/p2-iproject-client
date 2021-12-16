<template>
  <div class="flex flex-row">
    <navbar />
    <sidebar />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar
  }
}
</script>
