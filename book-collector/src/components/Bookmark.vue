<template>
<div class="container mt-5">
<b-row>
  <div
    v-for="bookmark in bookmarks"
    :key="bookmark.id"
    class="col-md-3">
  <b-card
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-img
      :src="bookmark.imageUrl" alt="Image"
      class="rounded-0" style="height: 350px; overflow:none; object-fit: cover">
    </b-card-img>

    <b-card-body :title="bookmark.title"></b-card-body>
    <b-card-text>
      {{bookmark.authors}}
    </b-card-text>
    <b-card-text>
      {{bookmark.subjects}}
    </b-card-text>

    <b-button variant="dark">
        <router-link :to="{path: `/books/${bookmark.bookId}`}">Book detail</router-link>
    </b-button><br><br>
    <b-button @click.prevent="delBook(bookmark.bookId)" variant="dark">Delete Bookmark</b-button>
  </b-card>
  </div>
</b-row>

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
    },
    delBook(id){
      this.$store.dispatch("deleteBookmark", id)
      .then((resp)=>{
        console.log(resp);
        this.fetchBookmarks()
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