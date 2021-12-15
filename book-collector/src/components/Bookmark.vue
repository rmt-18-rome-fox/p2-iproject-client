<template>
<div>
  <div
    v-for="bookmark in bookmarks"
    :key="bookmark.id">
  <b-card
    :title="bookmark.title"
    :img-src="bookmark.imageUrl"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{bookmark.authors}}
    </b-card-text>
    <b-card-text>
      {{bookmark.subjects}}
    </b-card-text>

    <b-button href="#" variant="primary">Book Detail</b-button>
    <b-button href="#" variant="primary">Delete Bookmark</b-button>
  </b-card>
  </div>
</div>
</template>

<script>
export default {
  name: "BookmarkPage",
  methods:{
    fetchBookmarks(){
      this.$store.dispatch("fetchBookmarks")
      .then((resp)=>{
        this.$store.commit("setBookmarks", resp.data)
      })
      .catch(err =>{
        console.log(err);
      })
    }
  },
  computed:{
    bookmarks(){
      return this.$store.state.bookmarks
    }
  },
  created(){
    this.fetchBookmarks()
  }
}
</script>

<style>

</style>