<template>
  <div>
      <div class="max-w-2xl mx-auto">
	    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
		  <form class="space-y-6" @submit.prevent="login">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>
			<div>
				<label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
				<input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" v-model="user.email">
            </div>
            <div>
                <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" v-model="user.password">
            </div>
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500" @click.prevent="toRegister">Create account</a>
            </div>
		  </form>
	    </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
        }
    },
    methods: {
        login() {
            this.$store.dispatch("login", this.user)
            .then(({data}) => {
                localStorage.setItem("access_token", data.access_token);
                this.$router.push("/");
            });
        },
        toRegister() {
            this.$router.push("/register");
        }
    }
}
</script>

<style>

</style>