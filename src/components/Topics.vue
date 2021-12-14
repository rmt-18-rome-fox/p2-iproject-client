<template>
  <div>
        <TopicPost></TopicPost>

        <TopicItems></TopicItems>
  </div>
</template>

<script>
import TopicPost from '../components/TopicPost.vue'
import TopicItems from  '../components/TopicItems.vue'
export default {
    name: "Topics",
    components: {
        TopicPost,
        TopicItems
    }
}
</script>

<style>

</style>