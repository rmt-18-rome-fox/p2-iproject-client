<template>
    <div class="card float-center">
      <div class="row">
        <div class="col-sm-5">
          <img class="d-block w-100" :src="el.imgUrl" alt="">
        </div>
        <div class="col-sm-7">
          <div class="card-block">
                    
                      <h4 class="card-title">{{el.name}}</h4>
                      <h6>Location :</h6>
            <p>{{el.location}}</p>

            <h6>Date :</h6>
            <p>{{formatDate()}}</p>
             <h6>Description :</h6>
             <p>{{el.description}}</p>
            <br>
            <a href="#" @click.prevent="detailHero(el.id)" class="btn btn-primary btn-sm float-right">Read More</a>
          </div>
        </div>
 
      </div>
    </div>
  
       <!-- <div class="card m-4 " style="width: 18rem;">
        <img :src="el.imgUrl">
        <div class="card-body">
        <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-primary">{{el.location}}</span> </div>
            <h3 class="card-text text-muted">{{el.location}}</h3>
        </div>
        <div class="card-footer ">
            <a @click.prevent="detailHero(el.id)" href="#" class="btn btn-primary">DETAIL</a> 
        </div>
        
    </div>   -->
</template>

<script>
export default {
    name: "Cards",
    props: ['el'],
    methods: {
          detailHero: function(id){
             
            
            this.$store.dispatch('detailHero',id)
            .then(() =>{
                this.$router.push(`/detail/${id}`)
                 this.$swal({
                icon: 'info',
                title: 'INFO',
                text: `DETAIL HEROES`,
              })
            })
        },
         formatDate() {
              // console.log(this.history.createdAt)
              let timeData = new Date(this.el.date) 
              const timeDate = timeData.getDate()
              const timeMonth = timeData.getMonth() + 1
              const timeYear = timeData.getFullYear()
              return `${timeDate}/${timeMonth}/${timeYear}`
          }
    }


}   
</script>

<style>
    .title {
 
    margin-bottom: 50px;
    text-transform: uppercase;
}

.card-block {
    font-size: 1em;
    position: relative;
    margin: 0;
    padding: 1em;
    border: none;
    border-top: 1px solid rgba(34, 36, 38, .1);
    box-shadow: none;
     
}
.card {
    font-size: 1em;
    overflow: hidden;
    padding: 5;
    border: none;
    border-radius: .28571429rem;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    margin-top:20px;
}
</style>