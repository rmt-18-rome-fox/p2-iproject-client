<template>
  <div class="home">

    <div class="container">
      <div class="row">
        <!-- <div class="col-lg-3 col-md-9"></div>  -->
        <!-- <div class="col-lg-9 col-md-6"> -->
        <div class="row">
           <div class="=col-md-4 my-3">
          <task-card> </task-card>
           <div class="col-lg-4 col-md-10">
                <div class="card-body d-grid"></div> 
          <!-- </div>  -->
           </div> 
          </div> 
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";

export default {
  components: {
    TaskCard,
  },
  methods: {
    getTasks() {
      this.$store.dispatch("getTasks");
    },
  },
  created() {
    this.getTasks();
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>

<style>
</style>