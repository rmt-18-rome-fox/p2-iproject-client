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
      console.log(`A dblclick event has occurred at ${e.lngLat}`);
      const marker = new mapboxgl.Marker()
      marker.setLngLat([e.lngLat.lng, e.lngLat.lat])
      marker.addTo(map)
      this.$store.dispatch("setLocation", e.lngLat)
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
    // console.log(geocoder,"<<<<");
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map))

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");
    new mapboxgl.Marker()
    .setLngLat([this.onLat, this.onLan])
    .addTo(map);

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
  /* position: absolute; */
  height: 50rem;
  width: 100%;
  top:0;
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
top: 10px;
}
.mapboxgl-ctrl-geocoder {
min-width: 100%;
}
</style>