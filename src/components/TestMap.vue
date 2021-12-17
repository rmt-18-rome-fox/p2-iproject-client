<template>
  <MglMap
    :accessToken="accessToken"
    :mapStyle="mapStyle"
  >
    <MglGeocoderControl
 
      :accessToken="accessToken"
      :input.sync="defaultInput"
      @results="handleSearch"
    />
  </MglMap>
</template>
 
<script>
import {
  MglMap,
  // MglNavigationControl,
  // MglGeolocateControl
} from 'vue-mapbox'
 
import MglGeocoderControl from 'vue-mapbox-geocoder'
 
export default {
  name: 'TestMap',
 
  components: {
    MglMap,
    MglGeocoderControl
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiZmFyaXM5NSIsImEiOiJja3c1cmo1aHYwMGZ6Mm9udnUxNzYzbndoIn0.EWhEWTXkcy75SAgleMKHWg',
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      defaultInput: 'Bodhgaya'
    }
  },
  methods: {
    handleSearch(event) {
      console.log(event,"<<<<< EVENT")
    }
  }
}
</script>