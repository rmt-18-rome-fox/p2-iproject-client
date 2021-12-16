<template>
  <div id="app">
    <NavigateBar></NavigateBar>
    <transition name="slide-fade" mode="out-in">
         <router-view 
          id="page"
          
          />
    </transition>
    <FooterComponent></FooterComponent>
    <HFooter style="background-color: #282d32" class="mt-0"></HFooter>
    
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import { mapMutations } from "vuex";
import NavigateBar from "./components/NavigateBar.vue"
import FooterComponent from "./components/FooterComponent.vue"

export default {
  // setup() {
    
  // },
  components: {
    NavigateBar,
    FooterComponent,
    HFooter
  },
  computed: {
  
  },
  created(){
    this.access();
  },
  methods: {
    ...mapMutations(["LOG_IN"]),

    access(){
      if(localStorage.access_token){
        this.LOG_IN(true)
      }
    }
  }
  
}
</script>


<style>

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

#app,
#page {
  min-height: 100vh;
}
#page {
  padding: 110px 20px 50px 20px;
  font-family: sans-serif;
  /* background: linear-gradient(#141e30, #243b55); */
  overflow-x: hidden;
}

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

@media (min-width: 1201px) {
  .container-xxl{
    max-width: 1920px!important;
}
}

</style>
