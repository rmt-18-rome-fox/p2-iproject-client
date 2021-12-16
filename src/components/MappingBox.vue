<template>
  
  <div id="mapContainer" class="basemap">

    
  </div>

</template>

<script>
// import mapbox components
import mapboxgl from "mapbox-gl";


export default {
  name: 'MappingBox',
  data() {
    return {
      accessToken: "pk.eyJ1IjoiZmFyaXM5NSIsImEiOiJja3c1cmo1aHYwMGZ6Mm9udnUxNzYzbndoIn0.EWhEWTXkcy75SAgleMKHWg",
    };
  },
  components: {
    
  },
  created() {

  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/faris95/ckx87oikk6hst14mxt5px67fl",
      center: [106.82706696700369, -6.175200397041986],
      zoom: 16,
      // maxBounds: [
      //   [103.6, 1.1704753],
      //   [104.1, 1.4754753],
      // ],
    });
    
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");
    new mapboxgl.Marker()
    .setLngLat([106.82706696700369, -6.175200397041986])
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
  /* position: relative; */
  height: 50rem;
  width: 100%;
  top:0;
}
</style>