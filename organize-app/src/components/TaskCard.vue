<template>
  <div class="container mt-5">
      <!-- <h5>TES</h5> -->
    <div class="row row-cols-4 d-flex justify-content-between">
      <div v-for="task in tasks" :key="task.id" class="col">
        <div class="card">
          <img :src="task.imgUrl" class="card-img-top" alt="Tasks Image" />
          <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <h5 class="card-category">Category: {{ task.Category.name }}</h5>
            <!-- <h6 class="card-description">Description: {{ task.description }}</h6> -->
            <button @click.prevent="getTaskDetail(task.id)" class="btn btn-primary my-2">Tasks Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "TaskCard",
    computed: {
        tasks(){
            console.log({data:this.$store.state.tasks});
            return this.$store.state.tasks
        }
    },
    methods: {
        getTaskDetail(detailId){
            this.$store.dispatch('getProductDetail', detailId).then(()=>{
                this.$router.push(`/task/${detailId}`)
            })
        }
    }

}
</script>

<style>

</style>