<template>
<div>
    <navbar></navbar>
  <h1>INI DI CUSTOMER ARCHITECT PORTOFOLIOS</h1>
  <div class="d-flex flex-row flex-wrap pl-4" style="width: 99vw">
  <portofolio-card v-for="portofolio in portofolios" :key="portofolio.id" :portofolio='portofolio' class="m-4"></portofolio-card>
  </div>
</div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
import PortofolioCard from '../components/PortofoliosCard.vue'
export default {
  name: 'CustomerArchitectPortofolios',
  components: {
    Navbar,
    PortofolioCard
  },
  created () {
    const payload = this.$route.params.architectId
    this.$store.dispatch('fetchArchitectPortofolios', payload)
  },
  computed: {
    portofolios () {
      return this.$store.state.architectPortofolio
    }
  }
}
</script>

<style>

</style>
