<template>
  <div
    class="
      body-bg
      bg-gradient-to-b
      from-blue-100
      via-blue-200
      to-green-600
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
        w-9/12
      "
    >
      <section>
        <h3 class="font-bold text-2xl">Welcome To Foxballer</h3>
        <p class="text-gray-600 pt-2">Sign in to your account !</p>
      </section>

      <section class="mt-10">
        <form class="flex flex-col">
          <div class="mb-6 pt-3 rounded bg-indigo-100">
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
                pb-3
              "
            />
          </div>
          <div class="mb-6 pt-3 rounded bg-indigo-100">
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
                pb-3
              "
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
            "
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div class="flex grid grid-cols-1 py-3">
          <p class="text-sm text-black-600 mb-6">Or Sign In with Twitter</p>
        </div>
        <div class="flex justify-center py-3">
          <p class="text-sm text-black-600 mb-6">Don't have an account ?</p>
          <a
            class="
              text-sm text-indigo-600
              hover:text-pink-600 hover:underline
              mb-6
            "
          >
            Sign Up Here !</a
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>