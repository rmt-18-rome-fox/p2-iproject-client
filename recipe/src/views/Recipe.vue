<template>
<div>
<div class="card"  v-for="recipe in recipesList" :key="recipe.id" style="width: 18rem;">
  <img width="100px" height="250px" :src="recipe.image" class="card-img-top" alt="recipe image">

  <div class="card-body">
    <span class="button">  <i class="fa fa-bookmark" aria-hidden="true" style="float:right" @click.prevent="bookmark(recipe)"></i></span>
    <h5 class="card-title">{{recipe.title}}</h5>
    <p class="card-text">Cuisines: {{recipe.cuisines.join(",")}}</p>
    <p class="card-text">Dish Type: {{recipe.dishTypes.join(",")}}</p>
    <a  class="btn btn-primary" @click.prevent="$router.push({ path: `/recipe/${recipe.id}` })">Detail</a>
  </div>
</div>

</div>
</template>

<script>
export default {
name: "Recipe",
components: {
    // Recipe
  },
  data () {
    return {
      searchForm : {
        searchTerm : ""
      }
    }
  },
  methods: {
    fetchRecipes () {
      console.log(this.$store.dispatch("fetchRecipes"), "masuk fetch");
      this.$store.dispatch("fetchRecipes")
    },
    bookmark (recipe) {
    if(this.bookmarkList.find(el => el.RecipeId === recipe.id)){
      return swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: "Movie Already bookmarked"
      })
    }
    this.$store.dispatch("addToBookmark", movie)
  }
    // async search () {
    //   console.log(this.searchForm);
    //   this.$router.push ({path: '/', query: { ...this.searchForm}})
    //   this.$store.dispatch("searchRecipes",{...this.filterForm})

    // }
  },
  computed: {
    recipesList() {
      console.log(this.$store.state.recipes,"masuk computed");
      return this.$store.state.recipes
    }
  },
  created() {
    console.log("masuk created");
    this.$store.dispatch("fetchRecipes")
  }
}
</script>

<style>

</style>