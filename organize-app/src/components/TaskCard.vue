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
            <button
              @click.prevent="getTaskDetail(task.id)"
              class="btn btn-primary my-2"
            >
              Task Details
            </button>
            <button
              @click.prevent="deleteTask(task.id)"
              type="button"
              class="my-2 btn btn-danger mb-2"
            >
              Delete Task
            </button>
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
    tasks() {
      // console.log({data:this.$store.state.tasks});
      return this.$store.state.tasks;
    },
  },
  methods: {
    getTaskDetail(detailId) {
    //   console.log(detailId, "<<<detailId");
      this.$store.dispatch("getTaskDetail", detailId).then(() => {
        this.$router.push(`/tasks/${detailId}`);
      });
    },
    deleteTask(deleteId){
        this.$store.dispatch('deleteTask', deleteId).then(()=>{
            this.$store.dispatch('getTasks')
        })
            // this.$store.dispatch()
        
    }
  },
};
</script>

<style>
</style>