<template>
  <div class="bg-gray-200 py-4 justify-center px-4 rounded-xl shadow-md">
    <div class="flex-1 mx-auto">
      <img @click.prevent="animeDetail(anime.mal_id)" :src="anime.image_url" class="w-48 h-48 rounded-full">
      <p @click.prevent="animeDetail(anime.mal_id)">{{anime.title}}</p>
      <br>
      <!-- <p>genre: {{anime.genres.map(el => el.name)}}</p> -->
      <p>genre: <span class="bg-green-500 py-2 px-2 mx-2" v-for="(genre, index) in anime.genres.map(el => el.name)" :key="index">{{genre}}</span></p>
      <br>
      <button class="bg-blue-400 px-4 py-2" @click.prevent="addToWatchList(anime.mal_id, anime.title)">WatchList</button>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: "Card",
  props: ["anime"],
  methods: {
    animeDetail(id){
      swal.fire(`${id}`)
      this.$store.dispatch("animeDetail", id)
      this.$router.push(`/anime-detail/${id}`)
    },
    addToWatchList(id, title){
      console.log({id});
      this.$store.dispatch("addToWatchList", id)
      .then((res) => {
        swal.fire(`${title} Added to Your WatchList`)
        this.$router.push('/my-watch-lists')
      })
      .catch((err) => {
        console.log({err});
        swal.fire('You have to login first to add this anime to your watchlist')
      })
    }
  }
}
</script>

<style>

</style>