<template>
  <form @submit.prevent="addTask" class="row g-3 container border mx-auto">
    <div class="col-md-6">
      <label for="title" class="form-label">Title</label>
      <input v-model="title" type="text" class="form-control" />
    </div>
    <div class="col-md-6">
      <label for="CategoryId" class="form-label">Category Id</label>
      <input v-model="CategoryId" type="text" class="form-control" />
    </div>
    <br />
  
    <div class="col-12 my-4">
      <label for="description" class="form-label">Description Task</label>
      <input v-model="description" type="text" class="form-control" />
    </div>
    <div class="col-12">
      <br />
    </div>

    <b-form-group label="Image" label-cols-sm="2">
      <b-form-file id="file-default" @change="onChangeFile"></b-form-file>
    </b-form-group>

    <div class="col-8">
      <button type="submit" class="btn btn-primary mb-5">Submit</button>
    </div>
    <div style="text-align:left;">
    <h6>Category Id List for Add Task:</h6>
    <h6>Category Id To-Do : 1</h6>
    <h6>Category Id Doing : 2 </h6>
    <h6>Category Id Done : 3 </h6>
</div>
  </form>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: "AddTask",
  data() {
    return {
      title: "",
      CategoryId: 0,
      description: "",
      image: "",
    };
  },
  methods: {
    addTask() {
      this.$store
        .dispatch("addTask", {
          title: this.title,
          CategoryId: this.CategoryId,
          description: this.description,
          image: this.image,
        })
        .then((res) => {
            console.log({res})
            this.$router.push('/');
            Swal.fire("Good job!", "You clicked the button!", "success add task!");
        })
        .catch((err) => {
            console.log({err})
        });
    },
    onChangeFile(val) {
      console.log(val);
      this.image = val.target.files[0];
    },
  },
};
</script>

<style>
</style>