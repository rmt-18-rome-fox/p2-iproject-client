<template>
  <div>
    <CardPost v-for="post in posts" :key="post.id" :post="post"></CardPost>
  </div>
</template>

<script>
// @ is an alias to /src
import CardPost from "@/components/CardPost.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    CardPost,
  },
  data() {
    return {
      post: [],
    };
  },
  methods: {
    ...mapActions(["fetchPost"]),
  },
  computed: {
    ...mapState(["posts"]),
  },
  created() {
    this.fetchPost();
  },
};
</script>
