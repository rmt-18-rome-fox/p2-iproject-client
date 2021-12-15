<template>
<div style="height: 100vh">
  <h1>INI DI LOGIN PAGE</h1>
  <form class="d-flex flex-column w-50 justify-content-center align-items-center" @submit.prevent="onLogin">
      <label for="email">Email</label>
      <input type="email" id='email' name='email' placeholder="Email here..." v-model="email" style="width: 20vw">
      <label for="password">Password</label>
      <input type="password" id='password' name='password' placeholder="Password here..." v-model="password" style="width: 20vw">
      <button class="btn btn-primary">Sign In</button>
  </form>
</div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('onLogin', payload)
        .then(() => {
          this.$router.push('/customer')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>

</style>
