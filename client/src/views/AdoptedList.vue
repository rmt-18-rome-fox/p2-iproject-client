<template>
  <div class="col-12 col-lg-12">
        
        <div class="row px-0 pt-5">
            <div class="col-12">
                <h1 class="text-center">My Adopt List </h1>
            </div>

            <div class="col-12" v-if="!isEmpty">
                <div class="product-container">
                    <OrderProduct v-for="product in orderData.response" :key="product.id" :product="product.Product"></OrderProduct>
                </div>
                 <router-link class="btn btn-primary mx-1" to="/checkout">Start Adopt All Pet</router-link>
            </div>

            <div class="col-12" v-if="isEmpty">
                <div class="py-5">
                    <h1 class="pb-2">Your Adopt List is Still Empty</h1>
                    <router-link class="btn btn-primary mx-1" to="/">Get your first adopted pet</router-link>
                </div>
                <div>
                    <h1>Coming Soon</h1>
                </div>
                <div class="card-columns pt-5">
                    <div class="card shadow rounded" v-for="data in orderData.data" :key="data.id">
                        <img class="card-img-top" :src="data.image.url" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold"> {{ data.name }} </h5>
                            <p> {{ data.origin }} </p>
                            <p> {{ data.bred_for }} </p>
                            <p> {{ data.breed_group }} </p>
                            <p> {{ data.temperament }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import OrderProduct from "@/components/OrderProduct.vue"

export default {
  components: {
        OrderProduct
  },
  data(){
      return {
          isEmpty: false

      }
  },
   created(){
        this.fetchOrderData();
  },
  methods: {
        
        ...mapActions(["onOrder"]),

        async fetchOrderData(){

         try {

                const access_token = localStorage.access_token
                await this.onOrder(access_token);

                if(this.orderData.msg === `there is no orders yet`){
                    this.isEmpty = true
                }
             
         } catch (error) {
             console.log(error)
         }
            
        }

  },
   computed: {
    
    ...mapState(["orderData"]),
  
  },
}
</script>

<style>

</style>