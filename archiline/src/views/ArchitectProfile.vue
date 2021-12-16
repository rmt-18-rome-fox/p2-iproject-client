<template>
<div style="min-height: 100vh; overflow: hidden; background-image: url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)" class="mb-0">
    <architect-navbar></architect-navbar>
    <div class="col-12 d-flex flex-column justify-content-center align-items-center" style="height: 89vh; ">
        <form class="d-flex flex-column justify-content-center align-items-center px-5 py-2" @submit.prevent="onSubmit" style="border: 1px solid black; border-radius: 20px; background-color: #2C2828; color:#EEEEEE">
            <label for="name" class="mb-2" style="font-size: 35px">Name</label>
            <input type="text" id='name' name='name' placeholder="Name here..." v-model="profile.name" style="width: 20vw; font-size: 15px" class="mb-2 p-2">
            <label for="phoneNumber" class="mb-2" style="font-size: 35px">Phone Number</label>
            <input type="text" id='phoneNumber' name='phoneNumber' placeholder="Phone Number here..." v-model="profile.phoneNumber" style="width: 20vw; font-size: 15px" class="mb-2 p-2">
            <label for="address" class="mb-2" style="font-size: 35px">Address</label>
            <input type="text" id='address' name='address' placeholder="Address here..." v-model="profile.address" style="width: 20vw; font-size: 15px" class="mb-2 p-2">
            <label for="description" class="mb-2" style="font-size: 35px">Description</label>
            <input type="text" id='description' name='description' placeholder="Description here..." v-model="profile.description" style="width: 20vw; font-size: 15px" class="mb-2 p-2">
            <label for="price" class="mb-2" style="font-size: 35px">Consultation Price</label>
            <input type="integer" id='price' name='price' placeholder="price here..." v-model="profile.price" style="width: 20vw; font-size: 15px" class="mb-2 p-2">
            <label for="file" class="mb-2" style="font-size: 35px">File</label>
            <input type="file" id='file'  name='file' ref="file" @change.prevent="handleDataFile" style="width: 20vw; font-size: 15px" class="mb-2 p-2">

            <button type='submit' class="btn btn-outline-light mb-3" style="width: 20vw; font-size: 15px;">Edit Profile</button>
            <button type='button' class="btn btn-outline-light mb-3" style="width: 20vw; font-size: 15px" @click.prevent="toHome">Back</button>
        </form>
    </div>
</div>
</template>

<script>
import ArchitectNavbar from '../components/ArchitectNavbar.vue'

export default {
  name: 'ArchitectProfile',
  components: {
    ArchitectNavbar
  },
  created () {
    this.$store.dispatch('fetchArchitectProfile')
  },
  methods: {
    toHome () {
      this.$router.push('/architect')
    },
    onSubmit () {
      this.$store.dispatch('editProfileArchitect', this.profile)
        .then(() => {
          this.$router.push('/architect')
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleDataFile () {
      this.profile.file = this.$refs.file.files[0]
    }
  },
  computed: {
    profile () {
      return this.$store.state.architectProfile
    }
  }
}
</script>

<style>

</style>
