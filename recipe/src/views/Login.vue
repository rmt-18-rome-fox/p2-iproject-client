<template>
      <div class="container vh-100">
        <div class="row ">
            <div class="col-md-4 offset-md-4 ">
                <div class="login-form bg-light mt-4 p-4 shadow-lg">
                    <form action="" method="" class="row g-3 justify-content-center"  @submit.prevent="login">
                        <h4>Welcome Back</h4>
                        <div class="col-12">
                            <label>Email</label>
                            <input type="email" name="username" class="form-control" placeholder="Email" v-model="loginForm.email">
                        </div>
                        <div class="col-12">
                            <label>Password</label>
                            <input type="password" name="password" class="form-control" placeholder="Password" v-model="loginForm.password">
                        </div>
                        <div class="col-md-4 d-flex flex-column">
                            <button type="submit" class="btn btn-dark">Login</button>
                            <!-- <button type="submit" class="btn btn-dark btn-xs">Facebook</button> -->
                        </div>
                        <div class="card social-block">
                          <div class="card-body">
                            <a class="btn btn-block btn-social btn-facebook" href="/auth/facebook" role="button">
                            <i class="fab fa-facebook"></i>
                            Sign Up wth Facebook
                            </a>
                          </div>
                        </div>
                    </form>
                    <hr class="mt-4">
                    <div class="col-12">
                        <p class="text-center mb-0">Don't have account yet? <router-link to="/register" href="#">Signup</router-link></p>
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