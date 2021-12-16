<template>
<!-- <div class="d-flex justify-content-center m-4"> -->
  <div class="card shadow-lg mx-auto pt-4 mt-4" style="width: 60rem; padding:2rem ">
    <img width="230px" height="400px" :src="recipe.image" class="card-img-top" alt="recipe image">
    <div class="card-body">
      <h3 class="card-title"><b>{{recipe.title}}</b></h3>
      <p class="card-text">Ready in minutes: {{recipe.readyInMinutes}}</p>
      <p class="card-text">Cuisines: {{recipe.cuisines.join(", ") || "-"}}</p>
      <!-- <pre class="card-text">Summary: {{recipe.summary}}</pre> -->
      <p class="card-text">Dish Type: {{recipe.dishTypes.join(", ")}}</p>
      <hr/>
        <span class="card-text subtitle">Ingredients:</span>
      <div class="d-flex justify-content-center"> 
        <ol style="display:table">
          <li style="text-align:left;  padding-left: 1rem" v-for="ingredient in recipe.ingredients" :key="ingredient">{{  ingredient}} </li>
        </ol>
      </div>
      <hr/>
        <span class="card-text subtitle">Steps:</span>
      <div class="d-flex justify-content-center"> 
        <ol style="display:table" >
          <li style="text-align:left; padding-left: 1rem" v-for="step in recipe.steps" :key="step"> {{step}} </li>
        </ol>
      </div>
    </div>
  </div>

<!-- </div> -->

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

<style scope>
.subtitle {
  color: #CD1818;
  font-weight: 10px;
  font-size: 40x;
}
</style>