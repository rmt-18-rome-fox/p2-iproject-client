<template>
<div style="overflow-x: hidden; background-image: url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)">
    <navbar></navbar>
    <div class="shadow rounded w-50 mt-5" style=" margin: auto">
    <h1 style="font-family: Nexa; font-size: 4em">{{portofolio.title}}</h1>
    <img :src="portofolio.imageUrl"/>
    <h1 style="font-family: Nexa; font-size: 2em" class="mt-2 mb-0">Description</h1>
    <p style="font-family: Nexa; font-size: 1.2em" class="mb-1">{{portofolio.description}}</p>
    <h1 style="font-family: Nexa; font-size: 2em" class="mt-0">Architect</h1>
    <div class="d-flex justify-content-center" style="width: 50vw">
        <p class="mx-2" style="font-family: Nexa; font-size: 1.2em">Email: {{portofolio.User.email}}</p>
        <p class="mx-2" style="font-family: Nexa; font-size: 1.2em">Phone Number: {{portofolio.User.Profile.phoneNumber}}</p>
        <p class="mx-2" style="font-family: Nexa; font-size: 1.2em">Address: {{portofolio.User.Profile.address}}</p>
    </div>
    </div>
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
