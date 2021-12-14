<template>
  <div class="container">
    <router-link to="/auth/login">Back To Login</router-link>
    <h1>Register</h1>
    <div>
      <router-link to="/auth/register/customer">Customer</router-link>
      <router-link to="/auth/register/seller">Seller</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style></style>
