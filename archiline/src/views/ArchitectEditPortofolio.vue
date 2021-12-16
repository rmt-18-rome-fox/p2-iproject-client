<template>
<div>
    <architect-navbar></architect-navbar>
    <Form :titleValue="portofolio.title" :descriptionValue="portofolio.description" :tagsValue="portofolio.Tags" @onSubmit="onSubmit"></Form>
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
  name: 'ArchitectEditPortofolio',
  components: {
    ArchitectNavbar,
    Form
  },
  created () {
    const payload = this.$route.params.portofolioId
    this.$store.dispatch('fetchEditPortofolioForm', payload)
  },
  computed: {
    portofolio () {
      return this.$store.state.portofolioEditForm
    }
  },
  methods: {
    onSubmit (payload) {
      payload.id = this.portofolio.id
      this.$store.dispatch('editPortofolio', payload)
        .then(() => {
          this.$router.push({ path: '/architect' })
          Toast.fire({
            icon: 'success',
            title: 'Success Edit Portofolio'
          })
        })
        .catch(err => {
          console.log(err.response.data)
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

</style>
