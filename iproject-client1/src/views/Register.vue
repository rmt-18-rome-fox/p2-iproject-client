<template>
  <div class="semi-body-register d-flex">
    <div class="main-container-register d-flex m-5">
      <div class="container1-register m-5 d-flex flex-column col-3">
        <a href="https://www.freepnglogos.com/pics/coffee-logo-png" title="Image from freepnglogos.com"
          ><img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png" height="500" alt="coffee logo design creative idea logo elements"
        /></a>
        <img src="https://www.freepnglogos.com/pics/coffee-logo-png" alt="" srcset="" />
      </div>
      <div class="container2-register m-5 d-flex flex-column col-7">
        <h1>Register</h1>
        <br />
        <form class="col-8" @submit.prevent="toRegister">
          <!-- First Name input -->
          <div class="form-outline mb-4">
            <input type="text" id="inputFirstNameRegister" class="form-control" v-model="firstName" />
            <label class="form-label" for="inputFirstNameRegister">First Name</label>
          </div>

          <!-- Last Name input -->
          <div class="form-outline mb-4">
            <input type="text" id="inputLastNameRegister" class="form-control" v-model="lastName" />
            <label class="form-label" for="inputLastNameRegister">Last Name</label>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="inputEmailRegister" class="form-control" v-model="email" />
            <label class="form-label" for="inputEmailRegister">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="inputPasswordRegister" class="form-control" v-model="password" />
            <label class="form-label" for="inputPasswordRegister">Password</label>
          </div>

          <!-- Phone Number input -->
          <div class="form-outline mb-4">
            <input type="text" id="inputPhoneNumberRegister" class="form-control" v-model="phoneNumber" />
            <label class="form-label" for="inputPhoneNumberRegister">Phone Number</label>
          </div>

          <!-- Address input -->
          <div class="form-outline mb-4">
            <input type="text" id="inputAddressRegister" class="form-control" v-model="address" />
            <label class="form-label" for="inputAddressRegister">Address</label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn-signin btn btn-primary btn-block mb-4">Sign up</button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Back to <router-link class="to-login" to="/login">Login</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      phoneNumber: '',
    };
  },
  methods: {
    toRegister() {
      const payload = {
        email: this.email,
        password: this.password,
        username: this.username,
        phoneNumber: this.phoneNumber,
        address: this.address,
        firstName: this.firstName,
        lastName: this.lastName,
      };
      this.$store
        .dispatch('toRegister', payload)
        .then(() => {
          this.$router.push('/login');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.semi-body-register {
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  background-color: #fcf1cf;
}
.container1-register {
  justify-content: center;
  align-items: center;
}
.container2-register {
  justify-content: center;
  align-items: center;
  display: flex;
}
.main-container-register {
  background-color: #bfd973;
  width: 75vw;
  /* height: 75vh; */
  border-radius: 40px;
}
.container2-register h1 {
  color: #4b450e;
}
.container2-register .btn-signin {
  background-color: #4b450e;
  border-color: #4b450e;
}
.container2-register .btn-signin:hover {
  background-color: #dbb736;
  border-width: 1px;
  color: #4b450e;
  font-weight: bold;
}
.container2-register .to-login {
  color: #4b450e;
}
.container2-register .to-login:hover {
  font-weight: bold;
}
</style>
