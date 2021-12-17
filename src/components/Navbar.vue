<template>
<nav class="w-full text-white shadow-sm px-16 flex items-center justify-center py-4 font-bold">
<div class=" items-center flex w-full justify-between px-8">
    <div class="flex space-x-5 items-center">
    <div class="flex items-center">
     <img src="../../public/nav_icon.png" alt="Avatar image" width="30px" height="50px"/>
    <h5 class="font-bold"><router-link to="/"> Creation</router-link></h5>
    </div>
    <ul class="flex space-x-5 pl-10">
        <li class="hover:text-gray-300 active:underline">
            <router-link to="/mycharacters" v-if="isLoggedIn">My Characters</router-link>
        </li>
        <li class="hover:text-gray-300 active:underline">
            <router-link to="/create" v-if="isLoggedIn">Create Characters</router-link>
        </li>
    </ul>
    </div>
    <div class="flex space-x-5 hover:text-gray-300 border border-white px-3 py-2 rounded-lg hover:border-gray-300">
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
            return this.$store.state.isLoggedIn;
        }
    },
    methods: {
        toLogin() {
            console.log("click")
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

