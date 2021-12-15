<template>
  <div class="container">
    <div class="mt-4" id="navigator">
      <router-link to="/auth/register">
        <font-awesome-icon :icon="['fas', 'arrow-alt-circle-left']"
      /></router-link>
    </div>
    <h1 class="text-center">Register</h1>
    <form class="row mt-4" @submit.prevent="doRegister">
      <div class="col-6 mb-3">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="formRegister.name"
        />
      </div>
      <div class="col-6">
        <label for="city">City</label>
        <div>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
      </div>
      <div class="col-6">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formRegister.email"
        />
      </div>

      <div class="col-6 mb-4">
        <label for="city">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="formRegister.password"
        />
      </div>
      <div class="col-12 text-center">
        <button
          type="submit"
          class="btn btn-dark"
          style="background-color: #463e87; letter-spacing: 1px"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "RegisterCustomerForm",
  data() {
    return {
      selected: null,
      options: this.$store.state.cities,
      formRegister: {
        email: "",
        password: "",
        name: "",
      },
    };
  },
  methods: {
    fetchCities() {
      this.$store
        .dispatch("fetchCities")
        .then(({ data }) => {
          this.$store.commit("SUCCESS_FETCH_CITIES", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    doRegister() {
      const payload = {
        ...this.formRegister,
        ...this.selected,
        role: this.$route.params.role,
      };
      this.$store
        .dispatch("doRegister", payload)
        .then(({ data }) => {
          localStorage.user_id = data.id;
          localStorage.user_name = data.name;
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
            title: "Account registered succesfully",
          });
          this.$router.push("/auth/login");
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1000,
          });
        });
    },
  },
  created() {
    this.fetchCities();
  },
  computed: {
    role() {
      return this.$route.params.role;
    },
  },
};
</script>

<style scoped>
#navigator > a {
  color: #463e87 !important;
  font-size: 34px;
}
</style>
