<template>
  <div id="map" class="w-96 h-96"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "Map",
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

        const MapboxDirections = window.MapboxDirections;
        const directions = new MapboxDirections({
          accessToken: access_token,
          unit: "metric",
          profile: 'mapbox/driving',
          controls: {
            profileSwitcher: false
          },
          placeholderOrigin: 'Where does your shipping starts?',
          placeholderDestination: 'Where do the courier drop your stuff?',

        });
        map.addControl(directions, "top-left");
        directions.on('origin', () => {
            const originCoord = directions.getOrigin().geometry.coordinates
            console.log("ini origin coord :", originCoord)
        })
        directions.on('destination', () => {
            const destinationCoord = directions.getDestination().geometry.coordinates
            console.log("ini dest COord :", destinationCoord)
        })
      }
    },
  },
  mounted() {
      console.log('loading map . . .')
    this.loadMap();
  },
};
</script>

<style></style>
