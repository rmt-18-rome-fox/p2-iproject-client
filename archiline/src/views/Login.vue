<template>
<div style="height: 100vh; overflow: hidden; background-image: url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)" class="d-flex">
    <div class="col-6 d-flex flex-column justify-content-center align-items-center" style="height: 100vh; ">
        <form class="d-flex flex-column justify-content-center align-items-center p-5" @submit.prevent="onLogin" style="border: 1px solid black; border-radius: 20px; background-color: #2C2828; color:#EEEEEE">
            <label for="email" class="mb-2" style="font-size: 40px">Email</label>
            <input type="email" id='email' name='email' placeholder="Email here..." v-model="email" style="width: 20vw; font-size: 20px" class="mb-2 p-2">
            <label for="password" class="mb-2" style="font-size: 40px">Password</label>
            <input type="password" id='password' name='password' placeholder="Password here..." v-model="password" style="width: 20vw; font-size: 20px" class="mb-4 p-2">
            <button type='submit' class="btn btn-outline-light mb-3" style="width: 20vw; font-size: 20px;">Sign In</button>
            <h1 class="h2 mb-3">Doesn't have account yet?</h1>
            <button type='button' class="btn btn-outline-light mb-3" style="width: 20vw; font-size: 20px" @click.prevent="toRegister">Sign Up</button>
        </form>
    </div>
    <div class="col-6" style="height: 100vh">
        <img src="https://i.pinimg.com/originals/7e/55/11/7e551131bef5a7c79240789345013b3b.jpg" style="height: 100vh; width: 50vw">
    </div>
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
  created () {
    const param = this.$route.query.validate
    if (param) {
      this.$store.dispatch('onValidate', param)
        .then(() => {
          this.$router.push('/login')
        })
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
          if (localStorage.getItem('role') === 'customer') {
            this.$router.push('/customer')
          } else if (localStorage.getItem('role') === 'architect') {
            this.$router.push('/architect')
          }
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    toRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>

</style>
