<template>
  <div>
    <router-link to="/auth/register">Back</router-link>
    <h1>Register</h1>
    <form class="row" @submit.prevent="doRegister">
      <div class="col-6">
        <label for="name">Name:</label>
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

      <div class="col-6">
        <label for="city">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="formRegister.password"
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-success">Register</button>
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

<style></style>
