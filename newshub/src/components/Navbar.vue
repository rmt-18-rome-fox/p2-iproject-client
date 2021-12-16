<template>
  <b-navbar id="navbar" class="container-fluid" toggleable="lg" type="dark">
    <b-navbar-brand href="">NewsHub</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- this is router-link, using to="/" -->
        <b-nav-text v-if="userRole === 'admin'" style="color: white">Your role: admin</b-nav-text>
        <b-nav-text v-if="userRole === 'user'" style="color: white">Your role: user</b-nav-text> &nbsp;&nbsp;&nbsp;&nbsp;
        <b-nav-item to="/" >Home</b-nav-item>
        <b-nav-item to="/dashboard" v-if="userRole === 'admin'">Dashboard</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" v-on:click.prevent="goToAdminLogin" v-if="!isLoggedIn">Sign In Admin</b-nav-item> &nbsp; 
        <b-nav-item href="#" v-on:click.prevent="goToLogin" v-if="!isLoggedIn">Sign In</b-nav-item> &nbsp; 
        <b-nav-item href="#" v-on:click.prevent="signOutHandler" v-if="isLoggedIn"
          >Sign Out</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {mapMutations, mapActions, mapState} from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      role : ""
    }
  },
  computed: {
    ...mapState(["isLoggedIn", "userRole"])
  },
  methods: {
      ...mapActions(["fetchNews"]),
      ...mapMutations({
      loginData: "MUTATE_ISLOGGEDIN",
      mutateAlternativeNews: "MUTATE_ALTERNATIVENEWS",
      mutateUserRole: "MUTATE_USERROLE"
    }),
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
    signOutHandler() {
      localStorage.clear();
      this.mutateUserRole("")
      this.loginData(false);
      this.$router.push({ name: "Login" });
    },
    goToAdminLogin() {
        this.$router.push({ name: "adminLogin" });
    }
  },
  created() {
    if (localStorage.getItem("access_data")){
      this.loginData(true)
    }
    if (localStorage.getItem("role") === "admin"){
      this.mutateUserRole("admin")
    }
  }
};
</script>

<style>
#navbar {
  background-color: #2c3e50;
  border-bottom: 3px solid red;
}
</style>
