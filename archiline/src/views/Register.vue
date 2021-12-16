<template>
<div style="height: 100vh; overflow: hidden background-image: url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)" class="d-flex">
  <div class="col-6 p-0" style="height: 100vh">
        <img src="https://www.arkitecture.org/wp-content/uploads/2018/07/Hi-resolusion-pic-of-Harbin-Opera-House-by-MAD-Architects-of-Harbin-in-China-02.jpg" style="height: 100vh; width: 50vw">
  </div>
  <div class="col-6 d-flex flex-column justify-content-center align-items-center" style="height: 100vh; ">
  <form class="d-flex flex-column justify-content-center align-items-center p-5" @submit.prevent="onRegister" style="border: 1px solid black; border-radius: 20px; background-color: #2C2828; color:#EEEEEE">
      <label for="email" class="mb-2" style="font-size: 40px">Email</label>
      <input type="email" id='email' name='email' placeholder="Email here..." v-model="email" style="width: 20vw; font-size: 20px" class="mb-2 p-2">
      <label for="password" class="mb-2" style="font-size: 40px">Password</label>
      <input type="password" id='password' name='password' placeholder="Password here..." v-model="password" style="width: 20vw; font-size: 20px" class="mb-2 p-2">
      <label for="Role" class="mb-2" style="font-size: 40px">Role</label>
      <select class="form-select mb-4 p-2" id='Role' v-model="role" style="width: 20vw; font-size: 20px">
        <option selected>Open this select menu</option>
        <option value="customer">Customer</option>
        <option value="architect">Architects</option>
      </select>
      <button type = 'submit' class="btn btn-outline-light mb-3" style="width: 20vw; font-size: 20px;">Sign Up</button>
      <h1 class="h2 mb-3">Already have account?</h1>
      <button type='button' class="btn btn-outline-light mb-3" style="width: 20vw; font-size: 20px" @click.prevent="toLogin">Sign In</button>
  </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      role: ''
    }
  },
  methods: {
    onRegister () {
      const payload = {
        email: this.email,
        password: this.password,
        role: this.role
      }
      this.$store.dispatch('onRegister', payload)
        .then(() => {
          this.$router.push({ path: '/login' })
        })
    },
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
