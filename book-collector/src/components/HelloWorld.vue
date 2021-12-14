<template>
  <div class="hello">
  <navbar></navbar>
  <login-page></login-page>
  <register-page></register-page>
  <book-card></book-card>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'
import LoginPage from './LoginPage.vue'
import Navbar from './Navbar.vue'
import RegisterPage from './RegisterPage.vue'
export default {
  components: { Navbar, LoginPage, RegisterPage, BookCard },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello{
  margin: 50px;
}
</style>
