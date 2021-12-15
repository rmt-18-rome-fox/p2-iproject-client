<template>
  <div id="watchlist" class="flex-col-auto justify-center">
    <h1>WatchList</h1>
    <div class="w-4/6 containter mx-auto pt-4">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 rounded-md justify-self-end">
        <watch-list-card v-for="anime in watchLists" :key="anime.id" :anime="anime"/>
      </div>
    </div>
  </div>
</template>

<script>
import WatchListCard from '../components/WatchListCard.vue'
export default {
  name: "WatchList",
  created(){
    this.$store.dispatch("fetchWatchLists")
  },
  computed: {
    watchLists(){
      return this.$store.state.watchLists
    }
  },
  components: {
    WatchListCard
  }
}
</script>

<style>

</style>