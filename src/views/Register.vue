<template>
    <div class="container">
      <div style="margin: 10px">
        <h2 style="text-align: center">Register</h2>
      </div>
      <form @submit.prevent="register">
        <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="text" class="form-control" id="email" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="text" id="password" class="form-control" placeholder="Min. 8 characters">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form><br>

      <p>Having a dejavu? Sign-in <a href="/login" @click.prevent="showLogin">here</a></p>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    showLogin: function () {
      this.$router.push('login')
    },
    register: function () {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>

</style>