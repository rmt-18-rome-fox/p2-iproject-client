<template>
  <div>
  <div
    style="max-width: 20rem; height: 47vh; border-radius: 10px; overflow:hidden;"
    class="m-0 mb-2 border"
  >
    <div style="height: 20vh" class="mb-3">
        <img :src="architect.Profile.imageUrl" class="w-100 h-100"/>
    </div>
    <h1 class="h4">{{architect.Profile.name}}</h1>
    <div style="height: 8vh; overflow-y: scroll" class="mb-3 px-2">
       {{architect.Profile.description}}
    </div>

    <b-button href="#" variant="primary" class="m-1">See Details</b-button>
    <b-button href="#" variant="primary" class="m-1">See Portofolio</b-button>
    <b-button href="#" variant="primary" class="m-1 w-75" @click.prevent="toBook(architect.id)">Book Consultation</b-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ArchitectCard',
  props: ['architect'],
  methods: {
    toBook (payload) {
      this.$router.push({ path: `/customer/consultation/${payload}` })
    }
  }
}
</script>

<style>

</style>
