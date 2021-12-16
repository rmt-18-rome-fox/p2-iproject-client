<template>
  <div class="container">
    <!-- product -->
    <div class="product-content product-wrap clearfix product-deatil">
      <div class="row">
        <div class="col-md-5 col-sm-12 col-xs-12">
          <div class="product-image">
            <div id="myCarousel-2" class="carousel slide">
              
              <div>
                <!-- Slide 1 -->
                <div class="item active">
                  <img
                    :src="getDetail.imgUrl"
                    style="width: 100%; max-width: 500px"
                    class="img-responsive"
                    alt=""
                  />
                </div>
               
               
              </div>
              <a
                class="left carousel-control"
                href="#myCarousel-2"
                data-slide="prev"
              >
                <span class="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a
                class="right carousel-control"
                href="#myCarousel-2"
                data-slide="next"
              >
                <span class="glyphicon glyphicon-chevron-right"></span>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
          <h2 class="name">
            {{getDetail.name}}
            <small>Distributed by <a href="javascript:void(0);">I-BIG</a></small>
            <i class="fa fa-star fa-2x text-primary"></i>
            <i class="fa fa-star fa-2x text-primary"></i>
            <i class="fa fa-star fa-2x text-primary"></i>
            <i class="fa fa-star fa-2x text-primary"></i>
            <i class="fa fa-star fa-2x text-muted"></i>
            <span class="fa fa-2x"><h5>(109) Votes</h5></span>
            <a href="javascript:void(0);">109 customer reviews</a>
          </h2>
          <hr />
          <h3 class="price-container">
            Rp. {{getDetail.price}},00.-
            <small>*includes tax</small>
          </h3>
          <div class="certified">
            <img :src="getQR.qrcode" style="width: 100px">
          </div>
          <hr />
          <div class="description description-tabs">
            <h6> {{getDetail.description}} </h6>
          </div>
          <hr />
          <div class="row">
            
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="btn-group pull-right">
                <button 
                @click.prevent="addFavorite(getDetail.id)"
                class="btn btn-white btn-default">
                  <i class="fa fa-star"></i> Add to wishlist
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end product -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Detail",

  methods: {
    ...mapActions({
      loadDetail : "getDetail"
    },
    {
      fetchFavorite : "fetchFavorite"
    }),

    postDetail () {
      this.$store.dispatch("getDetail", this.$route.params.id )
    },

    addFavorite(id) {
          this.$store.dispatch("addFavorite", id)
          this.fetchFavorite()
      }
  },

  computed: {
    // ...mapState["detailMovies"]
    getDetail() {
      return this.$store.state.detailProduct;
    },

    getQR() {
      return this.$store.state.dataQR;
    },
  },

  created() {
    this.postDetail()
    this.fetchFavorite()
    // this.loadDetail(this.$route.params.id);
  },


};
</script>

<style>
</style>