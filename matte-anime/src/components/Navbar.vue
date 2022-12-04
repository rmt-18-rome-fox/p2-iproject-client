<template>
  <div>
      <!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-black">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-10 w-auto rounded-full" src="https://wallpaperaccess.com/full/2607892.jpg" alt="Workflow">
          <img class="hidden lg:block h-10 w-auto rounded-full" src="https://wallpaperaccess.com/full/2607892.jpg" alt="Workflow">
          <router-link class="text-gray-300 text-2xl hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium mr-4" to="/">MatteAnime</router-link>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link class="text-white mt-1  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/">Home</router-link>
            <router-link class="text-white mt-1  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/my-watch-lists">My WatchList</router-link>
            <!-- <select @change="doCategory" v-model="category" class="text-white-300 hover:bg-gray-700 hover:text-white block px-1 py-0 rounded-md text-base font-medium" to="/bookmarks" name="category">
              <option selected disabled value="0">Category</option>
              <option value="1">Marvel</option>
              <option value="2">DC</option>
            </select> -->
            <!-- <select @change="doSortBy" v-model="sortBy" class="text-white-300 hover:bg-gray-700 hover:text-white block px-1 py-0 rounded-md text-base font-medium" to="/bookmarks" name="sortBy">
              <option selected disabled value="sortBy">sortBy</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select> -->
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        <!-- Profile dropdown -->
        <!-- <form @submit.prevent="doSearch" class="flex">
          <input type="text" placeholder="Search" v-model="search" class="text-gray-800 block px-1 py-0 rounded-md text-base font-medium">
          <button type="submit" class="py-2 px-2 bg-gray-500 hover:bg-gray-700 rounded-md text-white ml-2">Search</button>
        </form> -->
        <router-link v-if="!isLogin" class="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ml-6" to="/login">Login</router-link>
        <router-link v-if="!isLogin" class="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ml-6" to="/register">Register</router-link>
        <a v-if="isLogin" class="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ml-6" role="button" tabindex="-1" id="user-menu-item-1" @click.prevent="doLogout">Logout</a>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <router-link class="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/">MatteAnime</router-link>
      <router-link class="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/">Home</router-link>
      <!-- <router-link v-if="!isLogin" class="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/login">Login</router-link> -->
    </div>
  </div>
</nav>

  </div>
</template>

<script>
import swal from 'sweetalert2'

export default {
  name: 'Navbar',
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_IS_LOGIN', true)
    } else {
      this.$store.commit('SET_IS_LOGIN', false)
    }
  },
  methods: {
    doLogout () {
      localStorage.clear()
      this.$store.commit("SET_IS_LOGIN", false)
      this.$router.push('/')
      swal.fire({
        icon: 'success',
        text:'You hasbeen Logout'
        })
    },
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
