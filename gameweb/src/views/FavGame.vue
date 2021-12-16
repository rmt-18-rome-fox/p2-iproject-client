<template>
  <div>
      <div class="container ">
        <div class="row pb-5 mb-4">
        <FavCard
        v-for="game in games"
        :key="game.id"
        :game="game"
        ></FavCard>
      </div>
  </div>
   <HFooter></HFooter>
  </div>
</template>

<script>
import FavCard from '../components/FavCard.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
 name: "FavoriteGame",
 components : {
     FavCard,
     HFooter
 },
 methods: {
    showBookmark() {
      this.$store.dispatch("fetchFavorites");
    },
  },
  created() {
    this.showBookmark();
  },
  computed: {
    games() {
      return this.$store.state.favGames;
    },
  },
}
</script>
 
<style>

</style>