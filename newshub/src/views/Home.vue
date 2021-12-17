<template>
  <b-container>
    
      <b-row cols="3">
        <homecard
          v-for="article in publishedArticles"
          :key="article.id"
          v-bind:article="article"
        ></homecard>
      </b-row>
    
  </b-container>
</template>

<script>
import Homecard from "../components/Homecard.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: { Homecard },
  computed: {
    ...mapState(["publishedArticles"]),
  },
  methods: {
    ...mapActions(["getMainArticles"]),
  },
  created() {
    this.getMainArticles();
  },
};
</script>

<style></style>
