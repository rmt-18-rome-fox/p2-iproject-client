<template>
  <div class="container">
    <div class="text-center my-3">
      <router-link to="/auth/register">Back</router-link>
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

      <div class="col-6 mb-5">
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
          this.$router.push("/auth/login");
        })
        .catch((err) => {
          console.log(err);
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

<style scoped></style>
