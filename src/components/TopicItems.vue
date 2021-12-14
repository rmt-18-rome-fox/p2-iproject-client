<template>
    <div>
        <div class="post">
                <div class="post-top">
                    <div class="dp">
                        <img src="../assets/images/girl.jpg" alt="">
                    </div>
                    <div class="post-info">
                        <p class="name">Anuska Sharma</p>
                        <span class="time">12 hrs ago</span>
                    </div>
                    <i class="fas fa-ellipsis-h"></i>
                </div>

                <div class="post-content">
                    Roses are red <br>
                    Violets are blue <br>
                    I'm ugly & you are too😏
                </div>
                
                <div class="post-bottom">
                    <div class="action">
                        <i class="far fa-thumbs-up"></i>
                        <span>Like</span>
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

        <div class="post">
            <div class="post-top">
                <div class="dp">
                    <img src="../assets/images/dp.jpg" alt="">
                </div>
                <div class="post-info">
                    <p class="name">Ramesh GC</p>
                    <span class="time">2 days ago</span>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>

            <div class="post-content">
                Mountains are so cool
                <img src="../assets/images/mountains.jpg" />
            </div>
            
            <div class="post-bottom">
                <div class="action">
                    <i class="far fa-thumbs-up"></i>
                    <span>Like</span>
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
                Happy birthday dear
                <img src="../assets/images/girl_with_light.jpg" alt="Mountains">

                <Geolocation></Geolocation>
            </div>
            <div class="post-bottom">
                <div class="action">
                    <i class="far fa-thumbs-up"></i>
                    <span>Like</span>
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

        <div class="post">
            <div class="post-top">
                <div class="dp">
                    <img src="../assets/images/model.jpg" alt="">
                </div>
                <div class="post-info">
                    <p class="name">Pragati Adhikari</p>
                    <span class="time">5 mins ago</span>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="post-content">
                Hey, everybody! My new shoes are here
                <img src="../assets/images/shoes.jpg" alt="Shoes">
            </div>
            <div class="post-bottom">
                <div class="action">
                    <i class="far fa-thumbs-up"></i>
                    <span>Like</span>
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
    components: {
        Geolocation
    }
}
</script>

<style>

</style>