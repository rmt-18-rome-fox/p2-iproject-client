<template>
<div>
  <navbar></navbar>
  <h1>ARCHITECTS</h1>
  <div class="d-flex flex-row flex-wrap pl-4" style="width: 99vw">
    <architect-card class="m-4" v-for="architect in architects" :key="architect.id" :architect="architect"></architect-card>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ArchitectCard from '../components/ArchitectsCard.vue'

export default {
  name: 'CustomerArchitects',
  components: {
    Navbar,
    ArchitectCard
  },
  created () {
    this.$store.dispatch('fetchArchitects')
  },
  computed: {
    architects () {
      return this.$store.state.architects
    }
  }
}
</script>

<style>

</style>
