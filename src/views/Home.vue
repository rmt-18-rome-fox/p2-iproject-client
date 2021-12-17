<template>
  <div class="home">
    <div class="w-full">

      <div role="main" class="w-full flex flex-col h-screen  justify-center mt-5">
          <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 rounded-3xl m-auto mb-10">
          
           
            <!-- SEARCH -->
            <div class="flex mx-auto shadow rounded p-3 pl-10">
              <input 
                @click="clearText"
                v-model="input_city"
                type="text" class="flex-grow bg-gray-100 rounded-full py-3 px-6 text-center text-xl font-medium text-gray-500" autocomplete="off" placeholder="Search Location of City" 
              />

              <button
                @click="getCurrentWeather"
                class="px-5"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
              </button>
              
            </div><br>

    
            <!-- WEATHER TODAY -->
            <!-- DISINI CARD -->
            <card-reusable></card-reusable>  

          </div>
      </div>

    </div>

    <!-- MAP -->

    <!-- WEATHER FORECAST -->
    <main 
      v-if="this.$store.state.pageToogle === false"
    class="relative z-0 flex-1 pb-8 px-6 bg-white">
      <div class="grid pb-10  mt-4 ">

       <div 

        class="topnav rounded-t-lg font-bold" id="myTopnav">
        <a class="active">Home</a>
        <a 
          @click="getForecast"
          href="#page1">Forecast</a>
        <a href="#page2">History</a>
        <a href="#page3">Data</a>
        <button 
          href="javascript:void(0);" 
          class="icon"   
          @click="menuList">
          <i class="fa fa-bars"></i>
        </button>
      </div>                             

        <div class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-1">

          <weather-forecast
            v-for="weather in dataForecast" :key="weather.id" :weather="weather"
          ></weather-forecast>

        </div>
      </div>
      
    </main>

    <mapping-box
      v-if="this.$store.state.pageToogle === true"
    ></mapping-box>

    <div class="grid">
    <HFooter
    v-if="this.$store.state.pageToogle === false"></HFooter>
    </div>
  </div>
</template>

<script>
import CardReusable from '../components/reusable_components/CardReusable.vue';
import HFooter from 'vue-hacktiv8-footer'
import WeatherForecast from '../components/WeatherForecast.vue';
import MappingBox from '../components/MappingBox.vue';


export default {
  name: "Home",
  components: {
    CardReusable,
    HFooter,
    WeatherForecast,
    MappingBox,

  },
  data() {
    return {
      input_city: '',
    }
  },
  computed: {
    dataForecast() {
      return this.$store.state.weatherForecast.data
    }
  },
  methods:{
    menuList() {
      let x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
    getForecast() {
      this.$store.dispatch("getForecastWeather")
    },
    getCurrentWeather() {
      this.$store.dispatch("getCurrentWeather", {city: this.input_city})
    },
    clearText() {
      this.input_city=''
    }
  },
  created() {
    
  }
  
}
</script>

<style>
</style>