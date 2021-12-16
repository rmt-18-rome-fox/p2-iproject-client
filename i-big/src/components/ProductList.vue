<template>
  <!-- Section-->
  <section class="py-5">

    <div class="d-flex justify-content-center h-100">
          <div class="searchbar">
            <input
              v-model="titleSearch"
              class="search_input"
              type="text"
              name=""
              placeholder="Search..."
            />
            <a @click.prevent="filterProduct" href="#" class="search_icon"
              ><i class="fas fa-search"></i
            ></a>
          </div>
        </div>  

    <div class="container px-4 px-lg-5 mt-5">
      <div
        class="
          row
          gx-4 gx-lg-5
          row-cols-2 row-cols-md-3 row-cols-xl-4
          justify-content-center
        "
      >
        <ProductCard
        class="col mb-5 card-sl"
        v-for="product in finalFetch.Products"
        :key="product.id"
        :product="product"
        >
        </ProductCard>
        
      </div>
      <div>
        <ul class="pagination">
          <li class="page-item">
            <a
              @click.prevent="prevPage"
              href="#"
              class="page-link"
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link"> {{ page }} </a>
          </li>
          <li class="page-item">
            <a
              @click.prevent="nextPage"
              href="#"
              class="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue"
import { mapActions, mapState } from "vuex";
// import Swal from "sweetalert2";

export default {
    name: "ProductList",
    components : {
        ProductCard
    },

    data() {
        return {
        titleSearch: "",
        page: 1,
        };
    },

    computed: {
        ...mapState({
        finalFetch: "product",
        }),
    },

     created() {
        this.fetchProduct();
    },

    methods: {
        ...mapActions(["fetchProduct", "filtered", "changePage"]),

        filterProduct() {
        const filtered = {
            titleSearch: this.titleSearch,
            page: this.page,
        };

        console.log('kena klik');

        this.filtered(filtered);
        },

        nextPage() {
        let currentPage = (this.page += 1);
        if (currentPage < 1) {
            currentPage = 1;
            this.page = 1;
            Swal.fire("Sorry, you hit page 0");
        }

        const filtered = {
            titleSearch: this.titleSearch,
            page: currentPage,
        };

        this.filtered(filtered);
        },

         prevPage() {
        let currentPage = (this.page -= 1);
        if (currentPage < 1) {
            currentPage = 1;
            this.page = 1;
            Swal.fire("Sorry, you hit page 0");
        }

        const filtered = {
            titleSearch: this.titleSearch,
            page: currentPage,
        };
        this.filtered(filtered);
        },
    }


};
</script>

<style>
</style>