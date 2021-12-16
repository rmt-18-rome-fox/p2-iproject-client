<template>
<nav class="w-full bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light px-10 flex items-center justify-center py-4">
<div class=" items-center flex w-full justify-between px-8">
    <div class="flex space-x-5">
    <h5><router-link to="/"> Creation (basic)</router-link></h5>
    <ul class="flex space-x-5">
        <li>
            <router-link to="/" v-if="isLoggedIn">Home</router-link>
        </li>
        <li>
            <router-link to="/mycharacters" v-if="isLoggedIn">My Characters</router-link>
        </li>
    </ul>
    </div>
    <div class="flex space-x-5">
    <a href="#" @click.prevent="toLogin" v-if="!isLoggedIn">Login</a>
    <a href="#" @click.prevent="logout" v-if="isLoggedIn">LogOut</a>
    </div>
</div>
</nav>
</template>

<script>
export default {
    name: "Navbar",
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn
        }
    },
    methods: {
        toLogin() {
            this.$router.push("/login");
        },
        logout() {
            localStorage.removeItem("access_token");
            this.$store.commit("set_is_logged_in", false )
            this.$router.push("/login");
        }
    },
}
</script>

<style>

</style>

