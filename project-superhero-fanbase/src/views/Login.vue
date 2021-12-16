<template>
       <div class="simple-login-container">
        <form @submit.prevent="login" action="">
            <h2>LOGIN</h2>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input v-model="email" type="email" class="form-control" placeholder="Email">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input v-model="password" type="password" placeholder="Enter your Password" class="form-control">
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
    name: "Login",
     data: function(){
        return {
            email:"",
            password: "",
        }
    },
    methods: {
        login: function(){
            this.$store.dispatch('login',{email: this.email,password: this.password})
            .then(()=>{
                this.$store.dispatch('setUsername',this.email)
                this.$router.push("/")
                 this.$swal({
                icon: 'success',
                title: 'SUCCES LOGIN',
                text: `WELCOME IN HEOESROAM`,
              })
              
            })
              .catch((err) =>{
              this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message,
              })
            })
        },
    },    
}
</script>

<style>
.simple-login-container{
    width:300px;
    max-width:100%;
    margin:50px auto;
}
.simple-login-container h2{
    text-align:center;
    font-size:20px;
}

.simple-login-container .btn-login{
    background-color:#FF5964;
    color:#fff;
}
a{
    color:#fff;
}
</style>