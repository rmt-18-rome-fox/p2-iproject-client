<template>
       <div class="simple-login-container">
        <form  action="">
            <h2>LOGIN</h2>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input v-model="email"  type="email" class="form-control" placeholder="Email">
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
    name: "Login"
}
</script>

<style>

</style>