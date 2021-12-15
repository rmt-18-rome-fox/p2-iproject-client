<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png" height="75" alt="" srcset="" />
      <a class="navbar-brand" href="#">CoffPow</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="toFormAdd" v-if="roleUser == 'admin'">Add New Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="toCart" v-if="roleUser !== 'admin'">YourCart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="toLogout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toLogout() {
      localStorage.clear();
      this.$store.commit('SET_IS_LOGIN', false);
      this.$router.push('/login');
    },
    toFormAdd() {
      this.$router.push('/formadd');
    },
    toCart() {
      this.$router.push('/cart');
    },
  },
  data() {
    return {
      roleUser: '',
    };
  },
  created() {
    this.roleUser = localStorage.roleUser;
  },
};
</script>

<style>
.navbar {
  background-color: #bfd973;
}
</style>
