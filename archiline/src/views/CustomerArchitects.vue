<template>
<div style="min-height: 100vh; background-image: url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)">
  <navbar></navbar>
  <h1 style="font-family: Nexa; font-size: 4em">Architects List</h1>
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
