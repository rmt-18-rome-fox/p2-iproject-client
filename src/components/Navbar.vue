<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="shadow-sm">
      <div class="container row mx-auto">
        <div class="col-3 d-flex justify-content-start">
          <b-navbar-brand
            ><img
              src="https://ik.imagekit.io/johannes/8ook_logo_0iX2U_UeM.png?updatedAt=1638802213065"
              alt="8ook Logo"
              width="50px"
              height="60px"
          /></b-navbar-brand>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center">
          <b-navbar-nav style="font-size: 18px">
            <b-nav-item>
              <button
                type="button"
                class="btn btn-dark rounded-pill px-3"
                style="background: rgba(70, 62, 135, 1); border: white"
              >
                <router-link to="/" style="color: white" exact>
                  <font-awesome-icon :icon="['fas', 'home']" /> &nbsp; Home
                </router-link>
              </button>
            </b-nav-item>
            <b-nav-item>
              <button
                type="button"
                class="btn btn-dark rounded-pill px-3"
                style="background-color: rgba(70, 62, 135, 1); border: white"
              >
                <router-link
                  exact
                  to="/library"
                  style="color: white"
                  text-decoration:none
                >
                  <font-awesome-icon :icon="['fas', 'book']" /> &nbsp; Library
                </router-link>
              </button>
            </b-nav-item>
          </b-navbar-nav>
        </div>
        <div class="col-3 d-flex justify-content-end align-items-center">
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                Howdy, Johannes &nbsp;
                <b-avatar
                  src="https://semantic-ui.com/images/avatar2/small/rachel.png"
                  size="3.3rem"
                  style="border: 2px solid rgba(70, 62, 135, 1)"
                ></b-avatar>
              </template>
              <b-dropdown-item href="#">
                <div class="d-flex justify-content-between align-items-center">
                  <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                  &nbsp; Cart
                </div>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>
                <div
                  class="d-flex justify-content-between align-items-center"
                  @click.prevent="doLogout"
                >
                  <font-awesome-icon :icon="['fas', 'sign-out-alt']" />&nbsp;
                  Sign Out
                </div>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>

        <!-- Right aligned nav items -->
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    doLogout() {
      localStorage.clear();
      this.$router.push("/auth/login");
    },
  },
};
</script>

<style scope>
a.router-link-exact-active {
  text-decoration: none;
}

a.router-link {
  text-decoration: none;
}
</style>
