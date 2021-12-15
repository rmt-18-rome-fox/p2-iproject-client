<template>
  <div class="home">
    <!-- Navbar -->
    <navbar></navbar>
    <!-- Home Page -->
    <div class="container mx-auto my-10">
      <div class="flex-wrap">
        <label for="price" class="block text-sm font-medium text-gray-700"
          >Search recipes</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
          <div
            class="
              absolute
              inset-y-0
              left-0
              pl-3
              flex
              items-center
              pointer-events-none
            "
          ></div>
          <input
            type="text"
            name="price"
            id="price"
            class="
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-90
              pl-7
              pr-12
              sm:text-sm
              border-gray-300
              rounded-md
              justify-items-center
            "
            placeholder="e.g Pizza, Chicken..."
          />
          <button class="border-1">Search</button>
        </div>
        <!-- Recipe Card -->
        <div class="grid gap-x-8 gap-y-4 grid-cols-3">
          <recipe-card
            v-for="(item, idx) in recipes"
            :key="idx"
            :item="item"
          ></recipe-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import RecipeCard from "../components/RecipeCard.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    RecipeCard,
  },
  created() {
    this.$store.dispatch("getRandomRecipes");
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>

