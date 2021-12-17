<template>
  <div id="app">
    <Home></Home>
    <!-- <RotateSquare2
      v-if="loading"
      class="loading-spinner"
    ></RotateSquare2> -->
  </div>
</template>

<script>
import Home from '../src/views/Home.vue'
// import { RotateSquare2 } from 'vue-loading-spinner'

export default {
  name: 'App',
  components: {
    Home
    // RotateSquare2
  },
  computed: {
    loading: function () {
      return this.$store.state.loading
    }
  }
}
</script>

<style>

</style>
