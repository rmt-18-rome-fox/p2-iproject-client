<template>
<div>
    <navbar></navbar>
    <h1>INI DI CUSTOMER ARCHITECT DETAIL</h1>
    <p>{{portofolio.title}}</p>
    <p>{{portofolio.description}}</p>
    <img :src="portofolio.imageUrl"/>
    <h1>Architect</h1>
    <p>{{portofolio.User.Profile.name}}</p>
    <p>{{portofolio.User.email}}</p>
    <p>{{portofolio.User.Profile.phoneNumber}}</p>
    <p>{{portofolio.User.Profile.address}}</p>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'CustomerPortofolioDetail',
  components: {
    Navbar
  },
  created () {
    const payload = this.$route.params.portofolioId
    this.$store.dispatch('fetchPortofolioDetail', payload)
  },
  computed: {
    portofolio () {
      return this.$store.state.portofolioDetail
    }
  }
}
</script>

<style>

</style>
