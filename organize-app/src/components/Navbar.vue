<template>
  <nav class="navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand font-weight-bold text-dark" to="/"
      >Organize App</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav px-5 pb-2" style="width: 100%">
        <li class="nav-item active">
          <router-link v-if="!isLogin" to="/login" class="nav-link"
            >Login<span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link v-if="!isLogin" to="/register" class="nav-link"
            >Register</router-link
          >
        </li>
        <div style="width: 100%" class="d-flex justify-content-between px-5">
          <li class="nav-item">
            <router-link v-if="isLogin" to="/tasks" class="nav-link"
              >Add Task</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="doLogout" v-if="isLogin"
              >Logout</a
            >
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Navbar",
  created() {
    if (localStorage.getItem("access_token"))
      this.$store.commit("set_isLogin", true);
    else this.$store.commit("set_isLogin", false);
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    doLogout() {
      localStorage.clear();
      this.$store.commit("set_isLogin", false);
      this.$router.push("/login");
      Swal.fire("Good job!", "You clicked the button!", "success logout");
    },
    addTask() {
      this.$router.push("/tasks");
    },
  },
};
</script>

<style>
</style>