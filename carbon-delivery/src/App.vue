<template>
  <div>
      <Map />
    <router-view />
  </div>
</template>

<script>
import Map from './components/Map.vue'
export default {
  components: {
    Map 
  },
  
}
</script>

<style>
/* #map {
  height: 100vh;
  width: 100vw
} */
</style>
