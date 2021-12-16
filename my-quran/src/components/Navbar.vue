<template>
  <div class="flex justify-between px-10 items-center border py-2 top-0">
        <div id="logo" class="flex justify-center items-center">
            <img src="../assets/quran.png" class="h-12 w-12 border px-2 py-2 rounded-full bg-green-500" alt="">
            <h1 class="font-bold mx-3 text-lg"><router-link to="/">My Qur'an</router-link></h1>
        </div>
        <div class="flex items-center">
            <a class="mx-5 font-bold" href=""><router-link to="/prayerTimes">Prayer Times</router-link></a>
            <p class="underline font-bold mx-5">salam, Admin</p>
            <button class="border rounded-lg bg-green-500 text-white px-2 py-1 mx-5" @click.prevent="fnLogout">Logout</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import Swal from 'sweetalert2'

export default {
    name: "Navbar",
    methods: {
        ...mapMutations({
            login: "LOGIN"
        }),
        fnLogout () {
            Swal.fire({
                title: "Logout Success!",
                text: "Logout Success!",
                icon: "success",
            });
            localStorage.clear()
            this.login(false)
            this.$router.push("/login")
        }
    },
    computed: {
        ...mapState(['isLogin'])
    }
}
</script>

<style>

</style>