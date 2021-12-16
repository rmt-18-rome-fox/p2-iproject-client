<template>
  <div>
    <div v-if="books.length > 0">
      <div>
        <div class="row">
          <div
            class="col-3 my-5 booksContainer"
            v-for="book in books"
            :key="book.id"
          >
            <b-card bg-variant="light" :header="book.title" class="text-center">
              <b-img :src="book.imageUrl" fluid alt="Book"> </b-img>
              <button
                @click.prevent="deleteBook(book.id)"
                class="btn btn-outline-danger mt-3"
              >
                Delete
              </button>
              <template #footer>
                <small class="text-muted">{{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(book.price)
                }}</small>
              </template>
            </b-card>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex align-items-center mb-5 flex-column">
        <b-img
          src="https://ik.imagekit.io/johannes/Empty_Jo6oasq50.png?updatedAt=1639583060788"
          alt="Empty Cart"
          width="400px"
          height="400px"
        ></b-img>
        <h4 class="my-3">No book found</h4>
        <button class="btn btn-dark" style="background: rgb(70, 62, 135)">
          <router-link to="/sell/addBook">Add a new book</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoldBooks",
  methods: {
    fetchSellerBooks() {
      this.$store
        .dispatch("fetchSellerBooks")
        .then(({ data }) => {
          this.$store.commit("SUCCESS_FETCH_SELLER_BOOKS", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteBook(id) {
      this.$store
        .dispatch("deleteBook", id)
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
            title: "Book has been deleted",
          });
          this.fetchSellerBooks();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchSellerBooks();
  },
  computed: {
    books() {
      return this.$store.state.sellerBooks;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
