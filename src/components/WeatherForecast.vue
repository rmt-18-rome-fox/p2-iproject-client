<template>
  <div>

    <div class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out background-card">
      <div class="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
        <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
          <div>

            <h3 class="text-center text-white text-2xl font-bold">
                  {{this.$store.state.weatherForecast.cityName}}, {{this.$store.state.weatherForecast.countryCode}}
            </h3>
            <div class="text-center text-gray-300 text-xl font-medium">
                  {{weather.time}}
            </div>
            <h3 class="text-center text-white text-3xl mt-2 font-bold">
                  {{weather.temp}} &deg;
            </h3>
            <div class="flex mb-7">
              <div class="w-1/3 h-12"></div>
              <div class="text-center w-2/3  h-12 pt-5 pr-4 uppercase text-white text-xl font-bold ">
                  {{weather.description}}
              </div>
              <div class="w-1/3 h-12 pl-5"><img class="w-15 h-20" :src="weather.icon"/></div>
            </div>
        
          </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "WeatherForecast",
  props: ['weather'],
}
</script>

<style>

</style>