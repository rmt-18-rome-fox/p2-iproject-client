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
        <form class="flex flex-col" @submit.prevent="toLogin">
          <div class="mb-6 pt-3 rounded bg-indigo-100">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3"
              >Username</label
            >
            <input
              type="text"
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
              v-model="formLogin.username"
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
              v-model="formLogin.password"
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
          <p class="text-sm text-black-600 mb-6">Or Sign In with Google</p>
          <GoogleLogin
            class="justify-self-center"
            :params="params"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
          ></GoogleLogin>
        </div>
        <div class="flex justify-center py-3">
          <p class="text-sm text-black-600 mb-6">Don't have an account ?</p>
          <router-link
            to="/register"
            class="
              text-sm text-indigo-600
              hover:text-pink-600 hover:underline
              mb-6
            "
          >
            Sign Up Here !</router-link
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import GoogleLogin from "vue-google-login";
export default {
  name: "Login",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      formLogin: {
        username: "",
        password: "",
      },
      params: {
        client_id:
          "465913921187-kk0ildre45gk6e1gq9h7upses9hcqoke.apps.googleusercontent.com",
      },
      renderParams: {
        width: 150,
        height: 40,
        longtitle: false,
        theme: "dark",
      },
    };
  },
  methods: {
    ...mapActions(["logginIn", "googleSuccess"]),
    async toLogin() {
      await this.logginIn(this.formLogin);
      if (this.isLogin === true) {
        this.$router.push("/");
      }
    },
    async onSuccess(googleUser) {
      // console.log(googleUser);
      // This only gets the user information: id, name, imageUrl and email
      // console.log(googleUser.getBasicProfile());
      await this.googleSuccess(googleUser);
      if (this.isLogin === true) {
        await this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>

<style>
</style>