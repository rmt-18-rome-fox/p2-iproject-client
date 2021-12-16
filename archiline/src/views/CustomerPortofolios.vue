<template>
<div style="overflow-x: hidden;background-image: url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)">
    <navbar></navbar>
  <h1 style="font-family: Nexa; font-size: 4em">Portofolio List</h1>
  <div class="d-flex flex-row flex-wrap pl-4" style="width: 99vw">
  <portofolio-card v-for="portofolio in portofolios" :key="portofolio.id" :portofolio='portofolio' class="m-4"></portofolio-card>
  </div>
</div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
import PortofolioCard from '../components/PortofoliosCard.vue'
export default {
  name: 'CustomerPortofolios',
  components: {
    Navbar,
    PortofolioCard
  },
  created () {
    this.$store.dispatch('fetchPortofolios')
  },
  computed: {
    portofolios () {
      return this.$store.state.portofolios
    }
  }
}
</script>

<style>

</style>
