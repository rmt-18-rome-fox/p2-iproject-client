<template>
  <div id="Home" class="flex-col-auto justify-center">
    <h1>Home</h1>
    <div class="w-4/6 containter mx-auto pt-4">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 rounded-md justify-self-end">
        <card v-for="(anime, index) in upComingAnimes" :key="index" :anime="anime"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  created(){
    this.$store.dispatch("fetchAnimes")
  },
  computed: {
    upComingAnimes(){
      let animes = this.$store.state.upComingAnimes
      animes = animes.filter(el => !el.r18)
      return animes
    }
  }
}
</script>
