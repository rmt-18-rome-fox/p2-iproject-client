<template>
  <div :class="`h-20 mb-8 flex list-none ${isLoggedIn ? 'justify-center items-center align-center' : 'justify-end items-center align-center'}`">
      <div class="flex justify-evenly w-1/2 text-[#E84545]">
          <router-link v-if="isLoggedIn" to="/home" :class="this.$route.path === '/home' ? 'underline' : ''">Home</router-link>
          <router-link v-if="isLoggedIn" to="/dashboard" :class="this.$route.path === '/dashboard' ? 'underline' : ''">Dashboard</router-link>
          <router-link v-if="!isLoggedIn" to="/login" :class="this.$route.path === '/login' || '/register' ? 'underline' : ''">Sign in</router-link>
          <a @click.prevent="logout" href="#" v-else >Sign out</a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
        }
    },
    methods: {
        logout () {            
            this.$store.commit('SET_LOGIN_STATUS')
            this.$store.commit('SET_USER_HISTORY')
            localStorage.clear()
            this.$router.push('/')
        }
    },
    computed: {
        isLoggedIn () {
            return this.$store.state.isLoggedIn
        }
    }
}
</script>

<style>

</style>