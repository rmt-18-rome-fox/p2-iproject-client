<template>
  <header class="text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
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
        <a href="" class="hover:text-gray-900">My Favourite Foods</a>
      </nav>
      <a
        href=""
        class="
          flex
          order-first
          lg:order-none lg:w-1/5
          title-font
          font-medium
          items-center
          text-gray-900
          lg:items-center lg:justify-center
          mb-4
          md:mb-0
        "
      >
        <img src="https://img.icons8.com/color/48/000000/grocery-bag.png" />

        <span class="ml-3 text-xl">Foodify</span>
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end md:ml-5 lg:ml-0">
        <button
          class="
            inline-flex
            items-center
            bg-gray-100
            border-0
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
          <router-link to="/">Logout</router-link>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>