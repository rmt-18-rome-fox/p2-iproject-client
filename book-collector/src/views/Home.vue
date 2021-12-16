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
    <nav v-if="!isSearch">
      <ul class="pagination">
        <li class="page-item"><button @click.prevent="getPage(0)" class="page-link">Previous</button></li>
        <li class="page-item"
          v-for="index in pagination"
          :key="index">
          <button @click.prevent="doPagination(index)" class="page-link">{{index}}</button>
        </li>
        <li class="page-item"><button @click.prevent="getPage(1)" class="page-link">Next</button></li>
      </ul>
    </nav>
    <h1 v-if="isSearch">Book result</h1>
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
      currentPage: 0,
      pagination: 0,
      isSearch: false
    }
  },
  methods:{
    fetchBooks(){
      this.$store.dispatch("fetchBooks")
      .then((resp) =>{
        this.isSearch = false
        this.currentPage = resp.data.currentPage
        this.pagination = this.currentPage + 4
        this.$store.commit("setBooks", resp.data.books)
      })
      .catch(err =>{
        console.log(err);
      })
    },
    doSearch(){
      this.$store.dispatch("doSearchBook", this.search)
      .then((resp) =>{
        this.isSearch = true
        this.currentPage = resp.data.currentPage
        this.pagination = this.currentPage + 4
        this.$store.commit("setBooks", resp.data.books)
      })
      .catch(err =>{
        console.log(err);
      })
    },
    doPagination(page){
      this.$store.dispatch("getPagination", page)
      .then((resp) =>{
        this.isSearch = false
        this.currentPage = resp.data.currentPage
        this.pagination = +this.currentPage + 4
        this.$store.commit("setBooks", resp.data.books)
      })
      .catch(err =>{
        console.log(err);
      })
    },
    getPage(condition){
      if(condition == 0){
        const page = this.currentPage - 1
        this.doPagination(page)
      }else{
        const page = this.currentPage + 1
        this.doPagination(page)
      }
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
