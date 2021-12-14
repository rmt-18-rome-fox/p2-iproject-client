<template>
  <div id="Home">
    <div></div>
    <div class="w-5/6 containter mx-auto pt-4">
      <div class="grid grid-cols-4 gap-4 rounded-md">
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
