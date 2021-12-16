<template>
  <div class="map-container">
    <MglMap id="map" :accessToken="accessToken" :mapStyle="mapStyle" :center="latlng" zoom="1.5">
      <MglMarker v-if="latlng" :coordinates="computedLngLat" color="red"/>
      <div v-if="!latlng">
        <MglMarker
          v-for="(country, index) in countries"
          :coordinates="[country.latlng[1], country.latlng[0]]"
          color="red"
          :key="index"
        />
      </div>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  name: "TestMap",
  components: {
    MglMap,
    MglMarker
  },
  props: {
    latlng: Array,
    countries: Array
  },
  data: () => ({
    accessToken:
      "pk.eyJ1IjoiZmFyaXM5NSIsImEiOiJja3c1cmo1aHYwMGZ6Mm9udnUxNzYzbndoIn0.EWhEWTXkcy75SAgleMKHWg",
    mapStyle: "mapbox://styles/carloswirama/ck5fhyako0wl81iob0awvig0m"
  }),
  computed: {
    computedLngLat() {
      const [lat, lng] = this.latlng;
      return [lng, lat];
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }

}
</script>

<style scoped>
.mapboxgl-map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
#map .mapboxgl-canvas {
  width: 100% !important;
  height: 100vh !important;
}
.map-container {
  position: relative;
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
}
</style>