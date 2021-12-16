<template>
  <div class="home">
    <!-- Home Page -->
    <div class="container mx-auto my-10">
      <div class="flex-wrap">
        <!-- Recipe Card -->
        <div class="grid mt-5 gap-x-8 gap-y-4 grid-cols-3">
          <favorite-card></favorite-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteCard from "../components/FavoriteCard.vue";

export default {
  name: "Home",
  components: {
    FavoriteCard,
  },
};
</script>
