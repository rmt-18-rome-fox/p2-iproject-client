<template>
  <div class="about">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" class="navbar-brand">HEROES<b>ROAM</b></a>  		
        <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
          <div class="navbar-nav">
              <router-link to="/" class="nav-item nav-link" v-if="isLogin" >HOME</router-link> 	
           </div>
              <div class="navbar-nav">
              <router-link to="/form" class="nav-item nav-link" v-if="isLogin" >ADD SCHEDULE</router-link> 	
           </div>
           
           <div class="navbar-nav ml-auto action-buttons">
              <div class="nav-item dropdown">
                <router-link to="/Login" class="btn btn-primary" v-if="!isLogin">Login</router-link> 
                <!-- <router-link to="/Login">Login</router-link> | -->
              </div>
              <div class="nav-item dropdown">
                <router-link to="/Register" class="btn btn-success" v-if="!isLogin" >SignUp</router-link>
              </div>
              <div class="nav-item dropdown">
                <a @click.prevent="isLogout" class="btn btn-success" v-if="isLogin">Logout</a>
              </div>
            </div>
        </div>
      </nav>
  </div>
</template>


<script>
export default {
    name: "Navbar",
    computed: {
      isLogin(){
        return this.$store.state.isLogin
      }
    },
      methods: {
        isLogout: function(){
            localStorage.clear()
            this.$store.commit('SET_IS_LOGIN')
            this.$router.push("/login")
              
                 
        }
    }
}
</script>

<style>

</style>