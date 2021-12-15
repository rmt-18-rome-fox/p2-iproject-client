<template>
  <!-- Login -->
  <div>
    <div class="absolute top-0 left-0 mx-5 my-3">
        <div id="logo" class="flex justify-center items-center">
            <img src="../assets/quran.png" class="h-12 w-12 border px-2 py-2 rounded-full bg-green-500" alt="">
            <h1 class="font-bold mx-3 text-lg">My Quran</h1>
        </div>
    </div>
    <div id="login" class="container h-screen mx-auto">
        <div class="grid grid-cols-10 h-screen place-items-center">
        <div class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8 place-items-center">
            <h2 class="text-4xl tracking-widest text-white text-opacity-70 text-center uppercase mb-14">
            <p><span class="text-green-500 text-opacity-100 text-6xl font-bold">My Qur'an</span></p>
            </h2>
            <div class="grid grid-cols-10 border py-5 shadow-lg rounded-lg">
            <div class="col-start-2 col-span-8">
                <h2 class="text-green-500 text-opacity-80 text-2xl text-center mb-7">Login Now</h2>
                <div class="card rounded-md px-5">
                    <form class="mt-6 mb-6 space-y-6">
                        <div class="mb-5">
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="off" required
                                class="block w-full px-3 py-2 border rounded-sm text-green-900 focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-lg tracking-wider"
                                placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="off" required
                                class="block w-full px-3 py-2 border rounded-sm text-green-900 focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-lg tracking-wider"
                                placeholder="Password" />
                        </div>
                        <div>
                            <button type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-sm text-green-500 bg-white bg-opacity-90 hover:bg-white hover:bg-opacity-80 focus:outline-none focus:ring focus:border-green-500 focus:ring-green-500 text-lg tracking-wider flex font-bold">Log
                            In</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style>

</style>