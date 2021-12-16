<template>
  <div>
    <Navbar></Navbar>

    <div class="text-center">
      <b-jumbotron
        header="Welcome to 8ook"
        lead="Space up your mind"
        style="background: #fff"
      >
        <b-img
          center
          src="https://media1.giphy.com/media/FvX9PQ9HkcxLei46av/giphy.gif?cid=790b7611b49667f81cfb6e4e8d78f625e7f264ce813ae524&rid=giphy.gif&ct=g"
          alt="Center image"
          rounded
        ></b-img>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "HomePage",
  components: { Navbar },
};
</script>

<style></style>
