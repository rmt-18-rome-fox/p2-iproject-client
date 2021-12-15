<template>
  <div class="grid grid-cols-1 place-items-center pt-6 mx-auto ml-56">
    <!-- card -->
    <div
      class="relative w-5/12 bg-white shadow-md rounded-3xl p-2 mb-4 pb-14 mx-1"
    >
      <div class="overflow-x-hidden rounded-2xl relative">
        <img
          class="h-64 rounded-2xl w-full place-items-center object-cover"
          :src="post.imgUrl"
        />
      </div>
      <div class="mt-4 pl-2 mb-2 flex justify-between">
        <div>
          <p class="flex text-xl font-bold text-gray-900 mb-0">
            @{{ post.User.username }}
          </p>
          <p
            class="
              flex
              text-lg text-opacity-80
              font-semibold
              text-gray-900
              mb-0
              mt-3
            "
          >
            {{ post.caption }}
          </p>
        </div>
        <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <a href="" class="flex"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 opacity-30 hover:opacity-100 hover:text-pink-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              /></svg
          ></a>
        </div>
      </div>
    </div>
    <!-- end card -->
  </div>
</template>

<script>
export default {
  name: "CardPost",
  props: ["post"],
};
</script>

<style>
</style>