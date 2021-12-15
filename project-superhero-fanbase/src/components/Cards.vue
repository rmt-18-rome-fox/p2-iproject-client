<template>
       <div class="card m-4 " style="width: 18rem;">
        <img :src="el.imgUrl">
        <div class="card-body">
        <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-primary">{{el.location}}</span> </div>
            <h3 class="card-text text-muted">{{el.location}}</h3>
        </div>
        <div class="card-footer ">
            <a @click.prevent="detailHero" href="#" class="btn btn-primary">DETAIL</a> 
        </div>
        
    </div>  
</template>

<script>
export default {
    name: "Cards",
    props: ['el'],
    methods: {
          detailHero: function(){
              const payload = {
                 id: this.el.id, 
                 name: this.el.name
              }
            this.$store.dispatch('detailHero', payload)
            .then(() =>{
                this.$router.push(`/detail`)
                 
            })
        }
    }


}   
</script>

<style>

</style>