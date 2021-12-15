<template>
  <div class="flex justify-between px-10 items-center border py-2">
        <div id="logo" class="flex justify-center items-center">
            <img src="../assets/quran.png" class="h-12 w-12 border px-2 py-2 rounded-full bg-green-500" alt="">
            <h1 class="font-bold mx-3 text-lg">My Quran</h1>
        </div>
        <div class="flex items-center">
            <a class="mx-5 font-bold" href="">My Favorite</a>
            <p class="underline font-bold mx-5">salam, Admin</p>
            <button class="border rounded-lg bg-green-500 text-white px-2 py-1 mx-5">Logout</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>

</style>