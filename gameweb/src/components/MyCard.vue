<template>
  <div class="d-flex justify-content-center row">
        <div class="col-md-30" style="margin-top: 20px;">
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" :src="game.thumbnail"></div>
                <div class="col-md-6 mt-1">
                    <h4 style="font-size: 2rem">{{game.title}}</h4>
                    <div class="d-flex flex-row">
                    </div>
                    <div class="mt-1 mb-1 spec-1"><h5>Genre : {{game.genre}}</h5></div>
                    <h4 >{{game.short_description}}<br><br></h4>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                
                    <div class="d-flex flex-column mt-4"><button @click.prevent="detailGame(game.id)" class="btn btn-primary btn-sm" type="button">Details</button><button @click.prevent="addFav(game.id)" class="btn btn-outline-primary btn-sm mt-2" type="button">Add to Favorite</button></div>
                </div>
            </div>
      
        </div>
    </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
    name: 'MyCard',
    props :['game'],
    methods: {
        addFav(id){
            const payload = {
                GameId : id,
                UserId :  localStorage.id
            }
            this.$store.dispatch('addFavGame', payload)
            .then((data) => {
            data
            this.$router.push('/favoritegame')
          Swal.fire({
            title: "Hooray!",
            text: "Success Adding Favorite Game!",
            icon: "success",
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        })
      },
      detailGame(id){
           this.$store.dispatch('gameDetail', id)
            this.$router.push(`/games/${id}`)
      }
        
    }

}
</script>

<style>

</style>