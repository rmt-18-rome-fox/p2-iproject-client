<template>
  <div>
  <div
    style="max-width: 20rem; height: 47vh; border-radius: 10px; overflow:hidden;"
    class="m-0 mb-2 border shadow rounded"
  >
    <div style="height: 20vh" class="mb-3">
        <img :src="architect.Profile.imageUrl" class="w-100 h-100"/>
    </div>
    <h1 class="h4">{{architect.Profile.name}}</h1>
    <div style="height: 8vh; overflow-y: scroll" class="mb-3 px-2">
       {{architect.Profile.description}}
    </div>

    <b-button href="#" variant="outline-dark" class="m-1" @click.prevent="toDetail(architect.id)">See Details</b-button>
    <b-button href="#" variant="outline-dark" class="m-1" @click.prevent="toPortofolio(architect.id)">See Portofolio</b-button>
    <b-button href="#" variant="outline-dark" class="m-1 w-75" @click.prevent="toBook(architect.id)">Book Consultation</b-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ArchitectCard',
  props: ['architect'],
  created () {
    this.$store.dispatch('fetchCustomerProfile')
  },
  methods: {
    toBook (payload) {
      this.$router.push({ path: `/customer/consultation/${payload}` })
    },
    toDetail (payload) {
      this.$router.push({ path: `/customer/architect/${payload}` })
    },
    toPortofolio (payload) {
      this.$router.push({ path: `/customer/architect/portofolios/${payload}` })
    }
  },
  computed: {
    profile () {
      return this.$store.state.customerProfile
    }
  }
}
</script>

<style>

</style>
