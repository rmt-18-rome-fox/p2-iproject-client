<template>
  <div class="home">
    <hello-world></hello-world>
  </div>
</template>

<script>
import BookDetail from '../components/BookDetail.vue'
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    BookDetail
  }
}
</script>
