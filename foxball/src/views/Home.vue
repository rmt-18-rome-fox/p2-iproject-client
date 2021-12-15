<template>
  <div>
    <CardPost></CardPost>
  </div>
</template>

<script>
// @ is an alias to /src
import CardPost from "@/components/CardPost.vue";
export default {
  name: "Home",
  components: {
    CardPost,
  },
};
</script>
