<template>
  <div
    class="
      body-bg
      bg-green-800 bg-opacity-25
      min-h-screen
      pt-12
      md:pt-20
      pb-6
      px-2
      md:px-0
      grid grid-cols-1
      justify-items-center
      gap-x-0
    "
    style="font-family: 'Lato', sans-serif"
  >
    <main
      class="
        bg-white
        max-w-lg
        mx-auto
        p-8
        md:p-12
        my-10
        rounded-xl
        shadow-2xl
        text-center
        w-9/12
      "
    >
      <section>
        <h3 class="font-bold text-2xl">Add your post</h3>
      </section>

      <section class="mt-10">
        <form class="flex flex-col">
          <div class="mb-6 pt-3 rounded bg-indigo-100">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >Your Picture</label
            >
            <input
              type="file"
              class="
                bg-white
                w-full
                text-center text-gray-700
                focus:outline-none
                border-b-4 border-r-2 border-l-2 border-t-2 border-indigo-100
                focus:border-blue-400
                px-3
                pb-3
              "
            />
          </div>
          <div class="mb-6 pt-3 rounded bg-indigo-100">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >Caption it</label
            >
            <input
              type="text"
              class="
                bg-white
                w-full
                text-center text-gray-700
                focus:outline-none
                border-b-4 border-r-2 border-l-2 border-t-2 border-indigo-100
                focus:border-blue-400
                px-3
                pb-3
              "
            />
          </div>

          <button
            class="
              bg-indigo-600
              hover:bg-purple-700
              text-white
              font-bold
              py-2
              rounded
              shadow-lg
              hover:shadow-xl
              transition
              duration-200
            "
            type="submit"
          >
            Add new post
          </button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "AddPost",
};
</script>

<style>
</style>