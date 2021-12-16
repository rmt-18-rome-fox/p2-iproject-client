<template>
<div>
  <architect-navbar></architect-navbar>
  <Form @onSubmit="onSubmit"></Form>
</div>
</template>

<script>
import ArchitectNavbar from '../components/ArchitectNavbar.vue'
import Form from '../components/Form.vue'

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
        })
    }
  }
}
</script>

<style>

</style>
