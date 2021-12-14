<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Product Name : {{ productDetail.name }}</h5>
        <img
          :src="productDetail.imgUrl"
          class="card-img-top"
          alt="Product Image"
        />
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Category : {{ productDetail.Category.name }}
        </li>
        <li class="list-group-item">Price : {{ productDetail.price }} IDR</li>
        <li class="list-group-item">
          Description : {{ productDetail.description }}
        </li>
        <li class="list-group-item">
          Post by : {{ productDetail.User.email }}
        </li>
      </ul>
      
        <div class="card" style="width: 18rem">
          <p>Scan QR Code for detail Image</p>
          <img class="card-img-top" :src="qrCode.qrcode" alt="QR Code" />
          <div class="card-body"></div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    name: 'TaskDetail',
    data(){
        return{
            id: null,
            category: []
        }
    },
    created(){
        this.id = this.$route.params.id
        this.$store.dispatch("getProductDetail", this.id)
    },
    computed: {
        productDetail(){
            return this.$store.state.productDetail
        },
    }
}
</script>

<style>

</style>