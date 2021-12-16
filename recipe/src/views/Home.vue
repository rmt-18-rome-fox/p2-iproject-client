<template>
  <div class="home">
    <Navbar></Navbar>
    <div>
      <router-view></router-view>
    </div>
  
  
  <!-- <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul> -->
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
  },

}
</script>
