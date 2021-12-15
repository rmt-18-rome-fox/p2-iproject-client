<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2 col-start-2 p-2">
      <div class="grid grid-rows-5 bg-[#461111] rounded-xl py-4">
        <label class="row-start-2 text-white text-center"
          >Shipment weight (Kg)</label
        >
        <input
          v-model="weight"
          type="number"
          class="hover:bg-[#751c1c] row-start-3 px-2 py-1 mx-auto outline-none bg-[#461111] border-b-2 border-white text-center text-white"
        />
        <div class="row-start-5 flex justify-center">
          <button
            @click="submit"
            v-if="weight !== 0 && originCoord && destinationCoord && !load"
            class="transition ease-in-out bg-[#114646] rounded-lg p-2 text-white text-center hover:bg-[#1b6e6e]"
          >
            Submit
          </button>
          <button
            @click="submit"
            v-if="load"
            class="animate-pulse transition ease-in-out bg-[#114646] rounded-lg p-2 text-white text-center hover:bg-[#1b6e6e]"
            disabled
          >
            Please Wait
          </button>
        </div>
      </div>
      <div v-if="success" class="flex-row">
        <div class="p-2 bg-green-500 rounded text-white mx-2">
          You contributed <b>{{ carbonEmitted }} Kg</b> of CO2 in this shipment
          !
        </div>
        <div class="text-center bg-slate-600 rounded text-white">
          Want to record this carbon footprint ?
          <div class="">
            <button
              @click="goToRegister"
              class="transition ease-in-out underline cursor-pointer hover:scale-110"
            >
              yes, make an account</button
            ><br />
            <!-- <button
              @click=""
              class="transition ease-in-out underline cursor-pointer hover:scale-110"
            >
              no
            </button> -->
          </div>
        </div>
      </div>
      <!-- <div v-if="load" class="">
        <div class="p-2 bg-slate-800 rounded text-white mt-2">Please wait while we calculate your impact on global catasthropy...</div>
      </div> -->
    </div>
    <div
      id="map"
      class="col-start-4 col-span-4 border-2 border-black mr-4"
    ></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "Map",
  data() {
    return {
      originCoord: localStorage.getItem("originCoord"),
      destinationCoord: localStorage.getItem("destCoord"),
      weight: 0,
      success: false,
      load: false,
      carbonEmitted: 0,
    };
  },
  methods: {
    loadMap() {
      navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
        enableHighAccuracy: true,
      });

      function successLocation(position) {
        setupMap([position.coords.longitude, position.coords.latitude]);
      }

      function errorLocation() {}

      function setupMap(center) {
        // center = [longitude, latitude];
        const access_token =
          "pk.eyJ1IjoiaWh6YW5hbnRhbWEiLCJhIjoiY2t4NW02Y3B3MDNhajJ2bzNtZzllcmhyYiJ9.keA6mU1OUSS8JqO9U9n8hg";
        mapboxgl.accessToken = access_token;

        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: center,
          zoom: 15,
        });

        setTimeout(() => {
          const MapboxDirections = window.MapboxDirections;
          const directions = new MapboxDirections({
            accessToken: access_token,
            unit: "metric",
            profile: "mapbox/driving",
            controls: {
              instructions: false,
              profileSwitcher: false,
            },
            placeholderOrigin: "Where did your shipping starts?",
            placeholderDestination: "Where do the courier drop your stuff?",
          });
          map.addControl(directions, "top-left");
          directions.on("origin", () => {
            let origin = directions.getOrigin().geometry.coordinates;
            localStorage.setItem("originCoord", origin);
          });
          directions.on("destination", () => {
            let dest = directions.getDestination().geometry.coordinates;
            localStorage.setItem("destCoord", dest);
          });
        }, 1000);
      }
    },
    submit() {
      this.success = false;
      this.load = true;

      this.originCoord = localStorage.getItem("originCoord");
      this.destinationCoord = localStorage.getItem("destCoord");

      const weight = this.weight;
      const originQuery = [this.originCoord.split(",")];
      const destQuery = [this.destinationCoord.split(",")];
      const payload = {
        originQuery,
        destQuery,
        weight,
      };

      this.$store.dispatch("calculate", payload).then((carbonEmitted) => {
        this.carbonEmitted = carbonEmitted;
        this.load = false;
        this.success = true;
      });
    },
  },
  watcher: {},
  mounted() {
    // localStorage.removeItem('originCoord')
    // localStorage.removeItem('destCoord')
    console.log("loading map . . .");
    this.success = false;
    this.loadMap();
  },
};
</script>

<style>
#map {
  height: 24rem;
  width: 100%;
}
</style>
