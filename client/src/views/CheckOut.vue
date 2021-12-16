<template>
    <div class="col-12 col-lg-12">
        
        <div class="py-5">
            <h1>Checkout</h1>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="row">

                    <div class="col-7 pl-5">
                        <div class="row">
                            <b-card v-for="product in checkoutData.product" :key="product.id"
                                :title="product.name"
                                :img-src="product.imgUrl"
                                img-alt="Image"
                                img-top
                                style="max-width: 20rem;"
                                tag="div"
                                class="mb-2 mx-2 px-0 col-3"
                            >
                            <b-card-text>
                                {{ product.summary }}
                            </b-card-text>

                            <b-card-text>
                                {{ product.price }}
                            </b-card-text>

                             
                            </b-card>
                        </div>
                    </div>
                    <div class="col-5 pr-5">
                        <div class="row">
                            <div class="col-6"><h1 class="text-left">Order Id</h1></div>
                            <div class="col-6"><h2 class="text-right">{{ checkoutData.order_id }}</h2></div>
                        </div>
                        <div class="row">
                            <div class="col-6"><h1 class="text-left">Total Payment</h1></div>
                            <div class="col-6"><h2 class="text-right">{{ checkoutData.totalPrice }}</h2></div>
                        </div>
                        <div class="row pt-5">
                            <div class="col text-left"><button @click.prevent="onCharge()">Pay</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data(){
      return {
          isEmpty: false
      }
  },
   created(){
        this.checkOutData();
  },
  methods: {
        
        ...mapActions(["onCheckout", "onChargeMidTrans"]),

        async checkOutData(){

            try {

                    const access_token = localStorage.access_token
                    await this.onCheckout(access_token);

                    if(this.orderData.msg === `there is no orders yet`){
                        this.isEmpty = true
                    }
                
            } catch (error) {
                console.log(error)
            }    
        },
        async onCharge() {
            try {

                await this.onChargeMidTrans()

                
                
            } catch (error) {
                console.log(error)
            }
        }

  },
   computed: {
    
    ...mapState(["checkoutData"]),
  
  },
}
</script>

<style>

.images-leaning {
  box-sizing: border-box;
  width: 100%;
  min-width: 100vw;
  margin: 10em auto 0;
  min-height: 500px;
  position: relative;
  background-repeat: no-repeat;
  background-image: linear-gradient(352deg, transparent 45.2%, #bbb 45.5%, #bbb 45.6%, #ccc 45.8%, #eee 60%), linear-gradient(30deg, #ccc, #eee 90%);
  background-size: 100% 32.4em;
  background-position: 50% 100%;
}
.images-leaning > div {
  width: 250px;
  position: absolute;
  left: 50%;
  bottom: 7.8em;
  z-index: 0;
  display: flex;
  justify-content: flex-end;
}
.images-leaning > div:before {
  content: '';
  width: 60%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 7%;
  z-index: 1;
  background-repeat: no-repeat;
  background-image: linear-gradient(120deg, transparent 42%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.35) 65%), linear-gradient(20deg, transparent 38%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.23) 55%, rgba(0,0,0,0.13) 75%), radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.15) 3%, transparent 40%);
  transform: rotate(-8deg);
}
.images-leaning > div:after {
  content: '';
  width: 60%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background-image: linear-gradient(45deg, rgba(0,0,0,0.3), transparent 70%), linear-gradient(45deg, rgba(255,255,255,0) 60%, rgba(255,255,255,0.3) 80%);
  transform: perspective(20em) rotateY(1deg) rotateZ(-5deg) skewY(-2deg) skewX(-1deg) scaleX(var(--resize));
}
.images-leaning > div > img {
  width: 60%;
  height: 100%;
  display: block;
  position: relative;
  z-index: 2;
  border-left: 0.2em solid;
  -o-border-image: linear-gradient(105deg, transparent 0.5%, #aaa 0.7%) 1;
     border-image: linear-gradient(105deg, transparent 0.5%, #aaa 0.7%) 1;
  box-shadow: 0.1em 0.2em 0 -0.1em #666;
  filter: saturate(90%);
  transform: perspective(20em) rotateY(1deg) rotateZ(-5deg) skewY(-2deg) skewX(-1deg) scaleX(var(--resize));
}
.images-leaning > div:nth-of-type(4) {
  --resize: 0.99;
  margin-left: -40.4em;
}
.images-leaning > div:nth-of-type(4):before {
  background-size: 100% 85%, 100% 15%, 100% 10%;
  background-position: 0.1em 0, 0 100%, -3em 83%;
}
.images-leaning > div:nth-of-type(3) {
  --resize: 0.96;
  margin-left: -15.3em;
  transform: scaleY(0.98) translate(-8em, -2.1em);
}
.images-leaning > div:nth-of-type(3):before {
  background-size: 100% 84%, 100% 16%, 100% 10%;
  background-position: 0.4em 0, 0 100%, -3em 81%;
}
.images-leaning > div:nth-of-type(2) {
  --resize: 0.925;
  margin-left: 10em;
  transform: scaleY(0.965) translate(-17em, -4.2em);
}
.images-leaning > div:nth-of-type(2):before {
  background-size: 100% 83%, 100% 17%, 100% 10%;
  background-position: 0.6em 0, 0.1em 100%, -3em 81%;
}
.images-leaning > div:nth-of-type(1) {
  --resize: 0.895;
  margin-left: 35.2em;
  transform: scaleY(0.94) translate(-26.6em, -6.2em);
}
.images-leaning > div:nth-of-type(1):before {
  background-size: 100% 82%, 100% 18%, 100% 10%;
  background-position: 0.8em 0, 0.1em 100%, -3em 80%;
}

.images-basic {
  width: 600px;
  padding: 5em 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.images-basic > div {
  width: 130px;
}
.images-basic img {
  width: 100%;
  display: block;
}

.wrapper-images-empty,
.wrapper-images-empty {
  min-height: 100vh;
  min-width: 100vw;
}
.wrapper-images-empty {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  font-size: 10px;
}
</style>