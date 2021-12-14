<template>
  <div class="home">
    <!-- Navbar -->
    <navbar></navbar>
    <!-- Home Page -->
    <div class="container mx-auto my-10">
      <div class="md:flex flex-wrap">
        <!-- Recipe Card -->
        <div class="flex xl:w-1/4 md:w-1/2 p-4">
          <div
            class="
              flex flex-col
              w-full
              justify-between
              bg-gray-100
              p-6
              rounded-lg
            "
          >
            <div>
              <img
                class="rounded w-auto mb-6 mx-auto"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                alt="content"
              />
              <h3
                class="
                  tracking-widest
                  text-green-500 text-center text-xs
                  font-medium
                  title-font
                "
              >
                Recipes
              </h3>
              <h2
                class="
                  text-lg text-gray-900 text-center
                  font-medium
                  title-font
                  mb-4
                "
              >
                Pizza
              </h2>
              <p class="leading-relaxed text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta suscipit neque deserunt velit nobis labore a, magnam inventore earum, culpa facilis. Sequi ratione eum numquam facilis pariatur nam? Excepturi.
              </p>
            </div>
            <button
              class="
                flex
                mx-auto
                mt-4
                text-white
                bg-green-500
                border-0
                py-2
                px-8
                focus:outline-none
                hover:bg-green-600
                rounded
                text-lg
              "
            >
              Add to Favorites 
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
