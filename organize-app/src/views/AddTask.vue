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
    <div class="col-12">
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
    <h6>Category Id 1 : To-Do</h6>
    <h6>Category Id 2 : Doing </h6>
    <h6>Category Id 3 : Done </h6>
</div>
  </form>
</template>

<script>
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
            this.$router.push('/')
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