<template>
  <div style="overflow: hidden">
    <architect-navbar></architect-navbar>
    <div >
       <table class="d-flex flex-column col-10" style="margin: auto">
        <tr class="d-flex col-12 mb-3 pb-3" style="border-bottom: 1px black solid">
            <th class="col-1">No.</th>
            <th class="col-2">Title</th>
            <th class="col-3">Description</th>
            <th class="col-1">Tags</th>
            <th class="col-3">Image</th>
            <th class="col-2">Action</th>
        </tr>
        <tr v-for="portofolio in portofolios" :key="portofolio.No" class="col-12 mb-3 pb-3 d-flex flex-row align-items-center" style="border-bottom: 1px black solid">
            <td class="col-1">{{portofolio.No}}</td>
            <td class="col-2">{{portofolio.Title}}</td>
            <td class="col-3">{{portofolio.Description}}</td>
            <td class="col-1">
                <b-badge variant="primary" v-for="tag in portofolio.tags" :key="tag.id" class="mt-0 mb-2 mx-1">{{tag.name}}</b-badge>
            </td>
            <td class="col-3"><img :src="portofolio.Image" width="300px"></td>
            <td class="col-2">
                <b-button variant="outline-secondary" @click.prevent="toEditForm(portofolio.id)">Edit</b-button>
                <b-button variant="outline-danger" @click.prevent="onDelete(portofolio.id)">Delete</b-button>
            </td>
        </tr>
        </table>
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
  name: 'ArchitectHome',
  components: {
    ArchitectNavbar
  },
  created () {
    this.$store.dispatch('fetchArchitectPortofoliosByArchitect')
  },
  computed: {
    portofolios () {
      return this.$store.getters.tablePortofolio
    }
  },
  methods: {
    onDelete (payload) {
      this.$store.dispatch('deletePortofolio', payload)
        .then(() => {
          this.$store.dispatch('fetchArchitectPortofoliosByArchitect')
          Toast.fire({
            icon: 'success',
            title: 'Success Delete Portofolio'
          })
        })
        .catch(err => {
          Swal.fire({
            title: 'Error',
            text: err.response.data,
            icon: 'error'
          })
        })
    },
    toEditForm (payload) {
      console.log('hehehe')
      this.$store.dispatch('fetchEditPortofolioForm', payload)
        .then(() => {
          this.$router.push({ path: `/architect/portofolio/${payload}` })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
