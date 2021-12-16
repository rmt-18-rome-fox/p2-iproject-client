<template>
  <div class="bg-black py-4 justify-center px-4 rounded-xl shadow-md text-white">
    <div class="flex-1 mx-auto">
      <img @click.prevent="animeDetail(anime.JikanAnimeId)" :src="anime.image_url" class="w-48 h-48 rounded-2xl">
      <p @click.prevent="animeDetail(anime.JikanAnimeId)">{{anime.title}}</p>
      <br>
      <p class="text-green-500 px-2 py-4">{{anime.priority}}</p>
      <br>
      <!-- <p>Status: <select name="status">Not Watched</select></p> -->
      <div id="button-area" class="flex-row">
      <button v-if="anime.status == 'Not Watched'" class="bg-blue-400 hover:bg-blue-600 py-2 px-1 rounded-md shadow-md" @click.prevent="updateStatus('Watched', anime.JikanAnimeId)">Not Watched</button>
      <button v-else class="bg-yellow-400 hover:bg-yellow-600 py-2 px-1 rounded-md shadow-md" @click.prevent="updateStatus('Not Watched', anime.JikanAnimeId)">Watched</button>
      <button v-if="anime.status == 'Watched'" class="bg-red-400 hover:bg-red-600 ml-4 py-2 px-1 rounded-md shadow-md" @click.prevent="deleteWatchList(anime.JikanAnimeId, anime.title)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: "WatchListCard",
  props: ["anime"],
  methods: {
    animeDetail(JikanAnimeId){
      // swal.fire(`${JikanAnimeId}`)
    }
  },
  methods: {
    updateStatus(status, JikanAnimeId){
      this.$store.dispatch("updateStatus", {status, JikanAnimeId})
      .then((res) => {
        this.$store.dispatch("fetchWatchLists")
      })
      .catch((err) => {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
      })
    },
    deleteWatchList(JikanAnimeId, title){
      this.$store.dispatch("deleteWatchList", JikanAnimeId)
      .then((res) => {
        swal.fire({
          icon: 'success',
          text: `Success Delete ${title} from WatchLists`
          })
        this.$store.dispatch("fetchWatchLists")
      })
    }
  }
}
</script>

<style>

</style>