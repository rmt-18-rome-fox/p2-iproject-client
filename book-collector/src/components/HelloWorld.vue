<template>
  <div class="hello">
  <navbar></navbar>
    <div>
      <div
      class="d-flex bd-highlight"
      v-for="book in books"
      :key="book.id">
      <book-card :book="book"></book-card>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'
import Navbar from './Navbar.vue'
export default {
  components: { Navbar, BookCard },
  name: 'HelloWorld',
  methods:{
    fetchBooks(){
      this.$store.dispatch("fetchBooks")
      .then(resp =>{
        console.log(resp);
        this.$store.commit("setBooks", resp.data.results)
      })
      .catch(err =>{
        console.log(err);
      })
    }
  },
  computed:{
    books(){
      return this.$store.state.books
    }
  },
  created() {
    this.fetchBooks()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello{
  margin: 50px;
}
</style>
