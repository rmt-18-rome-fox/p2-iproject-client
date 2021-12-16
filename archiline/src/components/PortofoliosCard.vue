<template>
<div>
  <div
    style="max-width: 20rem; height: 48vh; border-radius: 10px; overflow:hidden;"
    class="m-0 mb-2 border shadow rounded"
  >
    <div style="height: 20vh" class="mb-2">
        <img :src="portofolio.imageUrl" class="w-100 h-100"/>
    </div>
    <h1 class="h4 mb-0">{{portofolio.title}}</h1>
    <b-badge variant="primary" v-for="tag in portofolio.Tags" :key="tag.id" class="mt-0 mb-2 mx-1">{{tag.name}}</b-badge>
    <div style="height: 8vh; overflow-y: scroll" class="mb-2 px-2">
       {{portofolio.description}}
    </div>
    <b-button href="#" variant="outline-dark" class="m-1" @click.prevent="toArchitectDetail(portofolio.User.id)">See Architect</b-button>
    <b-button href="#" variant="outline-dark" class="m-1" @click.prevent="toPortofolioDetail(portofolio.id)">See Details</b-button>
    <b-button href="#" variant="outline-dark" class="m-1 w-75" @click.prevent="toBook(portofolio.User.id)">Book Consultation</b-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'PortofoliosCard',
  props: ['portofolio'],
  methods: {
    toBook (payload) {
      this.$router.push({ path: `/customer/consultation/${payload}` })
    },
    toArchitectDetail (payload) {
      this.$router.push({ path: `/customer/architect/${payload}` })
    },
    toPortofolioDetail (payload) {
      this.$router.push({ path: `/customer/portofolio/${payload}` })
    }
  }
}
</script>

<style>

</style>
