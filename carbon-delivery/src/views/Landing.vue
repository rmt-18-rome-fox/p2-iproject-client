<template>
  <div class="grid grid-rows-2 justify-center ml-4">
    <div class="text-6xl text-[#E84545]">
      How much does your shipping activity impact the planet ?
      <div class="inline text-3xl">this site can calculate your carbon footprint based on the distance and weight of your package</div>
    </div>
    <div class="flex justify-center">
      <router-link v-if="show" to="/home" class="transition ease-in-out mt-4 text-4xl text-[#E84545] underline hover:scale-110">find out yours</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      show: false,
    }
  },
  created() {
    setTimeout(() => {
      this.show = true
    }, 2750);
  }
}
</script>

<style>

</style>