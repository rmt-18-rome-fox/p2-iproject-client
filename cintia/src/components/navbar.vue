<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"><h2 style="color:black">CINTIA</h2></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" v-if="this.$store.state.user == true"
            >Movies</b-nav-item
          >
          <b-nav-item href="#" v-if="this.$store.state.user == true"
            >Bookings</b-nav-item
          >
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content class="mx-4">
              <em>User</em>
            </template>
            <b-dropdown-item href="#" v-if="this.$store.state.user == true"
              >Sign Out</b-dropdown-item
            >
            <b-dropdown-item href="#" @click="toRegister" v-if="this.$store.state.user == false"
              >Register</b-dropdown-item
            >
            <b-dropdown-item href="#" @click="toLogin" v-if="this.$store.state.user == false"
              >Log In</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    methods:{
        toLogin(){
            this.$router.push('/login')
        },
        toRegister(){
            this.$router.push('/register')
        }
    }
};
</script>

<style></style>
