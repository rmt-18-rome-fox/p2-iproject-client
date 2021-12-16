<template>
  <div class="page-heading">
    <div class="page-title">
      <div class="row">
        <div class="col-12 col-md-6 order-md-1 order-last">
          <h3>Payments Table</h3>
          <p class="text-subtitle text-muted">List of Payments</p>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <p>Payment List</p>
        </div>
        <div class="card-body">
          <img src="" alt="">
          <table class="table table-striped" id="tableOrganization">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Is Paid</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="orgs in organizationData" :key="orgs.id">
                <td>
                  {{orgs.name}}
                </td>
                <td>
                  {{orgs.description}}
                </td>
                <td>
                  {{orgs.isPaid}}
                </td>
                <td>
                  {{orgs.price}}
                </td>
                <td class="d-flex justify-content-center">
                  <button class="btn btn-primary mx-auto">Edit</button>
                  <button class="btn btn-outline-danger mx-auto">Delete</button>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "TablePayments",
  created() {
    this.fetchPayment()
  },
  methods: {
    ...mapActions(['fetchPayment'])
  },
  computed: {
    ...mapState(['paymentData'])
  },
}
</script>