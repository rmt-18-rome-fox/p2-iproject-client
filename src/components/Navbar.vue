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
                Howdy, {{ userName }} &nbsp;
                <b-avatar
                  src="https://semantic-ui.com/images/avatar2/small/rachel.png"
                  size="3.3rem"
                  style="border: 2px solid rgba(70, 62, 135, 1)"
                ></b-avatar>
              </template>
              <b-dropdown-item v-if="role === 'customer'">
                <div
                  class="d-flex justify-content-between align-items-center"
                  @click.prevent="toCart"
                >
                  <font-awesome-icon :icon="['fas', 'shopping-basket']" />
                  &nbsp; Cart
                </div>
              </b-dropdown-item>
              <b-dropdown-item v-if="role === 'customer'">
                <div
                  class="d-flex justify-content-between align-items-center"
                  @click.prevent="toTransaction"
                >
                  <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                  &nbsp; Transaction
                </div>
              </b-dropdown-item>
              <b-dropdown-item v-if="role === 'seller'">
                <div
                  class="d-flex justify-content-between align-items-center"
                  @click.prevent="toTransaction"
                >
                  <font-awesome-icon :icon="['fas', 'store']" />
                  &nbsp; Sell Book
                </div>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item id="logoutSection">
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
      </div>
    </b-navbar>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Navbar",
  methods: {
    doLogout() {
      localStorage.clear();
      this.$router.push("/auth/login");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Logout success",
      });
    },
    toCart() {
      this.$router.push("/cart");
    },
    toTransaction() {
      this.$router.push("/transaction");
    },
  },
  computed: {
    userName() {
      return localStorage.user_name;
    },
    role() {
      return localStorage.user_role;
    },
  },
};
</script>

<style scope>
b-navbar {
  z-index: 200;
}

a:hover {
  text-decoration: none;
}

a.router-link-exact-active {
  text-decoration: none;
}

a.router-link {
  text-decoration: none;
}

#logoutSection:hover {
  color: red;
}
</style>
