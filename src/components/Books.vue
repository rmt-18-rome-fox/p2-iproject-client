<template>
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
            @click.prevent="showDetail(book.id)"
            class="btn btn-outline-secondary mt-3"
          >
            Detail
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
</template>

<script>
export default {
  name: "Books",
  methods: {
    fetchBooks() {
      this.$store
        .dispatch("fetchBooks")
        .then(({ data }) => {
          this.$store.commit("SUCCESS_FETCH_BOOKS", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showDetail(id) {
      this.$store
        .dispatch("showDetail", id)
        .then(({ data }) => {
          this.$store.commit("SUCCESS_SHOW_DETAIL", data);
          this.$router.push(`/book/${id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchBooks();
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>

<style></style>
