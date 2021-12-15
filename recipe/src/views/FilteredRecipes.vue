<template>
<div>
<div class="card"  v-for="recipe in recipesList" :key="recipe.id" style="width: 18rem;">
  <img width="100px" height="250px" :src="recipe.image" class="card-img-top" alt="recipe image">
  <div class="card-body">
    <span class="button">  <i class="fa fa-bookmark" aria-hidden="true" style="float:right" @click.prevent="bookmark(recipe)"></i></span>
    <h5 class="card-title">{{recipe.title}}</h5>
    <a  class="btn btn-primary" @click.prevent="$router.push({ path: `/recipe/${recipe.id}` })">Detail</a>
  </div>
</div>

</div>
</template>

<script>
export default {
name: "FilteredRecipes",
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
  }
    // async search () {
    //   this.$router.push ({path: '/', query: { ...this.searchForm}})
    //   this.$store.dispatch("searchRecipes",{...this.filterForm})

    // }
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
    const {query: {searchTerm}} = this.$route
    console.log(searchTerm, "di filterdeRecipies.............");
    this.$store.dispatch("fetchRecipes", searchTerm )
  }
}
</script>

<style>

</style>