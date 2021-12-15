<template>
<div class="container" style="display: flex; flex-direction: column ;">
  <div class= "recipe-container">
<div class="card shadow-lg"  v-for="recipe in recipesList" :key="recipe.id" style="width: 18rem;">
  <img width="100px" height="250px" :src="recipe.image" class="card-img-top" alt="recipe image">

  <div class="card-body">
    <p v-if="!checkAvailability(recipe)" style="color:red "> Premium Content</p>
    <span class="button" v-if="checkAvailability(recipe)">  <i class="fa fa-bookmark" aria-hidden="true" style="float:right" @click.prevent="bookmark(recipe)"></i></span>
    <h5 class="card-title">{{recipe.title}}</h5>
    <p class="card-text">Cuisines: {{recipe.cuisines.join(", ")}}</p>
    <p class="card-text">Dish Type: {{recipe.dishTypes.join(", ")}}</p>
    <p class="card-text">Score: {{recipe.spoonacularScore}}</p>

    <a  v-if="checkAvailability(recipe)" class="btn btn-primary" @click.prevent="$router.push({ path: `/recipe/${recipe.id}` })">Detail</a>
  </div>

  </div>
</div>

</div>
</template>

<script>
export default {
name: "Recipe",
components: {
  },
  data () {
    return {

    }
  },
  methods: {
    bookmark (recipe) {
      if(this.bookmarkList.find(el => el.RecipeId === recipe.id)){
        return swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: "Movie Already bookmarked"
        })
      }
      this.$store.dispatch("addToBookmark", recipe)
    },
    checkAvailability (recipe) {
      if(recipe.spoonacularScore > 80 && localStorage.status !== "Premium") {
        return false
      } 
      return true
    }

  },
  computed: {
    recipesList() {
      return this.$store.state.recipes
    },
    bookmarkList(){
    return this.$store.state.bookmarks
    }
  },
  created () {
    this.$store.dispatch("fetchRecipes")
  }
}
</script>

<style scoped>
.card {
  margin: 20px;
  height: 500px;
  width: 200px;
  padding: 15px;
  border-radius: 20px;
}
.container {
  display: flex; 
  flex-direction: column
}
.recipe-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>>

</style>