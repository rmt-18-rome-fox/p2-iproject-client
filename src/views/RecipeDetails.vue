<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        <strong>{{ recipeDetail.label }}</strong>
      </h3>
    </div>
    <center>
      <img
        :src="recipeDetail.image"
        alt="food recipes"
        class="mb-10 rounded w-1/3"
      />
    </center>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-orange-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm text-left ml-auto font-medium text-gray-500">
            Source :
          </dt>
          <dd
            class="mt-1 text-left text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            {{ recipeDetail.source }}
          </dd>
        </div>
        <div
          class="bg-orange-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm text-left ml-auto font-medium text-gray-500">
            Meal Type :
          </dt>
          <dd
            class="mt-1 text-left text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            {{ recipeDetail.mealType[0] }}
          </dd>
        </div>
        <div
          class="bg-orange-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm text-left ml-auto font-medium text-gray-500">
            Cuisine Type :
          </dt>
          <dd
            class="mt-1 text-left text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            {{ recipeDetail.cuisineType[0] }}
          </dd>
        </div>
        <div
          class="bg-orange-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm text-left ml-auto font-medium text-gray-500">
            Ingredients :
          </dt>
          <button @click="readIngredients(recipeDetail.ingredientLines)">Read Ingredients</button>
          <ul>
            <li
              v-for="(item, idx) in recipeDetail.ingredientLines"
              :key="idx"
              class="mt-1 text-left text-sm text-gray-900 sm:mt-0"
            >
              - {{ item }}
            </li>
          </ul>
        </div>

        <div
          class="bg-orange-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm text-left ml-auto font-medium text-gray-500">
            {{ recipeDetail.totalNutrients.ENERC_KCAL.label }} :
          </dt>
          <dd
            class="mt-1 text-left text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            {{ recipeDetail.totalNutrients.ENERC_KCAL.quantity }}
            {{ recipeDetail.totalNutrients.ENERC_KCAL.unit }}
          </dd>
        </div>
        <div
          class="bg-orange-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm text-left ml-auto font-medium text-gray-500">
            {{ recipeDetail.totalNutrients.FAT.label }} :
          </dt>
          <dd
            class="mt-1 text-left text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            {{ recipeDetail.totalNutrients.FAT.quantity }}
            {{ recipeDetail.totalNutrients.FAT.unit }}
          </dd>
        </div>
        <div
          class="bg-orange-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm text-left ml-auto font-medium text-gray-500">
            {{ recipeDetail.totalNutrients.CHOCDF.label }} :
          </dt>
          <dd
            class="mt-1 text-left text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            {{ recipeDetail.totalNutrients.CHOCDF.quantity }}
            {{ recipeDetail.totalNutrients.CHOCDF.unit }}
          </dd>
        </div>
        <div
          class="bg-orange-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm text-left ml-auto font-medium text-gray-500">
            Instructions and More Information :
          </dt>
          <dd
            class="mt-1 text-left text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            <a>{{ recipeDetail.shareAs }}</a>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeDetails",
  computed: {
    recipeDetail() {
      return this.$store.state.recipeDetail;
    },
  },
  methods: {
    readIngredients(text) {
      this.$store.dispatch("readIngredients", text)
    }
  },
  created() {
    this.$store.dispatch("getDetailsRecipe")
  }
};
</script>

<style>
</style>