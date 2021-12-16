<template>
  <div class="grid grid-cols-1 place-items-center pt-6 mx-auto ml-56 h-full">
    <div
      class="w-5/12 bg-white shadow-md rounded-3xl p-2 mb-4 pb-14 mx-1"
      v-for="(news, idx) in arrNews.data"
      :key="idx"
    >
      <div class="overflow-x-hidden rounded-2xl relative">
        <img
          class="h-64 rounded-2xl w-full place-items-center object-cover"
          :src="news.image"
        />
      </div>
      <div class="mt-4 pl-2 mb-2 flex justify-between">
        <div>
          <span class="flex text-xl font-bold text-gray-900 mb-0">
            {{ news.title }}
          </span>
          <span
            class="
              flex
              text-lg text-opacity-80
              font-bold
              text-gray-900
              mb-0
              mt-3
            "
          >
            Desc:
            <p class="font-normal pl-3">{{ news.description }}</p>
          </span>
          <span
            class="
              flex
              text-lg text-opacity-80
              font-bold
              text-gray-900
              mb-0
              mt-3
            "
          >
            Link:
            <a
              :href="news.url"
              class="font-normal pl-3 text-indigo-400 hover:text-pink-500"
              >Click Here</a
            >
          </span>
          <span
            class="
              flex
              text-lg text-opacity-80
              font-bold
              text-gray-900
              mb-0
              mt-3
            "
          >
            Source:
            <p class="font-normal pl-3">{{ news.source }}</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "News",
  methods: {
    ...mapActions(["fetchNews"]),
  },
  computed: {
    ...mapState(["arrNews"]),
  },
  created() {
    this.fetchNews();
  },
};
</script>

<style>
</style>