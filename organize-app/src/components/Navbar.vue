<template>
  <nav class="navbar-expand-lg navbar-light bg-light">
    
      <router-link class="navbar-brand font-weight-bold" to="/">Organize App</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          
                <li class="nav-item active">
                  <router-link v-if="!isLogin" to="/login" class="nav-link">Login<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                  <router-link v-if="!isLogin" to="/register" class="nav-link">Register</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-if="isLogin" to="/tasks" class="nav-link">AddTask</router-link>
                </li>
           <li style="margin-left:1200px" class="nav-item">
            <a class="nav-link" @click.prevent="doLogout" v-if="isLogin">Logout</a>
          </li>

        </ul>
      </div>
    </nav>
</template>

<script>

export default {
    name: "Navbar",
    created(){
        if(localStorage.getItem("access_token")) this.$store.commit("set_isLogin", true)
        else this.$store.commit('set_isLogin', false)
    },
    computed: {
        isLogin (){
            return this.$store.state.isLogin
        }
    },
    methods: {
        doLogout(){
            localStorage.clear()
            this.$store.commit('set_isLogin', false)
            this.$router.push('/login')
        },
        addTask(){
            this.$router.push('/tasks')
        }
    }
}


</script>

<style>

</style>