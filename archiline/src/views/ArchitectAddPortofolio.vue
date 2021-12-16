<template>
<div>
  <architect-navbar></architect-navbar>
  <Form @onSubmit="onSubmit"></Form>
</div>
</template>

<script>
import ArchitectNavbar from '../components/ArchitectNavbar.vue'
import Form from '../components/Form.vue'
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
  name: 'ArchitectAddPortofolio',
  components: {
    ArchitectNavbar,
    Form
  },
  methods: {
    onSubmit (payload) {
      this.$store.dispatch('addPortofolio', payload)
        .then(() => {
          this.$router.push({ path: '/architect' })
          Toast.fire({
            icon: 'success',
            title: 'Success Add Portofolio'
          })
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            title: 'Error',
            text: 'Bad Request',
            icon: 'error'
          })
        })
    }
  }
}
</script>

<style>

</style>
