<template>
  <div style="width: 100vw; position: sticky; top: 0px; background-color: black" class="d-flex flex-row px-2 pt-2 mb-4">
      <div class="col-3 d-flex justify-content-start align-items-center">
        <a href = '' @click.prevent="toHome" class="h1">INI LOGO</a>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center hover-bg">
        <a href = '' @click.prevent="toHome" class="h3">Home</a>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center hover-bg">
        <a href = '' @click.prevent="toArchitects" class="h3">Architects</a>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center hover-bg">
        <a href = '' @click.prevent="toPortofolios" class="h3">Portofolios</a>
      </div>
      <div class="col-3 d-flex justify-content-end align-items-center">
        <a href = '' @click.prevent="toProfile" class="h3">INI PROFILE</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toHome () {
      this.$router.push('/customer')
    },
    toArchitects () {
      console.log('hehe')
      this.$router.push('/customer/architects')
    },
    toPortofolios () {
      this.$router.push('/customer/portofolios')
    },
    toProfile () {
      console.log('hehe')
    }
  }
}
</script>

<style>
    a :hover {
        cursor: pointer;
    }
</style>
