<template>
  <div class="container">
    <div class="mt-4 mb-2" id="navigator">
      <router-link to="/auth/login">
        <font-awesome-icon :icon="['fas', 'arrow-alt-circle-left']"
      /></router-link>
    </div>
    <div>
      <h1 class="mb-5 text-center">Register as</h1>
      <div class="d-flex flex-column">
        <div class="mb-3 text-center">
          <button
            type="button"
            class="btn btn-dark text-white"
            style="background-color: #463e87; color: white !important"
          >
            <router-link to="/auth/register/customer">Customer</router-link>
          </button>
        </div>
        <p class="text-center">Or</p>
        <div class="text-center">
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

#navigator > a {
  color: #463e87 !important;
  font-size: 34px;
}

a:hover {
  text-decoration: none;
}
</style>
