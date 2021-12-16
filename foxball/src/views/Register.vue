<template>
  <div
    class="
      body-bg
      bg-gradient-to-b
      from-blue-200
      via-blue-400
      to-green-800
      min-h-screen
      pt-12
      md:pt-20
      pb-6
      px-2
      md:px-0
      grid grid-cols-2
      gap-x-0
    "
    style="font-family: 'Lato', sans-serif"
  >
    <div>
      <img
        src="../assets/fox-ball.png"
        class="w-11/12 h-11/12 pl-28 mt-28"
        alt=""
      />
    </div>
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
        max-h-full
        w-9/12
      "
    >
      <section>
        <h3 class="font-bold text-2xl">Welcome To Foxballer</h3>
        <p class="text-gray-600 pt-2">Sign up now !</p>
      </section>

      <section class="mt-10" @submit.prevent="register">
        <form class="flex flex-col">
          <div class="pt-2 rounded">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >Name</label
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
                pb-1
              "
              v-model="name"
            />
          </div>
          <div class="pt-2 rounded">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >Username</label
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
                pb-1
              "
              v-model="username"
            />
          </div>
          <div class="pt-2 rounded">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >Email</label
            >
            <input
              type="email"
              class="
                bg-white
                w-full
                text-center text-gray-700
                focus:outline-none
                border-b-4 border-r-2 border-l-2 border-t-2 border-indigo-100
                focus:border-blue-400
                px-3
                pb-1
              "
              v-model="email"
            />
          </div>
          <div class="pt-2 rounded">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >Password</label
            >
            <input
              type="password"
              class="
                bg-white
                w-full
                text-center text-gray-700
                focus:outline-none
                border-b-4 border-r-2 border-l-2 border-t-2 border-indigo-100
                focus:border-blue-400
                px-3
                pb-1
              "
              v-model="password"
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
              mt-5
            "
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div class="flex justify-center py-10">
          <router-link
            to="/login"
            class="text-sm text-indigo-600 hover:text-pink-600 hover:underline"
          >
            Back To Sign In Page !</router-link
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["registerFans"]),
    async register() {
      const newFans = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
      };
      await this.registerFans(newFans);
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>