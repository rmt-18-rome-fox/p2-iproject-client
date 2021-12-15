<template>
  <div class="home">
    <StoreList></StoreList>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import StoreList from '@/components/StoreList.vue'


export default {
  name: 'Home',
  components: {
    // HelloWorld,
    StoreList
  },
}
</script>
