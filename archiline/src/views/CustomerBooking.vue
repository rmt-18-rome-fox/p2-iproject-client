<template>
<div style="min-height: 100vh; overflow: hidden; background-image: url(https://media.istockphoto.com/photos/white-texture-background-picture-id926993450?b=1&k=20&m=926993450&s=170667a&w=0&h=vxWViBkXgTQnSO4UTtU26hLlscn9FTKYS1Jx6f-_slI=)" class="mb-0">
  <architect-navbar></architect-navbar>
      <div class="col-12 d-flex flex-column justify-content-center align-items-center" style="height: 80vh; ">
  <form class="d-flex flex-column justify-content-center align-items-center p-5" @submit.prevent="onBook" style="border: 1px solid black; border-radius: 20px; background-color: #2C2828; color:#EEEEEE;">
    <label for="startDate" class="mb-2" style="font-size: 40px">Start Date</label>
    <datetime type="datetime" name="startDate" id="startDate" v-model="startDate" class="w-5" style="margin: auto"></datetime>
    <!-- <input type="date" name="startDate" id="startDate" v-model="startDate" class="w-25" style="margin: auto"> -->
    <label for="session" class="mb-2" style="font-size: 40px">Session (1 session is 1 hour)</label>
    <input type="integer" name="session" id="session" v-model="session" style="width: 20vw; font-size: 20px" class="mb-2 p-2">
    <label for="notes" class="mb-2" style="font-size: 40px">Notes</label>
    <input type="text" name="notes" id="notes" v-model="notes" style="width: 20vw; font-size: 20px" class="mb-2 p-2">
    <label for="price" class="mb-2" style="font-size: 40px">Price</label>
    <input type="integer" name="price" id="price" :value="bookFormData.Profile.price" disabled style="width: 20vw; font-size: 20px" class="mb-2 p-2">
    <button type="submit" class="btn btn-primary mt-3" style="width: 20vw; font-size: 20px">Proceed to Payment</button>
    <!-- {{bookFormData}} -->
  </form>
</div>
</div>

</template>

<script>
import ArchitectNavbar from '../components/ArchitectNavbar.vue'
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
  name: 'CustomerBooking',
  components: {
    ArchitectNavbar
  },
  data () {
    return {
      startDate: '',
      session: null,
      notes: ''
    }
  },
  created () {
    const payload = this.$route.params.architectId
    this.$store.dispatch('fetchBookForm', payload)
  },
  computed: {
    bookFormData () {
      return this.$store.state.bookForm
    }
  },
  methods: {
    onBook () {
      const payload = {
        startDate: this.startDate,
        session: this.session,
        notes: this.notes,
        ArchitectId: this.$route.params.architectId
        // startDate: '2021-12-15T16:20:00',
        // session: 1,
        // notes: 'hehe'
      }
      console.log(payload)
      this.$store.dispatch('onBook', payload)
        .then((data) => {
          window.snap.pay(data.token)
          Toast.fire({
            icon: 'success',
            title: 'Payment Success'
          })
          // console.log(data)
        })
        .catch(err => {
          // console.log(err)
          Swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    }
  }
}
</script>

<style>
    .vdatetime-input {
        width: 25vw
    }
</style>
