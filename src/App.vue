<template>
  <div>
    
    <navigation-bar></navigation-bar>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default ({
  name: "App",
  components: { 
    NavigationBar
  },
})
</script>

<style>
</style>