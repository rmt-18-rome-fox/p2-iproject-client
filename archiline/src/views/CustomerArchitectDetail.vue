<template>
<div>
    <navbar></navbar>
    <h1>INI DI CUSTOMER ARCHITECT DETAIL</h1>
    <p>{{architect.Profile.name}}</p>
    <p>{{architect.Profile.description}}</p>
    <h1>Contacts</h1>
    <p>{{architect.Profile.email}}</p>
    <p>{{architect.Profile.phoneNumber}}</p>
    <p>{{architect.Profile.address}}</p>
    <img :src="architect.Profile.imageUrl"/>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'CustomerArchitectsDetail',
  components: {
    Navbar
  },
  created () {
    const payload = this.$route.params.architectId
    this.$store.dispatch('fetchBookForm', payload)
  },
  computed: {
    architect () {
      return this.$store.state.bookForm
    }
  }
}
</script>

<style>

</style>
