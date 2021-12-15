<template>

  <div class="flex mx-auto shadow rounded p-3">      
    <div class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out background-card">
      <div class="absolute inset-0 bg-gray-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
        <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
          <div>

            <h3 class="text-center text-white text-2xl font-bold">
                  {{city_name}}, Indonesia
            </h3>
            <div class="text-center text-gray-300 text-xl font-medium">
                  15 December 2021*
            </div>
            <h3 class="text-center text-white text-3xl mt-2 font-bold">
                  {{tempearture}} &deg;
            </h3>
            <div class="flex mb-7">
              <div class="w-1/3 h-12"></div>
              <div class="text-center w-2/3  h-12 pt-5 pr-4 uppercase text-white text-xl font-bold ">
                  {{status}}
              </div>
              <div class="w-1/3 h-12 pl-5"><img width="500" height="600" :src="icon"/></div>
            </div>
        
          </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CardReusable",
  computed: {
    icon () {
      return this.$store.state.weatherToday.icon
    },
    city_name () {
      return this.$store.state.weatherToday.city
    },
    tempearture () {
      return this.$store.state.weatherToday.temp
    },
    status () {
      return this.$store.state.weatherToday.description
    }
  },
  created() {
    this.$store.dispatch("getIpClient")
  },
}
</script>

<style>

</style>