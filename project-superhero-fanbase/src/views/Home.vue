<template>
    <div>
    <header class="container bg-primary text-white">
        <div class="row">
            <div class="col-12 py-4 text-center">
                <h1 class="display-1">HEROES</h1>
            </div>
        </div>
    </header>
     <main class="container border">
        <div class="row">
            <div class="col-md-4 py-5">
                 
            </div>    
            <div class="col-md-8 py-5">
                  <div class="row">
                    <Cards v-for="el in hero" :key="el.id" :el="el"></Cards>
                </div>
            </div>
        </div>
    </main>
    <!-- <footer class="container bg-primary text-white">
        <div class="row">
            <div class="col-12 py-2 text-center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">PAGE</a>
                        </li>
                        <li v-for="eachpage in news.totalPage" :key="eachpage.id"  class="page-item">
                            <a @click.prevent="pageNews(eachpage)" class="page-link" href="#">{{eachpage}}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer> -->
    
</div>
</template>

<script>
import Cards from '../components/Cards.vue'


export default {
  name: 'Home',
  components: {
     Cards
  },
  computed: {
        hero (){
            return this.$store.state.hero
        }
  },
  methods :{
    fetchHero () {
              
              this.$store.dispatch('fetchHero')
          },
    
  }, 
  created (){
      this.fetchHero()
        
  }
}
</script>
