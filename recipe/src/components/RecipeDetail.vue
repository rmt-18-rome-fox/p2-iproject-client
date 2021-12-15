<template>
<div>
<div class="card" style="width: 18rem;">
  <img width="100px" height="250px" :src="recipe.image" class="card-img-top" alt="recipe image">
  <div class="card-body">
    <h5 class="card-title">{{recipe.title}}</h5>
    <p class="card-text">Ready in minutes: {{recipe.readyInMinutes}}</p>
    <p class="card-text">Cuisines: {{recipe.cuisines[0]}}</p>
    <p class="card-text">Summary: {{recipe.summary}}</p>
    <p class="card-text">Cuisines: {{recipe.dishTypes[0]}}</p>
    <p class="card-text">Cuisines: {{recipe.ingredients}}</p>
    <p class="card-text">Cuisines: {{recipe.steps}}</p>
  </div>
</div>

</div>
</template>

<script>
export default {
name: "RecipeDetail",
  computed: {
    recipe () {
      console.log(this.$store.dispatch("fetchRecipes"), "masuk fetch");
      return this.$store.state.recipe
    },
  },
  created() {
    console.log("masuk created");
    this.$store.dispatch("fetchRecipeDetail")
  }
}
</script>

<style>

</style>