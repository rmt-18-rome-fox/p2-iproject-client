<template>
  <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <form action="" class="mt-5 border p-4 bg-light shadow" @submit.prevent="register">
                    <h4 class="mb-5 text-secondary">Create Your Account</h4>
                    <div class="row justify-content-center">
                        <div class="mb-3 col-md-12">
                            <label>Name<span class="text-danger"></span></label>
                            <input type="text" name="fname" class="form-control" placeholder="Enter Name" v-model="registerForm.name">
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Username<span class="text-danger"></span></label>
                            <input type="text" name="fname" class="form-control" placeholder="Enter Username" v-model="registerForm.username">
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Password<span class="text-danger"></span></label>
                            <input type="Password" name="fname" class="form-control" placeholder="Enter Password" v-model="registerForm.password">
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Email<span class="text-danger"></span></label>
                            <input type="text" name="fname" class="form-control" placeholder="Enter Email" v-model="registerForm.email">
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Phone Number<span class="text-danger"></span></label>
                            <input type="text" name="Lname" class="form-control" placeholder="Enter Phone Number" v-model="registerForm.phoneNumber">
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Address<span class="text-danger"></span></label>
                            <input type="text" name="password" class="form-control" placeholder="Enter Address" v-model="registerForm.address">
                        </div>
                          <div class="col-md-4 d-flex flex-column">
                           <button class="btn btn-primary float-end">Signup Now</button>
                            <p class="text-center mt-3 text-secondary">If you have account, Please <router-link to="/login">Login Now</router-link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Register",
  data () {
    return {
      registerForm : {
        name: "",
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
        address: ""
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch("register", {...this.registerForm})
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>