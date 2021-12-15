<template>
  <div class="bg-gray-200 py-4 justify-center px-4 rounded-xl shadow-md">
    <div class="flex-1 mx-auto">
      <img @click.prevent="animeDetail(anime.mal_id)" :src="anime.image_url" class="w-48 h-48 rounded-full">
      <p @click.prevent="animeDetail(anime.mal_id)">{{anime.title}}</p>
      <br>
      <p class="text-green-500 px-2 py-4">{{anime.priority}}</p>
      <br>
      <!-- <p>Status: <select name="status">Not Watched</select></p> -->
      <button v-if="anime.status == 'active'" class="bg-blue-400">Not Watched</button>
      <button v-else class="bg-yellow-400">Watched</button>
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
      swal.fire(`${JikanAnimeId}`)
    }
  }
}
</script>

<style>

</style>