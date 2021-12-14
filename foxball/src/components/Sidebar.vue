<template>
  <div class="fixed left-0 ml-28">
    <div
      class="
        flex flex-col
        w-80
        shadow-lg
        bg-white
        rounded-r-3xl
        overflow-hidden
      "
    >
      <div class="flex items-center justify-center h-20 shadow-md">
        <h1 class="text-3xl uppercase text-indigo-500">FOXBALLER</h1>
      </div>
      <ul class="flex flex-col space-y-20">
        <li>
          <a
            href="#"
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
              class="h-6 w-6"
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
            <span class="text-2xl font-medium">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
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
              class="h-10 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-2xl font-medium">EPL Standing</span>
          </a>
        </li>
        <li>
          <a
            href="#"
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
              class="h-6 w-6"
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
            <span class="text-2xl font-medium">Chitchat Zone</span>
          </a>
        </li>
        <li>
          <a
            href="#"
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
            <span class="text-2xl font-medium">Post Now</span>
          </a>
        </li>
      </ul>
      <div class="flex items-center justify-center h-20 shadow-md">
        <a class="text-lg text-indigo-500 cursor-pointer">Profile</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
</style>