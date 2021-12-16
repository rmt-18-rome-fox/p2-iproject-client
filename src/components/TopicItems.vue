<template>
    <div>
        
        <div class="post">
            <div class="post-top">
                <div class="dp">
                    <img src="../assets/images/boy.jpg" alt="">
                </div>
                <div class="post-info">
                    <p class="name">Priyank Saksena</p>
                    <span class="time">1 week ago</span>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post-content">
                {{ topic.post }}
                <img :src="topic.imageUrl" alt="Mountains">

                <Geolocation
                    :locLat="topic.locationLatitude"
                    :locLng="topic.locationLongitude"
                ></Geolocation>
            </div>
            <div class="post-bottom">
                <div class="action">
                    <i class="far fa-thumbs-up"></i>
                    <span>Like: {{ topic.like }}</span>
                </div>
                <div class="action">
                    <i class="far fa-comment"></i>
                    <span>Comment</span>
                </div>
                <div class="action">
                    <i class="fa fa-share"></i>
                    <span>Location</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Geolocation from './GeoLocation.vue'
export default {
    name: "TopicItems",
    props: ["topic"],
    components: {
        Geolocation
    }
}
</script>

<style>

</style>