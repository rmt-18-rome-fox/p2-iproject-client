<template>
  <div class="fixed left-0 ml-28">
    <div
      class="flex flex-col w-80 shadow-lg bg-white rounded-3xl overflow-hidden"
    >
      <div class="flex items-center justify-center h-20 shadow-md">
        <h1 class="text-3xl font-bold uppercase text-indigo-500">FOXBALLER</h1>
      </div>
      <ul class="flex flex-col space-y-6">
        <li>
          <span class="flex flex-row items-center duration-200 text-Blue-500">
            <span
              class="inline-flex items-center justify-center h-12 w-12 text-lg"
              ><i class="bx bx-home"></i
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 pr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-xl text-blue-500 font-medium"
              >Hallo, @{{ username }}</span
            >
          </span>
        </li>

        <li>
          <router-link
            to="/"
            class="
              flex flex-row
              items-center
              h-12
              transform
              hover:translate-x-2
              transition-transform
              ease-in
              duration-200
              text-gray-500
              hover:text-gray-800
            "
          >
            <span
              class="
                inline-flex
                items-center
                justify-center
                h-12
                w-12
                text-lg text-gray-400
              "
              ><i class="bx bx-home"></i
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 pr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span class="text-xl font-medium">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/likes"
            class="
              flex flex-row
              items-center
              h-12
              transform
              hover:translate-x-2
              transition-transform
              ease-in
              duration-200
              text-gray-500
              hover:text-gray-800
            "
          >
            <span
              class="
                inline-flex
                items-center
                justify-center
                h-12
                w-12
                text-lg text-gray-400
              "
              ><i class="bx bx-home"></i
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 pr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <span class="text-xl font-medium">iLikes</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/standing-table"
            class="
              flex flex-row
              items-center
              h-12
              transform
              hover:translate-x-2
              transition-transform
              ease-in
              duration-200
              text-gray-500
              hover:text-gray-800
            "
          >
            <span
              class="
                inline-flex
                items-center
                justify-center
                h-12
                w-12
                text-lg text-gray-400
              "
              ><i class="bx bx-music"></i
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 pr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl font-medium">EPL Standing</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/news"
            class="
              flex flex-row
              items-center
              h-12
              transform
              hover:translate-x-2
              transition-transform
              ease-in
              duration-200
              text-gray-500
              hover:text-gray-800
            "
          >
            <span
              class="
                inline-flex
                items-center
                justify-center
                h-12
                w-12
                text-lg text-gray-400
              "
              ><i class="bx bx-drink"></i
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 pr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl font-medium">ESPN News</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/chat"
            class="
              flex flex-row
              items-center
              h-12
              transform
              hover:translate-x-2
              transition-transform
              ease-in
              duration-200
              text-gray-500
              hover:text-gray-800
            "
          >
            <span
              class="
                inline-flex
                items-center
                justify-center
                h-12
                w-12
                text-lg text-gray-400
              "
              ><i class="bx bx-drink"></i
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 pr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span class="text-xl font-medium">Chitchat Zone</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/add"
            class="
              flex flex-row
              items-center
              h-12
              transform
              hover:translate-x-2
              transition-transform
              ease-in
              duration-200
              text-gray-500
              hover:text-gray-800
            "
          >
            <span
              class="
                inline-flex
                items-center
                justify-center
                h-12
                w-12
                text-lg text-gray-400
              "
              ><i class="bx bx-user"></i
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 pr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xl font-medium">Post Now</span>
          </router-link>
        </li>
      </ul>
      <div class="flex items-center justify-center h-20 shadow-md">
        <a class="cursor-pointer" @click.prevent="signout">Sign Out</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    ...mapMutations({
      loginMutations: "LOGIN",
    }),
    signout() {
      localStorage.clear();
      this.loginMutations(false);
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>