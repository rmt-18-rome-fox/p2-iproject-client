<template>
  <div class="home">
    <!-- Home Page -->
    <div class="container mx-auto my-10">
      <div class="flex-wrap">
        <!-- Recipe Card -->
        <div class="grid mt-5 gap-x-8 gap-y-4 grid-cols-3">
          <favorite-card v-for="item in favorites.favourites" :key="item.id" :item="item"></favorite-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteCard from "../components/FavoriteCard.vue";

export default {
  name: "Favorite",
  components: {
    FavoriteCard,
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
  created() {
    this.$store.dispatch("getFavourites");
  },
};
</script>
