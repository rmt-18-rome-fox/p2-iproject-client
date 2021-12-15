<template>
  <button
    @click="payStripe"
  >Payment</button>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Payment',
  methods: {
    async payStripe() {
      try {
        const result = await axios.get('http://localhost:5000/payment/2', {
          headers: {
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpYWtoYXJpc21hQGdtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2Mzk1NDk3NjV9.kfEYaJM8N9G7KqGUSsdKwk4iZun83LeKjuqRPX7--os'
          }
        })
        console.log(result.data);
        const amount = result.data.Organization.price
        const data = [{
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

        this.postStripe(data) 
      } catch (error) {
        console.log(error)
      }
    },
    async postStripe (data) {
      try {
        const result = await axios.post('http://localhost:5000/payment/stripe-checkout-session', 
          data, 
          {
            headers: {
              access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpYWtoYXJpc21hQGdtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2Mzk1NDk3NjV9.kfEYaJM8N9G7KqGUSsdKwk4iZun83LeKjuqRPX7--os'
            }
          }
        )
        
        window.location.href = result.data.url
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>