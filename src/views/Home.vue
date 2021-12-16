<template>
  <div class="home">
    <!-- Home Page -->
    <div class="container mx-auto my-10">
      <div class="flex-wrap">
        <label for="price" class="block text-sm font-medium text-gray-700"
          >Search recipes</label
        >
        <div class="mt-1 relative rounded-md">
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
          <center>
            <input
              type="text"
              name="search"
              id="search"
              class="
                border
                focus:ring-indigo-500 focus:border-indigo-500
                block
                pl-7
                pr-12
                sm:text-sm
                border-gray-300
                rounded-md
                justify-center justify-items-center
                mb-5
              "
              placeholder="e.g Pizza, Chicken..."
            />
          </center>
          <button class="rounded bg-orange-400 w-24">Search</button>
        </div>
        <!-- Recipe Card -->
        <div class="grid mt-5 gap-x-8 gap-y-4 grid-cols-3">
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
import RecipeCard from "../components/RecipeCard.vue";

export default {
  name: "Home",
  components: {
    RecipeCard,
  },
  methods: {},
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
