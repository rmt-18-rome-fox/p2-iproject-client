<template>
  <div class="w-full py-12 px-16 flex flex-wrap justify-center">
    <div v-if="anime.title" class="w-5/6 containter text-white mx-auto pt-4 p-4 flex-col justify-center flex bg-black mt-10 rounded-3xl">
      <h1 class="text-center mt-10">{{anime.title}}</h1>
      <div class="flex justify-center">
        <img :src="anime.images.jpg.image_url" class="rounded-3xl mt-10 my-20" alt="" style="height: 500px;">
      </div>
      <div>
        <p>Synopsis</p>
        <p>{{anime.synopsis}}</p>
        <p>Synopsis Reader:<button @click.prevent="readSynopsis(anime.synopsis)" class="bg-blue-600 ml-4 hover:bg-blue-800 px-4 py-2 rounded-md">play</button></p>
      </div>
      <br>
      <div class="">
        <p class="py-1">title english: {{anime.title_english}}</p>
        <p class="py-1">title japanese: {{anime.title_japanese}}</p>
        <p class="py-1">genre: <span class="bg-green-500 py-2 px-2 mx-2 rounded-md" v-for="(genre, index) in anime.genres.map(el => el.name)" :key="index">{{genre}}</span></p>
        <p class="py-1">total episodes:  {{anime.episodes}}</p>
        <p class="py-1">duration:  {{anime.duration}}</p>
        <p class="py-1">rank:  {{anime.rank}}</p>
        <p class="py-1">favorites:  {{anime.favorites}}</p>
        <p class="py-1">popularity:  {{anime.popularity}}</p>
        <p class="py-1">favorites:  {{anime.favorites}}</p>
        <p class="py-1">premiered:  {{anime.premiered}}</p>
        <p class="py-1">rating:  {{anime.rating}}</p>
        <p class="py-1">score:  {{anime.score}}</p>
        <p class="py-1">scored by:  {{anime.scored_by}}</p>
      </div>
      <br>
      <div class="mb-10">
        <h1 class="text-center mb-5">Trailer</h1>
        <div class="flex justify-center">
          <iframe
          width="540"
          height="270"
          :src="anime.trailer.embed_url"
          title="MatteAnime"
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          ></iframe>
        </div>
      </div>
      <button class="bg-yellow-400 text-black rounded-xl mb-5  hover:bg-yellow-600 px-4 py-2" @click.prevent="addToWatchList(anime.mal_id, anime.title, anime.images.jpg.image_url)">WatchList</button>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: "AnimeDetail",
  created(){
    this.$store.dispatch("animeDetail", this.$route.params.malId)
  },
  computed: {
    anime(){
      return this.$store.state.choosenAnime
    }
  },
  methods: {
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
          this.$router.push('/my-watch-lists')
        } else if(!localStorage.getItem("access_token")) this.$router.push('/login')
        else swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
      })
    },
    readSynopsis(text){
      this.$store.dispatch("readSynopsis", text)
      .catch((err) => {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Playing synopsis failed',
        })
      })
    }
  }
}
</script>

<style>

</style>