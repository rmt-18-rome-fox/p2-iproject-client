<template>
  <div class="d-flex justify-content-center">
    <div class="fullbody d-flex align-items-center">
      <div class="card">
        <div class="card-header">
          <h3>Sign Up</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="submitRegister">
            <div class="d-grid gap-2">
              <div class="input-group form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="username"
                  v-model="formRegister.username"
                />
              </div>
              <div class="input-group form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="email"
                  v-model="formRegister.email"
                />
              </div>
              <div class="input-group form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="password"
                  v-model="formRegister.password"
                />
              </div>
              <div class="input-group form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="phoneNumber"
                  v-model="formRegister.phoneNumber"
                />
              </div>
              <div class="input-group form-group">
                <input
                  type="submit"
                  value="Register"
                  class="loginsubmit btn btn-dark w-100"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formRegister: {
        username: '',
        email: '',
        password: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    submitRegister () {
      this.$store.dispatch('registerUser', this.formRegister)
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
