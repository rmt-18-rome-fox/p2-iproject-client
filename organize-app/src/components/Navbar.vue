<template>
  <nav class="navbar-expand-lg navbar-light bg-light">
    
      <router-link class="navbar-brand font-weight-bold" to="/">Organize App</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          
                <li class="nav-item active">
                  <router-link class="nav-link" to="/login">Login<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/register">Register</router-link>
                </li>
                <li  class="nav-item">
                    <router-link class="nav-link" to="/TaskList">Task List</router-link>
                </li>
      
          
           <li style="margin-left:1000px" class="nav-item">
            <a class="nav-link" @click.prevent="doLogout" >Logout</a>
          </li>

        </ul>
      </div>
    </nav>
</template>

<script>

export default {
    name: "Navbar",
    
}
</script>

<style>

</style>