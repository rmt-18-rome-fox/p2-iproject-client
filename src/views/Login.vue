<template>
  <div class="container">
    <div style="margin: 10px">
        <h2 style="text-align: center">Login</h2>
    </div>
    <form @submit.prevent="login">
        <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="text" class="form-control" id="email" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="text" id="password" class="form-control" placeholder="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form><br>

    <p>Feel like you don't belong? Register <a href="/register" @click.prevent="showRegister">here</a></p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(() => {
            this.$router.push('/')
        })

      this.email = ''
      this.password = ''
    },
    showRegister: function () {
        this.$router.push('register')
    }
  }
}
</script>

<style>

</style>