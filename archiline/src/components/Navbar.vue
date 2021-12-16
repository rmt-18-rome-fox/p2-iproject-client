<template>
  <div style="width: 100vw; position: sticky; top: 0px; background-color: #2C2828" class="d-flex flex-row px-2 pt-2 mb-2">
      <div class="col-3 d-flex justify-content-start align-items-center">
        <a href = '' @click.prevent="toHome" class="h1" style="color:#EEEEEE"><img src="../assets/ArchiLine.png"></a>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center hover-bg">
        <a href = '' @click.prevent="toHome" class="h3" style="color:#EEEEEE">Home</a>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center hover-bg">
        <a href = '' @click.prevent="toArchitects" class="h3" style="color:#EEEEEE">Architects</a>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center hover-bg">
        <a href = '' @click.prevent="toPortofolios" class="h3" style="color:#EEEEEE">Portofolios</a>
      </div>
      <div class="col-3 d-flex justify-content-end align-items-center">
          <div>
          <img src="https://cf.shopee.co.id/file/1740a66d75c848b38c85ade20a2505e2" width="45vw" height="45vh" style="border-radius: 50%" class="mb-2" v-if="!profile.imageUrl">
          <img :src="profile.imageUrl" width="45vw" height="45vh" style="border-radius: 50%" class="mb-2" v-if="profile.imageUrl">
          </div>
        <b-dropdown id="dropdown-1" text="Profile" variant="light" class="mx-2 mb-2" style="width: 10vw;">
            <b-dropdown-item @click.prevent="toProfile">Edit Profile</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click.prevent="onLogout">Logout</b-dropdown-item>
        </b-dropdown>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {
  name: 'Navbar',
  created () {
    this.$store.dispatch('fetchCustomerProfile')
  },
  methods: {
    toHome () {
      this.$router.push('/customer')
    },
    toArchitects () {
      console.log('hehe')
      this.$router.push('/customer/architects')
    },
    toPortofolios () {
      this.$router.push('/customer/portofolios')
    },
    toProfile () {
      this.$router.push('/customer/profile')
    },
    onLogout () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
      Toast.fire({
        icon: 'success',
        title: 'Success Logout'
      })
    }
  },
  computed: {
    profile () {
      return this.$store.state.customerProfile
    }
  }
}
</script>

<style>
    a :hover {
        cursor: pointer;
        text-decoration: none;
    }
    a {
        text-decoration: none;
    }
</style>
