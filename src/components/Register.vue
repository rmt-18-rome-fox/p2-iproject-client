<template>
  <form @submit.prevent="doRegister" ref="formRegister">
    <label for="chk" aria-hidden="true">Sign up</label>
    <input
      v-model="name"
      class="inputCustom customInput"
      type="text"
      name="txt"
      placeholder="Username"
    />
    <input
      v-model="email"
      class="inputCustom customInput"
      name="email"
      placeholder="Email"
    />
    <input
      v-model="password"
      class="inputCustom customInput"
      type="password"
      name="pswd"
      placeholder="Password"
    />
    <div class="file-input">
      <input
        type="file"
        name="file-input"
        id="file-input"
        class="file-input__input"
      />
      <label class="file-input__label" for="file-input">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="upload"
          class="svg-inline--fa fa-upload fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
          ></path>
        </svg>
        <span>Upload Photo file</span></label
      >
    </div>

    <button style="width: 60%; height: 40px;">Sign up</button>
  </form>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: "Register",
  data () {
      return {
          name: "",
          email: "",
          password: "",
          photoUrl: "",
      }
  },
  methods: {
      doRegister () {
          const payload = {
              username: this.username,
              email: this.email,
              password: this.password,
              photoUrl: this.photoUrl,
          }
          this.$store.dispatch(`doRegister`, payload)
          .then(({data}) => {
              // console.log(data, `data doRegister on Register`)
              this.$router.push(`/login`),
              this.$store.commit(`SET_ISLOGIN`, false)
              this.$refs.formRegister.reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1500
              })
          }).catch((err) => {
              // console.log(err.response.data.message)
              this.$refs.formRegister.reset();
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1500
              })
          });
      }
  }
};
</script>

<style>
</style>