<template>

  <div class="row">
        <div class="col-12 px-0">
            <div class="row">
                <div class="col-12 px-0">
                  <div class="myLov-video-wrapper px-0 py-0">
                      <video autoplay poster="" class="position-relative" loop muted>
                          <source src="https://static.videezy.com/system/resources/previews/000/037/964/original/baby_dog13.mp4" type="video/mp4">
                      </video>
                  </div>
                </div>
                <div class="col-lg-8 col-12 video-wrapper">
                    <video autoplay playsinline muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
                            <source src="https://static.videezy.com/system/resources/previews/000/038/096/original/DogDog1.mp4" />
                            <source src="https://static.videezy.com/system/resources/previews/000/038/096/original/DogDog1.mp4" />
                        </video>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                            <defs>
                                <mask id="mask" x="0" y="0" width="100%" height="100%" >
                                    <rect x="0" y="0" width="100%" height="100%" />
                                    <text x="72"  y="50">my luv</text>
                                </mask>
                            </defs>
                            <rect x="0" y="0" width="100%" height="100%" />
                        </svg>
                </div>
            </div>
        </div>

        <div class="col-12 pr-5">
            <div class="product-container">
              <ProductCard v-for="product in productData.response" :key="product.id" :product="product"></ProductCard>
            </div>
        </div>
  </div>

</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductCard from "@/components/ProductCard.vue"

export default {
    components: {
        ProductCard
    },
    name: "StoreList",
    data(){
        return {


        }
    },
    created(){
        this.onFetchItem();
    },
    methods: {
        
        ...mapActions(["onFetchItem"]),

        async onPage(){
            try {

                await this.onFetchItem()
                
            } catch (error) {

                console.log(error)
            
            }
        },
    },
      computed: {
    
    ...mapState(["productData"]),
  
  },
}
</script>

<style>
@font-face {
  font-family: Biko;
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/biko-black.woff");
}

.flip-list-move {
  transition: transform 1s;
}

.myLov-video-wrapper video {
  width: 100vw;
}

.video-wrapper {
  width: 100%;
  /* margin: 0 auto; */
  position: relative;
  max-width: 600px;
}

.video-wrapper video {
  width: 100%;
  max-height: 200px;
}
svg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

.font-big,
svg text {
  font-family: Biko, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 32px;
}

svg rect {
  fill: #fff;
}

svg > rect {
  -webkit-mask: url(#mask);
  mask: url(#mask);
}

.search-box .user-box {
  position: relative;
}

.search-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  background: transparent;
}
.search-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  pointer-events: none;
  transition: .5s;
}

.search-box .user-box input:focus ~ label,
.search-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #000;
  font-size: 12px;
}

.search-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #000;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.search-box a:hover {
  background: #000;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #000,
              0 0 25px #000,
              0 0 50px #000,
              0 0 100px #000;
}

.search-box a span {
  position: absolute;
  display: block;
}

.search-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #000);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.search-boxa span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #000);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.search-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #000);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.search-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #000);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
    transition: 0.3s;
}

button.page-link.active {
    color: #fff;
    background-color: #29b3ed;
    transition: 0.3s;
}

.product-container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}


</style>