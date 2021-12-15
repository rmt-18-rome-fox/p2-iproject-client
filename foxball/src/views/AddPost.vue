<template>
  <div
    class="
      body-bg
      min-h-screen
      pt-12
      ml-56
      md:pt-20
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
        min-h-4/6
      "
    >
      <section>
        <h3 class="font-bold text-2xl">Add your post</h3>
      </section>

      <section class="mt-10">
        <form class="flex flex-col" @submit.prevent="newPost">
          <div class="mb-6 pt-3">
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
              v-model="caption"
            />
          </div>
          <div class="mb-6 pt-3">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >Your Picture (max size 5kb)</label
            >
            <input type="file" class="border" @change="onChange" />
          </div>

          <button
            class="
              bg-gray-600
              hover:bg-black
              text-white
              font-bold
              py-2
              rounded
              shadow-lg
              hover:shadow-xl
              transition
              duration-200
              mt-10
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
import { mapActions } from "vuex";
export default {
  name: "AddPost",
  data() {
    return {
      imgUrl: "",
      caption: "",
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    onChange(el) {
      const file = el.target.files[0];
      this.imgUrl = file;
    },
    async newPost() {
      let payload = {
        caption: this.caption,
        imgUrl: this.imgUrl,
      };
      console.log(payload);
      await this.addPost(payload);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>