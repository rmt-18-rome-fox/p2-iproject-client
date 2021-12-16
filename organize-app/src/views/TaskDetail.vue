<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Task Title : {{ taskDetail.title }}</h5>
        <img :src="taskDetail.imgUrl" class="card-img-top" alt="Task Image" />
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Category : {{ taskDetail.Category.name }}
        </li>
        <li class="list-group-item">
          Description : {{ taskDetail.description }}
        </li>
        <li class="list-group-item">Task created by : {{ taskDetail.User.name }}</li>
      </ul>
      <button class="btn btn-primary" @click="onClickPlay">Read Description Voice</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskDetail",
  data() {
    return {
      id: null,
      category: [],
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.$store.dispatch("getTaskDetail", this.id);
  },
  computed: {
    taskDetail() {
      return this.$store.state.taskDetail;
    },
  },
  methods: {
      onClickPlay(){
          console.log(this.taskDetail.description)
          this.$store.dispatch('getVoice', this.taskDetail.description)
      }
  }
};
</script>

<style>
</style>