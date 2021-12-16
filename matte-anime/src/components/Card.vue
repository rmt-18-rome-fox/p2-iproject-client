<template>
  <div class="bg-black py-4 justify-center px-4 rounded-xl shadow-md text-white">
    <div class="flex-1 mx-auto">
      <img @click.prevent="animeDetail(anime.mal_id)" :src="anime.image_url" class="w-50 h-50 rounded-2xl cursor-pointer">
      <p class="cursor-pointer hover:text-blue-600 " @click.prevent="animeDetail(anime.mal_id)">{{anime.title}}</p>
      <p>episodes: {{anime.episodes}}</p>
      <p>rank: {{anime.episodes}}</p>
      <p>score: {{anime.score}}</p>
      <br>
      <!-- <p>genre: <span class="bg-green-500 py-2 px-2 mx-2" v-for="(genre, index) in anime.genres.map(el => el.name)" :key="index">{{genre}}</span></p> -->
      <button class="bg-yellow-400 text-black rounded-xl hover:bg-yellow-600 px-4 py-2" @click.prevent="addToWatchList(anime.mal_id, anime.title, anime.image_url)">WatchList</button>
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
      this.$store.dispatch("animeDetail", id)
      this.$router.push(`/anime-detail/${id}`)
    },
    addToWatchList(JikanAnimeId, title, image_url){
      if(!localStorage.getItem("access_token")) this.$router.push('/login')
      this.$store.dispatch("addToWatchList", {JikanAnimeId, title, image_url})
      .then((res) => {
        swal.fire({
          icon: 'success',
          text: `${title} Added to Your WatchList`
          })
        this.$router.push('/my-watch-lists')
      })
      .catch((err) => {
        if(err.response.data.message !== 'jwt malformed'){
          swal.fire({
            icon: 'error',
            text: err.response.data.message
          })
        } else if(!localStorage.getItem("access_token")) this.$router.push('/login')
        else swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
      })
    }
  }
}
</script>

<style>

</style>