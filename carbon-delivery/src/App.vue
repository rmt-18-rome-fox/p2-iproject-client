<template>
  <div>
    <h1 class="text-[461111]">Hello World</h1>
    <div>
    <Map class="w-full" />
    </div>
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
