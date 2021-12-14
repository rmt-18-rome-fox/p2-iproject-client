<template>
  <div>
      <section class= "wrapper" id="register-form">
  <div class="container" style="width: 500; padding: 3rem!important;
; border: 2px solid rgba(0,0,0,.125);">
  <h2> Register </h2>
  <form @submit.prevent="doRegister" id="register-form">
      <div class="mb-3">
        <label for="name" class="form-label">Username</label>
        <input v-model="name"
        type="text" class="form-control" id="username">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="email" 
        type="email" class="form-control" id="InputEmail">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input  v-model="password"
        type="password" class="form-control" id="InputPassword">
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input v-model="address"
        type="text" class="form-control" id="address">
      </div>
      <button type="submit" class="btn btn-primary">Register</button><br>

  </form>
     </div>
</section>
  </div>
</template>

<script>
import router from "../router/index"

export default {
    name: "Register",
    data(){
        return {
            name: "",
            email: "",
            password: "",
            address: ""
        }
    },
    methods: {
        doRegister(){
            this.$store.dispatch('doRegister',{
                name: this.name,
                email: this.email,
                password: this.password,
                address: this.address
            })
            .then(()=>{
                router.push('/login')
            })
        }
    }
}
</script>

<style>

</style>