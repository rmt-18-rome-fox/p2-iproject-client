<template>
  <div id="app" class="d-flex flex-column justify-content-between" style="min-height:100vh;">
    
    <div >
     <navbar></navbar>
    </div>
    <div class="mb-5">
    <router-view/>
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import HFooter from 'vue-hacktiv8-footer'

export default {
  name:"App",
  components:{
    Navbar,
    HFooter
  } 
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
