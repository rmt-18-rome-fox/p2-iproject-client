<template>
  <div class="mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <nav
      class="
        flex
        lg:w-2/5
        flex-wrap
        items-center
        text-base
        md:ml-auto
        justify-center
        sm:justify-start
      "
    >
      <a class="hover:text-gray-900"
        ><router-link to="/favorite">Favorite</router-link></a
      >
    </nav>
    <a
      class="
        flex
        order-first
        lg:order-none lg:w-1/5
        title-font
        font-medium
        items-center
        text-green-900
        lg:items-center lg:justify-center
        mb-4
        md:mb-0
      "
    >
      <img src="https://img.icons8.com/color/48/000000/grocery-bag.png" />

      <span class="ml-3 text-xl">
        <router-link to="/">Foodify</router-link>
      </span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end md:ml-5 lg:ml-0">
      <button
        class="
          items-center
          py-1
          px-3
          focus:outline-none
          hover:bg-gray-200
          rounded
          text-base
          mt-4
          md:mt-0
        "
      >
        <router-link to="/login">Logout</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>