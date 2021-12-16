<template>
  <div class="container" style="width: 70%">
    <form class="row g-3" @submit.prevent="addBook">
      <div class="col-md-6 mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="addForm.title"
          required
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="author" class="form-label">Author</label>
        <input
          type="text"
          class="form-control"
          id="author"
          v-model="addForm.author"
          required
        />
      </div>
      <div class="col-6 mb-3">
        <label for="price" class="form-label">Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="addForm.price"
          required
        />
      </div>
      <div class="col-6 mb-3">
        <label for="publishedYear" class="form-label">Published Year</label>
        <input
          type="number"
          class="form-control"
          id="publishedYear"
          v-model="addForm.publishedYear"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="genre" class="form-label">Genre</label>
        <input
          type="text"
          class="form-control"
          id="genre"
          v-model="addForm.genre"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="imageUrl" class="form-label">Image Url</label>
        <input
          type="text"
          class="form-control"
          id="imageUrl"
          v-model="addForm.imageUrl"
          required
        />
      </div>
      <div class="col-12 text-center mt-5">
        <button
          type="submit"
          class="btn btn-dark"
          style="background: rgb(70, 62, 135)"
        >
          Add Book
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "AddBookForm",
  data() {
    return {
      addForm: {
        title: "",
        author: "",
        price: "",
        publishedYear: "",
        genre: "",
        imageUrl: "",
      },
    };
  },
  methods: {
    addBook() {
      this.$store
        .dispatch("addBook", this.addForm)
        .then(({ data }) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Book has been added",
          });
          this.$router.push("/sell");
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1000,
          });
        });
    },
  },
};
</script>

<style></style>
