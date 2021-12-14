<template>
  <div class="about">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" class="navbar-brand">SENJA<b>NEWS</b></a>  		
        <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
          <div class="navbar-nav">
              <router-link to="/" class="nav-item nav-link" >HOME</router-link> 	
           </div>
           <div class="navbar-nav ml-auto action-buttons">
              <div class="nav-item dropdown">
                <router-link to="/Login" class="btn btn-primary" >Login</router-link> 
                <!-- <router-link to="/Login">Login</router-link> | -->
              </div>
              <div class="nav-item dropdown">
                <router-link to="/Register" class="btn btn-success" >SignUp</router-link>
              </div>
              <div class="nav-item dropdown">
                <a class="btn btn-success" >Logout</a>
              </div>
            </div>
        </div>
      </nav>
  </div>
</template>


<script>
export default {
    name: "Navbar"
}
</script>

<style>

</style>