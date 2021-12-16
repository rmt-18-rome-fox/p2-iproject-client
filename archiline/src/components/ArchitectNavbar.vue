<template>
  <div style="width: 100vw; position: relative; top: 0px; background-color: #2C2828" class="d-flex flex-row px-2 pt-2 mb-2">
      <div class="col-3 d-flex justify-content-start align-items-center">
        <a href = '' @click.prevent="toHome" class="h1" style="color:#EEEEEE"><img src="../assets/ArchiLine.png"></a>
      </div>
      <div class="col-3 d-flex align-items-center justify-content-start hover-bg">
        <a href = '' @click.prevent="toHome" class="h3" style="color:#EEEEEE">Home</a>
      </div>
      <div class="col-3 d-flex align-items-center justify-content-end hover-bg">
        <a href = '' @click.prevent="toAddPortofolio" class="h3" style="color:#EEEEEE">Add Portofolios</a>
      </div>
      <div class="col-3 d-flex justify-content-end align-items-center">
          <!-- <div> -->
          <img src="https://cf.shopee.co.id/file/1740a66d75c848b38c85ade20a2505e2" width="45vw" height="45vh" style="border-radius: 50%" class="mb-2">
          <!-- <img :src="profile.imageUrl" width="45vw" height="45vh" style="border-radius: 50%" class="mb-2" v-else> -->
          <!-- </div> -->
        <b-dropdown id="dropdown-1" text="Profile" variant="light" class="mx-2 mb-2" style="width: 10vw;">
            <b-dropdown-item @click.prevent="toProfile">Edit Profile</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click.prevent="onLogout">Logout</b-dropdown-item>
        </b-dropdown>
      </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('fetchArchitectProfile')
  },
  methods: {
    toHome () {
      this.$router.push('/architect')
    },
    toAddPortofolio () {
      this.$router.push('/architect/portofolio/add')
    },
    toProfile () {
      this.$router.push('/architect/profile')
    },
    onLogout () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
    a :hover {
        cursor: pointer;
    }
</style>
