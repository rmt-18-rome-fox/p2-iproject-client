<template>
  <div class="about">
    <h1>Rent this Car now !</h1>
    <div class="card mb-3" style="width: 100%;">
        <div class="row g-0">
            <div class="col-md-4">
            <img :src="carById.imageUrl">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{{ carById.name }}</h5>
                <p class="card-text">{{ formatRupiah(carById.price) }} / day</p>
                <p class="card-text"><small class="text-muted">Date Created {{ dateFormating(carById.createdAt) }}</small></p>
                <p class="card-text">Total Price : {{ formatRupiah(totalPrice) }}</p>
            </div>
            </div>
        </div>
    </div>
<form action="/action_page.php" v-on:submit.prevent="datenya">
  <label for="birthday">Booking Date</label>
  <input type="date" id="birthday" name="birthday" v-model='dateStart' v-on:change="priceCalculate">
  <input type="date" id="birthday" name="birthday" v-model='dateEnd'  v-on:change="priceCalculate">
  <input type="submit">
</form>
  </div>
</template>
<script>

export default {
  data () {
    return {
      dateStart: '',
      dateEnd: '',
      totalPrice: ''
    }
  },
  methods: {
    datenya () {
      const payload = {
        id: this.$route.params.id,
        dateStart: new Date(this.dateStart),
        dateEnd: new Date(this.dateEnd)
      }
      this.$store.dispatch('bookingCar', payload)
      this.$router.push({ path: '/mainpage' })
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
    },
    priceCalculate () {
      if (this.dateStart && this.dateEnd) {
        this.totalPrice = (this.carById.price * ((new Date(this.dateEnd) - new Date(this.dateStart)) / 86400000))
        // console.log((new Date(this.dateEnd) - new Date(this.dateStart))/86400000)
        // console.log(new Date(this.dateStart))
      }
    }
  },
  computed: {
    carById () {
      return this.$store.state.carById
    }
  },
  created () {
    this.$store.dispatch('fetchCarId', this.$route.params.id)
  }
}
</script>
