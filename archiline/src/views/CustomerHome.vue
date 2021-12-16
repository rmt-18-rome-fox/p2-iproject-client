<template>
<div style="overflow: hidden; background-image: url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)">
  <navbar></navbar>
  <h1 style="font-family: Nexa; font-size: 4em">Welcome to ArchiLine</h1>
    <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333; width: 70vw; margin: auto;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="featuredArchitect in featuredArchitects" :key="featuredArchitect.id"
        :caption="featuredArchitect.Profile.name"
        :text="featuredArchitect.Profile.description"
        :img-src="featuredArchitect.Profile.imageUrl"
        style="height: 70vh"
      ></b-carousel-slide>
    </b-carousel>
  </div>
    <h1 style="font-family: Nexa; font-size: 3em" class="mt-3">Here are some of our Featured Architect</h1>
</div>

</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'CustomerHome',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('fetchFeaturedArchitect')
  },
  computed: {
    featuredArchitects () {
      return this.$store.state.featuredArchitect
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    toArchitect (payload) {
      this.$router.push({ path: `/customer/architect/${payload}` })
    }
  }
}
</script>

<style>

</style>
