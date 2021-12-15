<template>

<div class="card" style="width: 18rem;">
  <img width="100px" height="250px" :src="recipe.image" class="card-img-top" alt="recipe image">
  <div class="card-body">
    <h5 class="card-title">{{recipe.title}}</h5>
    <p class="card-text">Ready in minutes: {{recipe.readyInMinutes}}</p>
    <p class="card-text">Cuisines: {{recipe.cuisines.join(", ")}}</p>
    <!-- <pre class="card-text">Summary: {{recipe.summary}}</pre> -->
    <p class="card-text">Dish Type: {{recipe.dishTypes.join(", ")}}</p>
    <p class="card-text">Ingredients: {{recipe.ingredients.join(",\n")}}</p>
    <p class="card-text">Steps: {{recipe.steps.join("")}}</p>
  </div>
</div>


</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
name: "RecipeDetail",
  components: {
  },
  computed: {
    recipe () {
      return this.$store.state.recipe
    },
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch("fetchRecipeDetail",id)
  }
}
</script>

<style>

</style>