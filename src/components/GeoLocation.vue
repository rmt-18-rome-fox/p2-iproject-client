<template>
        <div class="conatainer">
            <div style=" margin: 0 auto; display: flex; align-items: center; justify-content: space-between">
                <div>
                    <h3>Your coordinates:</h3>
                    <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
                </div>
                <div>
                    <h3>Map coordinates:</h3>
                    <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>
                </div>
            </div>
            <GmapMap
                :center="myCoordinates"
                :zoom="zoom"
                style="width:510px; height:360px; margin: 32px auto;"
                ref="mapRef"
                @dragend="handleDrag"
            ></GmapMap>
            
            <div class="post-weather">
                <img
                :src="`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`"
                class="card-img-top"
                alt="..."
            />
                <div class="card-body">
                    <h5 class="card-title">{{weather.city_name}}</h5>
                    <p class="card-text">
                        {{weather.weather.description}}
                    </p>
                </div>
            </div>


        </div>

</template>
<script>
    export default {
        name: "Geolocation",
        props: ["locLat", "locLng"],
        data() {
            return {
                map: null,
                // myCoordinates: {
                //     lat: 0,
                //     lng: 0
                // },
                myCoordinates: {
                    lat: 0,
                    lng: 0
                },
                zoom: 7
            }
        },
        created() {
            // does the user have a saved center? use it instead of the default
            if(localStorage.center) {
                console.log(`kena throw`)
                this.myCoordinates = JSON.parse(localStorage.center);
            } else {
                // get user's coordinates from browser request
                console.log(`maasuk sni weather`)
                this.$store.dispatch("getWeather")
                this.$getLocation({})
                    .then(coordinates => {
                        this.myCoordinates = coordinates;
                        localStorage.setItem("lat", coordinates.lat)
                        localStorage.setItem("lng", coordinates.lng)
                    })
                    .catch(error => alert(error));
            }

            // does the user have a saved zoom? use it instead of the default
            if(localStorage.zoom) {
                this.zoom = parseInt(localStorage.zoom);
            }
        },
        mounted() {
            // add the map to a data object
            this.$refs.mapRef.$mapPromise.then(map => this.map = map);
        },
        methods: {
            handleDrag() {
                // get center and zoom level, store in localstorage
                let center = {
                    lat: this.map.getCenter().lat(),
                    lng: this.map.getCenter().lng()
                };
                let zoom = this.map.getZoom();

                localStorage.center = JSON.stringify(center);
                localStorage.zoom = zoom;
            }
        },
        computed: {
            mapCoordinates() {
                if(!this.map) {
                    return {
                        lat: 0,
                        lng: 0
                    };
                }

                return {
                    lat: this.map.getCenter().lat().toFixed(4),
                    lng: this.map.getCenter().lng().toFixed(4)
                }
            },
            weather () {
                console.log(this.$store.state.weather, "weather onGeoLocation");
                return this.$store.state.weather
            }
        }
    }
</script>