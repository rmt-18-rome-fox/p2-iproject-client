<template>
  <div class="login">
    <Navbar />
    <LoginComponent />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import LoginComponent from "@/components/login.vue";
export default {
  name: "Login",
  components: {
    Navbar,
    LoginComponent,
  },
};
</script>

<style></style>
