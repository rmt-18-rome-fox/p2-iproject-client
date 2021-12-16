<template>
<div class="content">
  <img src="../assets/register-bg.jpg" class="bg-img" alt="">
  <div class="container-fluid">
    <div class="row">
      <div class="
        col-12
        min-vh-100
        d-flex
        flex-row
        justify-content-center
        align-items-center
      ">
        <div class="card-register">
          <h1 class="text-center font-weight-bold mt-3 mb-5">Tetangga</h1>
          <div>
            <h3 class="text-center font-weight-bold mb-3">Register Form</h3>
            <b-form @submit.prevent="submitRegister">
              <b-form-group
                id="group-email"
                label-for="email"
                description=""
              >
                <b-form-input
                  id="email"
                  v-model="formRegister.email"
                  type="email"
                  placeholder="Enter Email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="group-password"
                label-for="password"
              >
                <b-form-input
                  id="password"
                  v-model="formRegister.password"
                  type = "password"
                  placeholder="Enter Password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" block variant="primary">Register</b-button>
            </b-form>
            <p class="text-center mt-4">
              Already have an account ? go back to
              <router-link
                to="/"
              >
                Login!
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      formRegister: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['register', 'clearResponse']),
    ...mapMutations({ registered: 'MUTATE_IS_REGISTER' }),
    pageLogin () {
      this.$router.push({ path: '/' })
    },
    async submitRegister () {
      await this.register(this.formRegister)
      if (await this.isRegistered) {
        this.$toast.success('Success Register, you can login now !')
        this.$router.push('/login')
        this.registered(false)
      }
      if (await this.errorResponse) {
        const error = await this.errorResponse.message
        error.forEach(el => {
          this.$toast.error(el)
          this.clearResponse()
        })
      }
    }
  },
  computed: {
    ...mapState(['isRegistered', 'errorResponse'])
  }
}
</script>

<style lang='scss'>
.content{
  overflow: hidden;
  position: relative;
  h1{
    font-family: 'Pacifico', cursive;
    font-family: 'Press Start 2P', cursive;
  }
  .bg-img{
    height: 100%;
    min-width: 100vw;
    position: absolute;
  }
  .card-register{
    width: 400px;
    background-color: white;
    height: auto;
    position: absolute;
    padding: 3em;
    margin: auto 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
