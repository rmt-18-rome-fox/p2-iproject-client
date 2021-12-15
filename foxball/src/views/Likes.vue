<template>
  <div class="grid grid-cols-1 place-items-center pt-6 mx-auto ml-56 h-full">
    <div
      class="w-5/12 bg-white shadow-md rounded-3xl p-2 mb-4 pb-14 mx-1"
      v-for="like in arrLikes"
      :key="like.id"
    >
      <div class="overflow-x-hidden rounded-2xl relative">
        <img
          class="h-64 rounded-2xl w-full place-items-center object-cover"
          :src="like.Post.imgUrl"
        />
      </div>
      <div class="mt-4 pl-2 mb-2 flex justify-between">
        <div>
          <p class="flex text-xl font-bold text-gray-900 mb-0">
            @{{ like.Post.User.username }}
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
            {{ like.Post.caption }}
          </p>
        </div>
        <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <a @click.prevent="remove(like.id)" class="flex"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 hover:text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Likes",
  methods: {
    ...mapActions(["fetchLike", "removeLike"]),
    async remove(payload) {
      await this.removeLike(payload);
    },
  },
  computed: {
    ...mapState(["arrLikes"]),
  },
  created() {
    this.fetchLike();
  },
};
</script>

<style>
</style>