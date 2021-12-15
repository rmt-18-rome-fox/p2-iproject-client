<template>
     <div class="simple-login-container">
        <form @submit.prevent="Register" action="">
            <h2>Register</h2>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input  v-model="username"   type="text" class="form-control" placeholder="Username">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input  v-model="email" type="email" class="form-control" placeholder="Email">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input  v-model="password" type="password" placeholder="Password" class="form-control">
                </div>
            </div>
             <div class="row">
                <div class="col-md-12 form-group">
                    <input  v-model="phoneNumber"  type="text" class="form-control" placeholder="Phone Number">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input type="submit" class="btn btn-block btn-login" placeholder="Enter your Password" >
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "Register",
    data: function(){
        return {
            username:"",
            email:"",
            password: "",
            phoneNumber:"",
           
        }
    },
      methods: {
        Register: function(){
            this.$store.dispatch('Register',{username:this.username,email: this.email,password: this.password, phoneNumber: this.phoneNumber})
            .then(()=>{
                this.$router.push("/login")
                 
            })
           
        }
    }
}
</script>

<style>

</style>