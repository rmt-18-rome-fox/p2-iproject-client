<template>
  <div class="bg-black py-4 justify-center px-4 rounded-xl shadow-md text-white">
    <div class="flex-1 mx-auto">
      <img @click.prevent="animeDetail(anime.mal_id)" :src="anime.images.jpg.image_url"
        class="w-48 h-48 rounded-2xl cursor-pointer">
      <p class="cursor-pointer hover:text-blue-600" @click.prevent="animeDetail(anime.mal_id)">{{ anime.title }}</p>
      <p>episodes: {{ anime.episodes }}</p>
      <p>rank: {{ anime.episodes }}</p>
      <p>score: {{ anime.score }}</p>
      <br>
      <button class="bg-yellow-400 text-black rounded-xl hover:bg-yellow-600 px-4 py-2"
        @click.prevent="addToWatchList(anime.mal_id, anime.title, anime.images.jpg.image_url)">WatchList</button>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: "Card",
  props: ["anime"],
  methods: {
    animeDetail(id) {
      this.$store.dispatch("animeDetail", id).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Fetching data failed!'
        })
      })
      this.$router.push(`/anime-detail/${id}`)
    },
    addToWatchList(JikanAnimeId, title, image_url) {
      if (!localStorage.getItem("access_token")) this.$router.push('/login')
      this.$store.dispatch("addToWatchList", { JikanAnimeId, title, image_url })
        .then((res) => {
          swal.fire({
            icon: 'success',
            text: `${title} Added to Your WatchList`
          })
          this.$router.push('/my-watch-lists')
        })
        .catch((err) => {
          if (err.response.data.message !== 'jwt malformed') {
            swal.fire({
              icon: 'error',
              text: err.response.data.message
            })
            this.$router.push('/my-watch-lists')
          } else if (!localStorage.getItem("access_token")) this.$router.push('/login')
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