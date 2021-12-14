<template>
  <div id="Home">
    <h1>Home</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  created(){
    this.$store.dispatch("fetchAnimes")
  },
  computed: {
    upComingAnimes(){
      return this.state.upComingAnimes
    }
  }
}
</script>
