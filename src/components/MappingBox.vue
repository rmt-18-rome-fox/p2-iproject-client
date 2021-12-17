<template>
  <div>


    <div id="geocoder" class="geocoder"
      
    ></div>

    <div id="mapContainer" class="basemap"></div>

  </div>
  
</template>

<script>
// import mapbox components
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default {
  name: 'MappingBox',
  data() {
    return {
      accessToken: "pk.eyJ1IjoiZmFyaXM5NSIsImEiOiJja3c1cmo1aHYwMGZ6Mm9udnUxNzYzbndoIn0.EWhEWTXkcy75SAgleMKHWg",
      input_city: '',
      swClick: false,
    };
  },
  components: {
  
  },
  created() {

  },
  watch: {
    onLat () {
      return this.$store.state.setLocation.lat
    },
    onLan () {
      return this.$store.state.setLocation.lng
    }
  },
  methods: {
    getLocation(){
      this.$store.dispatch("getLocation", this.input_city)
    }
  },

  mounted() {
    mapboxgl.accessToken = this.accessToken;
    
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [106.82706696700369, -6.175200397041986],
      zoom: 16,
    })

    map.on('click', (e) => {
      const marker = new mapboxgl.Marker({ "color": "#d50000" })
      marker.setLngLat([e.lngLat.lng, e.lngLat.lat])
      marker.addTo(map)
      this.$store.dispatch("setLocation", e.lngLat)
      this.$store.dispatch("getCurrentWeather", {
        lng: e.lngLat.lng,
        lat: e.lngLat.lat
      })
      // if(this.swClick === true) {
      //   console.log("<<< REMOVE");
      //   // marker.remove()
      // } else {
      //   console.log("<<< ADD");
      //   this.$store.dispatch("setLocation", e.lngLat)
      //   marker.setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map)
      //   this.swClick = true
      // }
    })
    
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });
    geocoder.on("result", (item) => {
      const newlngLat = {
        lng: item.result.geometry.coordinates[0],
        lat: item.result.geometry.coordinates[1]
      }
      this.$store.dispatch("setLocation", newlngLat)
      this.$store.dispatch("getCurrentWeather", {
        lng: newlngLat.lng,
        lat: newlngLat.lat
      })
    })
    
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map))

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });

    map.addControl(geolocate, "top-right")
  },
}
</script>

<style>
.basemap {
  position: absolute;
  height: 40rem;
  width: 50%;
  top:0;
  margin-left: 25%;
  margin-top: 160px;
}
.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
.geocoder {
  position: absolute;
  z-index: 1;
  width: 50%;
  left: 50%;
  margin-left: -25%;
  top: 100px;
}
.mapboxgl-ctrl-geocoder {
  min-width: 100%;
  height: 50px;
  border: 3px solid green;
}
.mapboxgl-ctrl-geocoder--input {
   text-align:center;
}
</style>