<template>
  <div>
    <Navbar></Navbar>
    <div id="library">
      <h1 class="text-center my-5">Library</h1>
      <div class="container">
        <Book></Book>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "../components/Books.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Library",
  components: { Navbar, Book },
};
</script>

<style scope></style>
