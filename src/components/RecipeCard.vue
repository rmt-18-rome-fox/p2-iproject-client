<template>
  <div class="flex xl:w-full md:w-1/2 p-4">
    <div
      class="flex flex-col w-full justify-between bg-orange-100 p-6 rounded-lg"
    >
      <div>
        <img
          class="rounded w-auto mb-6 mx-auto"
          :src="item.recipe.image"
          alt="content"
        />
        <h3
          class="
            tracking-widest
            text-green-500 text-center text-xs
            font-medium
            title-font
          "
        >
          {{ item.recipe.dishType[0] }}
        </h3>
        <h2 class="text-lg text-gray-900 text-center font-medium title-font">
          {{ item.recipe.label }}
        </h2>
      </div>
      <button
        class="
          flex
          mx-auto
          mt-4
          text-white
          bg-green-500
          border-0
          py-2
          px-8
          focus:outline-none
          hover:bg-green-600
          rounded
          text-lg
        "
      >
        Add to Favorites
      </button>
      <button
        @click="goToRecipeDetail(item.recipe.label)"
        class="
          flex
          mx-auto
          mt-4
          text-white
          bg-green-500
          border-0
          py-2
          px-8
          focus:outline-none
          hover:bg-green-600
          rounded
          text-lg
        "
      >
        Get Recipes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["item"],
  methods: {
    goToRecipeDetail(payload) {
      this.$store.dispatch("getDetailsRecipe", payload).then(() => {
        this.$router.push(`/recipe-details/${payload}`)
      })
      console.log(payload, "<<<< ini index recipe")
    },
  },
};
</script>

<style>
</style>