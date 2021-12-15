<template>
  <div class="container text-center">
    <div class="mt-4 mb-5">
      <router-link to="/auth/login">Back To Login</router-link>
    </div>
    <div>
      <h1 class="mb-5">Register as</h1>
      <div class="d-flex flex-column">
        <div class="mb-3">
          <button
            type="button"
            class="btn btn-dark text-white"
            style="background-color: #463e87; color: white !important"
          >
            <router-link to="/auth/register/customer">Customer</router-link>
          </button>
        </div>
        <p>Or</p>
        <div>
          <button
            type="button"
            class="btn btn-dark text-white"
            style="background-color: #463e87; color: white !important"
          >
            <router-link to="/auth/register/seller">Seller</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style scoped>
a {
  color: #fff;
}

a:hover {
  text-decoration: none;
}
</style>
