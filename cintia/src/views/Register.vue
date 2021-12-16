<template>
  <div class="login">
    <Navbar />
    <RegisterComponent />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import RegisterComponent from "@/components/register.vue";
export default {
  name: "Register",
  components: {
    Navbar,
    RegisterComponent,
  },
};
</script>

<style></style>
