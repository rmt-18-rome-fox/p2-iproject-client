<template>
  <div class="container mt-5">
    <div class="input-group mb-3" style="width: 450px">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search book title"
        aria-label="Search"
        aria-describedby="search-addon"
        v-model="search"/>
      <button
        type="button"
        class="btn btn-outline-primary"
        @click.prevent="doSearch"
      >search</button>
    </div>
    <nav>
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
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
  data(){
    return{
      search: "",
      currentPage: 0
    }
  },
  methods:{
    fetchBooks(){
      this.$store.dispatch("fetchBooks")
      .then((resp) =>{
        this.currentPage = resp.data.currentPage
        this.$store.commit("setBooks", resp.data.books)
      })
      .catch(err =>{
        console.log(err);
      })
    },
    doSearch(){
      
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

<style>
</style>
