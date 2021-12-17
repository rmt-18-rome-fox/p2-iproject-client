<template>
   <div class="canvas">
    <!-- canvas single -->
      <Canvas :canvas-id="'canvas-one'" ref="childCanvas"/>
  </div>
</template>

<script>
import Canvas from '../components/Canvas.vue'

export default {
  name: 'Container',
  components: {
    Canvas
  },
  methods: {
  }
}
</script>

<style>

</style>
