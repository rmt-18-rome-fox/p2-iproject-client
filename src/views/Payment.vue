<template>
<div>
  <navbar />
  <table-payments class="container mt-5"/>
  <div class="container d-flex justify-content-center mt-5">
    <button
      class="btn btn-primary"
      @click="payStripe"
    >Payment</button>
  </div>
</div>
</template>

<script>
// import axios from 'axios'
import { server } from '../../apis/axios'
import Navbar from '../components/Navbar.vue'
import TablePayments from '../components/TablePayments.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Payment',
  components: {
    Navbar,
    TablePayments
  },
  data() {
    return {
      UserId: 0
    }
  },
  created() {
  },
  methods: {
    ...mapActions(['']),
    async payStripe() {
      try {
        const result = await server.get(`/payment/${this.profileData.UserId}`, {
          headers: {
            access_token: this.access_token
            // access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpYWtoYXJpc21hQGdtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2Mzk1NDk3NjV9.kfEYaJM8N9G7KqGUSsdKwk4iZun83LeKjuqRPX7--os'
          }
        })
        
        const amount = result.data.Organization.price
        const stripe = [{
          price_data: {
            currency: 'idr',
            product_data: {
              name: result.data.Organization.name,
              description: result.data.Organization.description
            },
            unit_amount: amount
          },
          quantity: 1
        }]
        const idPayment = 1

        const data = {
          idPayment,
          stripe
        }

        this.postStripe(data) 
      } catch (error) {
        console.log(error)
      }
    },
    async postStripe (data) {
      try {
        const result = await server.post('/payment/stripe-checkout-session', 
          data, 
          {
            headers: {
              access_token: this.access_token
              // access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpYWtoYXJpc21hQGdtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2Mzk1NDk3NjV9.kfEYaJM8N9G7KqGUSsdKwk4iZun83LeKjuqRPX7--os'
            }
          }
        )
        
        window.location.href = result.data.url
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    ...mapState(['profileData', 'access_token'])
  }
}
</script>