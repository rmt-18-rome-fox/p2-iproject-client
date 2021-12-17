<template>
  <div class="grid grid-cols-8">
    <!-- <div class="self-center border-black border-2 text-center h-32">boleh le sto sini</div> -->
    <div class="col-span-2 col-start-2 p-2 grid grid-rows-2">
      <div class="grid grid-rows-5 bg-[#53354A] rounded-xl py-4">
        <transition name="slide-fade">
        <div v-if="unfilled || weightInvalid" class="self-center p-1 text-sm w-2/3 justify-self-center text-center bg-red-300 rounded-lg text-gray-900">
            {{unfilled ? `Fill in the locations first :)` : `:)`}}
        </div>
        <div v-if="reqLimit" class="self-center p-1 text-sm w-2/3 justify-self-center text-center bg-red-300 rounded-lg text-gray-900">
            The server has reached a maximum request limit. Sorry for the inconvenience
        </div>
        </transition>
        <label class="row-start-2 text-white text-center"
          >Shipment weight (Kg)</label
        >
        <input
          v-model="weight"
          type="number"
          class="transition ease-in-out bg-[#903749] hover:bg-[#a6213c] rounded-full row-start-3 px-2 py-1 w-16 mx-auto outline-none border-2 border-white text-center text-white"
        />
        <div class="row-start-5 flex justify-center">
          <button
            @click="submit"
            v-if="weight !== 0 && !load"
            class="transition ease-in-out bg-[#903749] rounded-lg p-2 text-white text-center hover:bg-[#a6213c]"
          >
            Submit
          </button>
          <button
            @click="submit"
            v-if="load"
            class="animate-pulse transition ease-in-out bg-[#114646] rounded-lg p-2 text-white text-center"
            disabled
          >
            Please Wait
          </button>
        </div>
      </div>
      <!-- <div class="grid grid-rows-5 bg-[#461111] rounded-xl py-2 mt-4">

      </div> -->
      <transition name="slide-fade">
      <div v-if="success" class="flex-row">
        <div class=" p-2 bg-[#903749] rounded text-white mt-4">
          You contributed <b>{{ carbonEmitted }} Kg</b> of CO2 in this shipment !
        </div>
        <div v-if="!postedHistory" class="p-2 bg-[#903749] rounded text-white mt-4">
          Keep the record? <div class="inline underline"><a href="" @click.prevent="selectedYes" class="ml-4">Yes</a></div>
        </div>
        <div v-if="postedHistory" class="p-2 bg-[#903749] rounded text-white mt-4">
          Updated ! check your dashboard
        </div>
      </div>
      </transition>
      <!-- <transition name="slide-fade">
      <div v-if="success" class="flex h-full">
        
      </div>
      </transition> -->
    </div>
    <div
      id="map"
      class="col-start-4 col-span-4 border-2 border-black mt-2 ml-4"
    ></div>
    <!-- <div class="self-center border-black border-2 text-center h-32">boleh sto sini </div> -->
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
// import setter from "../../helpers/setter";

export default {
  name: "Map",
  data() {
    return {
      unfilled: false,
      weight: 0,
      success: false,
      load: false,
      carbonEmitted: 0,
      sayLogin: false,
      weightInvalid: false,
      postedHistory: false,
      reqLimit: false
    };
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    recentRequest () {
      return this.$store.state.lastShipment
    }
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
      if(!localStorage.getItem("originCoord") || !localStorage.getItem("destCoord")) {
        this.unfilled = true
      } else {
        this.unfilled = false
        this.success = false;
        this.load = true;
        this.sayLogin = false
        this.postedHistory = false
        this.reqLimit = false
  
        this.originCoord = localStorage.getItem("originCoord");
        this.destinationCoord = localStorage.getItem("destCoord");
  
        if (this.weight <= 0) {
          this.weightInvalid = true
          this.load = false
        } else {
          const weight = this.weight;
          const originQuery = [this.originCoord.split(",")];
          const destQuery = [this.destinationCoord.split(",")];
          const payload = {
            originQuery,
            destQuery,
            weight,
          };

          this.$store.dispatch("calculate", payload)
          .then((carbonEmitted) => {
            this.carbonEmitted = carbonEmitted;
            this.load = false;
            this.success = true;
            setTimeout(() => {
              this.sayLogin = true
            }, 1500);
          })
          .catch((err) => {
            console.log('message for server :', err)
            this.load = false
            this.reqLimit = true
          })
        }

      }
    },
    goToRegister () {
      console.log('otw register')
    },
    selectedYes() {
      if (!this.isLoggedIn) {
        this.$router.push('/register')
        this.$store.commit('SET_WANT_ACCOUNT', true)
      } else {
        const payload = this.recentRequest
        this.$store.dispatch('postHistory', payload)
        .then(() => {
          this.postedHistory = true
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
      }
    }
  },
  mounted() {
    localStorage.removeItem('originCoord')
    localStorage.removeItem('destCoord')
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

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
</style>
