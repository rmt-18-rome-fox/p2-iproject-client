<template>
  <div class="col-12 col-lg-12">
      <div class="py-5">
          <h1>All Transactions</h1>
      </div>
      <div class="row">
        <div class="col-12">
            <div class="row">
              <b-card 
                v-for="data in historyData" :key="data.id"
                :title="data.order_id"
                tag="div"
                class="mb-2 mx-2 col-3"
              >
                <b-card-text> {{ data.status }} </b-card-text>
                <b-card-text> {{ data.ammount }} </b-card-text>
                <b-card-text> {{ data.createdAt }} </b-card-text>
                <button @click.prevent="OnRefreshStatus(data.order_id)"> Refresh Status </button>
              </b-card>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2"
export default {
  name: "StatusTransactions",
  data(){
    return {

    }
  },
  created(){
    this.onFetchHistory();
  },
  methods: {
    ...mapActions(["getAllStatus", "refreshStatus"]),

      async onFetchHistory() {
          try {

              await this.getAllStatus()

          } catch (error) {
              console.log(error)
          }
      },
      async OnRefreshStatus(id){
        try {

          await this.refreshStatus(id)

            if(this.allError.msg) throw { err: this.allError }
            if (this.statusRefresh.result) {
                const success = `Hi, Status Order ID ${id} has been updated`
                this.alertSuccess(success)
                this.onFetchHistory()
            } else {
                this.$router.push("/adopt-list");
            }

        } catch (error) {
          this.alertError(error)
        }
      },
      alertSuccess(string){
          Swal.fire({
              position: "top-end",
              text: `${string}`,
              width: 300,
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
          })
      }, 
      alertError(error){
          Swal.fire({
              title: `Oops...`,
              icon: `info`,
              text: `${error.err.msg}`,
              width: 600,
              padding: '3em',
              background: '#fff url(https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif)',
              footer: `Status: ${error.err.status}`,
          })
      },
  },
  computed: {
    ...mapState(["historyData","statusRefresh", "allError"]),
  }
}
</script>

<style>

</style>
