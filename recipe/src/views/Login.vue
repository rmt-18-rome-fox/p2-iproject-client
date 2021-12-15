<template>
      <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form action="" method="" class="row g-3" @submit.prevent="login">
                        <h4>Welcome Back</h4>
                        <div class="col-12">
                            <label>Email</label>
                            <input type="email" name="username" class="form-control" placeholder="Email" v-model="loginForm.email">
                        </div>
                        <div class="col-12">
                            <label>Password</label>
                            <input type="password" name="password" class="form-control" placeholder="Password" v-model="loginForm.password">
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="rememberMe">
                                <label class="form-check-label" for="rememberMe"> Remember me</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark float-end">Login</button>
                        </div>
                    </form>
                    <hr class="mt-4">
                    <div class="col-12">
                        <p class="text-center mb-0">Have not account yet? <router-link to="/register" href="#">Signup</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "Login",
data () {
  return {
    loginForm : {
      email: "",
      password: ""
    }
  }
},
methods: {
  async login () {
    await this.$store.dispatch("login", {...this.loginForm})
    this.$router.push('/')
  }
}
}
</script>

<style>

</style>