<template>
  <div class="bg-gray-200 py-4 justify-center px-4 rounded-xl shadow-md">
    <div class="flex-1 mx-auto">
      <img @click.prevent="animeDetail(anime.mal_id)" :src="anime.image_url" class="w-48 h-48 rounded-full">
      <p @click.prevent="animeDetail(anime.mal_id)">{{anime.title}}</p>
      <br>
      <p>genre: {{anime.genres.map(el => el.name)}}</p>
      <br>
      <button @click.prevent="addToWatchList(anime.mal_id, anime.title)">WatchList</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchListCard",
}
</script>

<style>

</style>