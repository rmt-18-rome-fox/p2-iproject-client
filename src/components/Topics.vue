<template>
  <div>
        <TopicPost></TopicPost>

        <TopicItems
          v-for="topic in topics"
          :key="topic.id"
          :topic="topic"
        ></TopicItems>
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
    },
    
  computed: {
    topics () {
        return this.$store.state.topics
    }    
  },
  
  created () {
    this.$store.dispatch("fetchTopics")
  }
}
</script>

<style>

</style>