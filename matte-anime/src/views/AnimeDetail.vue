<template>
  <div id="anime-detail">
    <h1>Anime Detail</h1>
  </div>
</template>

<script>
export default {
  name: "AnimeDetail",
  created(){
    this.$store.dispatch("animeDetail", this.$route.params.malId)
  },
  computed: {
    choosenAnime(){
      return this.$store.state.choosenAnime
    }
  }
}
</script>

<style>

</style>