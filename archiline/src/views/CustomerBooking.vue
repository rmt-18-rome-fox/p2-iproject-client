<template>
<div>
  <navbar></navbar>
  <h1>INI DI CUSTOMER BOOKING</h1>
  <form class="d-flex flex-column" style="width: 100vw" @submit.prevent="onBook">
    <label for="startDate">Start Date</label>
    <datetime type="datetime" name="startDate" id="startDate" v-model="startDate" class="w-25" style="margin: auto"></datetime>
    <!-- <input type="date" name="startDate" id="startDate" v-model="startDate" class="w-25" style="margin: auto"> -->
    <label for="session">Session (1 session is 1 hour)</label>
    <input type="integer" name="session" id="session" v-model="session" class="w-25" style="margin: auto">
    <label for="notes">Notes</label>
    <input type="text" name="notes" id="notes" v-model="notes" class="w-25" style="margin: auto">
    <label for="price">Price</label>
    <input type="integer" name="price" id="price" :value="bookFormData.Profile.price" disabled class="w-25" style="margin: auto">
    <button type="submit" class="btn btn-primary w-25 mt-4" style="margin: auto">Proceed to Payment</button>
    <!-- {{bookFormData}} -->
  </form>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'CustomerBooking',
  components: {
    Navbar
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
        })
        .catch(err => {
          console.log(err)
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
