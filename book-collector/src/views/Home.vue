<template>
  <div class="hello">
    <b-row>
      <div
      class="col-md-3"
      v-for="book in books"
      :key="book.id">
      <book-card :book="book"></book-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import BookCard from '../components/BookCard.vue'
export default {
  components: { BookCard },
  name: 'HomePage',
  methods:{
    fetchBooks(){
      this.$store.dispatch("fetchBooks")
      .then((resp) =>{
        this.$store.commit("setBooks", resp.data)
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
</style>
