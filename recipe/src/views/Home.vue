<template>
  <div class="home">
    <Navbar></Navbar>
    <div>
      <router-view></router-view>
    </div>
  
  <!-- <form @submit.prevent = "search"> 
        <div class="card-body" style=" align-items: center; ">
          <div class="form-group">
            <label for="exampleFormControlInput1">Search</label>
            <input type="text" class="form-control" min="1" max="10" style=" align-items: center " id="rating" v-model="searchForm.searchTerm">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary mb-3" style=" align-items: center;" >Search</button>
          </div>
        </div>
      </form> -->
      <!-- <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Register from './Register.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Register
  }
}
</script>
