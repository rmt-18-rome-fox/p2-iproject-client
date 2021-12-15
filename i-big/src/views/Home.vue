<template>
  <div class="home">
    <Header>
    </Header>

    <ProductList>
    </ProductList>


  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ProductList
  }
}
</script>
