<template>
  <div>
  <div class="d-flex justify-content-around m-4">
    <RecipeDetail> </RecipeDetail>
    <div class="d-flex flex-column ml-4 notes-container pt-2 mt-4">
      <h3 class="text-light"><b>Notes</b></h3>
      <form  @submit.prevent="inputNotes">
        <textarea v-model="recipe.notes"  placeholder="notes..."> </textarea>
        <button class="btn btn-warning"> Submit</button>
      </form>
    </div>

</div>
  </div>
</template>

<script>
import RecipeDetail from "./RecipeDetail.vue"
export default {
  name: "FavouriteDetail",
  data() {
    return {
      notes: this.recipe.notes
    }
  },
  components : {
    RecipeDetail,
  },
  methods : {
    async inputNotes () {
      this.$store.dispatch("inputNotes", this.recipe)
    }
  },
  computed : {
    recipe () {
      return this.$store.state.selectedFavourite
    }
  },
  created() {
    const recipeId = this.$route.params.id
    this.$store.dispatch ("fetchFavouriteByRecipeId", recipeId)
  }
}
</script>

<style scoped>
textarea {
    /* border: none;
    border-collapse:collapse;
    border-right: #000 1px solid;
    border-left: #000 1px solid; */
    /* resize: none; */
    border-radius: 5px;
    /* border: 1px dotted red; */
    /* background-color: #B1D0E0; */
    margin: 0;
    padding: 12px;
    width: 300px;
}

.notes-container {
  background: #6998AB;
}

</style>