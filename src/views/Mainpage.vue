<template>
<div class="container">
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
</svg>
<div class="container" v-if="currentBook.name !== 'JsonWebTokenError'">
    <div class="alert alert-success d-flex align-items-center" role="alert" v-for="book in currentBook" v-bind:key="book.id">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
            Booking ID:{{ book.id }} | Booking Date: {{ dateFormating(book.dateStart) }} ==> {{ dateFormating(book.dateEnd) }}
        </div>
    </div>
</div>
    <div class="card mb-3" style="width: 100%;" v-for="book in bookinglist" v-bind:key="book.id">
        <div class="row g-0">
            <div class="col-md-4">
              <img :src="book.imageUrl" class="col-md-12">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ book.name }}</h5>
                <p class="card-text">{{ formatRupiah(book.price) }} / day</p>
                <div>
                <a class="btn btn-primary" href="#" v-on:click.prevent="goBooking(book.id)">Booking</a>
                <a class="btn btn-success" href="#" v-on:click.prevent="goChat(book.id)">Chat Now</a>
                </div>
                <p class="card-text"><small class="text-muted">Date Created {{ dateFormating(book.createdAt) }}</small></p>
              </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Mainpage',
  created () {
    this.$store.dispatch('fetchBooking')
    this.$store.dispatch('fetchCurrentBook')
  },
  methods: {
    goBooking (id) {
      this.$router.push({ path: `/booking/${id}` })
    },
    goChat (id) {
      this.$router.push({ path: `/socket/${id}` })
    },
    dateFormating (input) {
      const date = new Date(input)
      const day = (date.getDay())
      const month = (date.getMonth())
      const year = (date.getFullYear())
      return `${day}-${month}-${year}`
    },
    formatRupiah (data) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data)
    }
  },
  computed: {
    bookinglist () {
      return this.$store.state.bookinglist
    },
    currentBook () {
      return this.$store.state.currentBook
    }
  }
}
</script>

<style>

</style>
