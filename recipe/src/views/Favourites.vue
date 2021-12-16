<template>
<div class="main-container" style="display: flex; flex-direction: column ; ">
  <div class="recipes-container">
    <div class="card shadow-lg"  v-for="recipe in recipesList" :key="recipe.id" style="width: 18rem;">
      <img width="100px" height="250px" :src="recipe.recipes.image" class="card-img-top" alt="recipe image">
      <div class="card-body">
        <h5 class="card-title">{{recipe.recipes.title}}</h5>
        <p class="card-text">Cuisines: {{recipe.recipes.cuisines.join(", ")}}</p>
        <p class="card-text">Dish Type: {{recipe.recipes.dishTypes.join(", ")}}</p>
        <a class="btn btn-primary" @click.prevent="seeFavouriteDetail(recipe)">Detail</a>
        <a class="btn btn-danger" @click.prevent="deleteFavourite(recipe.id)">Delete</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "Favourites",
components: {
    // Recipe
  },
  methods: {
    fetchFavourite () {
      this.$store.dispatch("fetchFavourite")
    },
    deleteFavourite(id) {
      this.$store.dispatch("deleteFavourite", id)
    },
    seeFavouriteDetail(recipe) {
      // this.$store.commit ('SET_SELECTED_FAVOURITE', recipe)
      this.$router.push ({ path:`/favourites/${recipe.RecipeId}`})
    }
  },
  computed: {
    recipesList() {
      return this.$store.state.bookmarks
    },
  },
  created() {
    this.$store.dispatch("fetchFavourite")
  }
}
</script>

<style scoped>
.recipes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  margin: 20px;
  height: 500px;
  width: 200px;
  padding: 15px;
  border-radius: 20px;
}
.btn {
  margin-right: 10px;
}
</style>