<template>
  <div class="flex xl:w-full md:w-1/2 p-4">
    <div
      class="flex flex-col w-full justify-between bg-orange-100 p-6 rounded-lg"
    >
      <div>
        <img
          class="rounded w-auto mb-6 mx-auto"
          src="https://www.edamam.com/web-img/b4a/b4ae00d32a239d3d78019cce21ae2c88.jpg"
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
          Main Course
        </h3>
        <h2
          class="text-lg text-gray-900 text-center font-medium title-font"
        >
          Foodify
        </h2>
      </div>
      <button
        class="
          flex
          mx-auto
          mt-4
          text-white
          bg-red-500
          border-0
          py-2
          px-8
          focus:outline-none
          hover:bg-green-600
          rounded
          text-lg
        "
      >
        Delete 
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoriteCard",
  // props: ["item"],
};
</script>

<style>
</style>