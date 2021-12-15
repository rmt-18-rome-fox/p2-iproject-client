<template>
    <nav id="nav" class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container-xl container-xxl">
        <router-link class="navbar-brand float-left logo-wrapper" to="/">
              <img src="../assets/brandLogo.png" alt="">
        </router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li v-if="this.isLog" class="nav-item">
            <router-link class="nav-link pr-3" to="/adopt-list">Adopted List</router-link>
          </li>
          <li v-if="this.isLog" class="nav-item">
            <router-link class="nav-link pr-3" to="/status-transaction">Status Transaction</router-link>
          </li>
          <li v-if="!this.isLog" class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li v-if="!this.isLog" class="nav-item">
            <router-link class="nav-link pr-3" to="/register">Sign up</router-link>
          </li>
          <li v-if="this.isLog" class="nav-item">
            <a href="#" @click.prevent="onLogout" class="nav-link pr-3">Sign Out</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "NavigateBar",
    computed: {
    
    ...mapState(["isLog"]),
  
  },
  methods: {
    ...mapMutations(["LOG_IN"]),

    onLogout(){
      localStorage.clear();
      this.LOG_IN(false)
      this.$router.push("/login");
    }
  },
}
</script>

<style>
.logo-wrapper ~ ul li a, 
.logo-wrapper {
  font-size: 14px;
}
.logo-wrapper img {
    width: 100%;
    height: auto;
    max-width: 188px;
}
</style>