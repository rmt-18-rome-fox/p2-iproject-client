<template>
<div>
    <div>
        <ul class="pagination">
          
          <button @click="confirmCheckOut" type="button" class="btn btn-outline-secondary">
            Check Out
          </button>
          
        </ul>
      </div>
  <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <CartCard 
                    class="col mb-5 card-sl"
                    v-for="cart in finalFetch"
                    :key="cart.id"
                    :cart="cart" >
                    </CartCard>
                </div>
        </div>
        
    </section>
    
</div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import CartCard from "../components/CartCard.vue"
import Swal from "sweetalert2";

export default {
    name : 'Cart',

    components :  {
            CartCard
    },

    methods : {
        ...mapActions(["fetchFavorite", "checkoutCart"]),

        confirmCheckOut() {
            Swal.fire({
            title: 'Are you sure to check out?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sure!'
            }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                // 'Deleted!',
                // 'Your file has been deleted.',
                // 'success'
                // )
                this.checkoutCart()

            }
        })
        }
    },

    computed : {
        ...mapState({
            finalFetch : "cart"
        })
    },

    created () {
        this.fetchFavorite()
    }
}
</script>

<style>

</style>