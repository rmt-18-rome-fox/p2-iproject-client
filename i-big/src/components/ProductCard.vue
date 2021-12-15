<template>
  <div class="col mb-5">
    <div class="card h-100">
      <router-link to="/"> <img class="card-img-top" :src="product.imgUrl" alt="..." /> </router-link>

      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder">{{ product.name }}</h5>

          <div class="d-flex justify-content-center small text-warning mb-2">
            <div class="bi-star-fill">{{ product.Category.name }}</div>
          </div>
          <!-- Product price-->
          Rp {{ product.price }}
        </div>
        <br>
        <!-- <div>
            <a  @click.prevent="addFavorite(movie.id)"
                class="card-action" href="#">
                <i class="fa fa-heart"></i></a>
        </div> -->
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a 
          @click.prevent="addFavorite(product.id)"
          class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: ["product"],

  methods: {
    //   ...mapActions["getDetail"],

      toDetail(id) {
          this.$router.push(`/movies/${id}`)
          this.$store.dispatch("getDetail", id)
      },

      addFavorite(id) {
          this.$store.dispatch("addFavorite", id)
      }

  },
};
</script>

<style>
</style>