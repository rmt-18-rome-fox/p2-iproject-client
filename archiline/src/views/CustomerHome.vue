<template>
<div style="overflow: hidden">
  <navbar></navbar>
  <h1>WELCOME TO ARCHILINE, HERE ARE SOME OF OUR FEATURED ARCHITECTS</h1>
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
    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
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
    }
  }
}
</script>

<style>

</style>
