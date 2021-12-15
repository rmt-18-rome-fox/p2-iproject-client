<template>
<div>
    <architect-navbar></architect-navbar>
    <Form :titleValue="portofolio.title" :descriptionValue="portofolio.description" :tagsValue="portofolio.Tags" @onSubmit="onSubmit"></Form>
</div>
</template>

<script>
import ArchitectNavbar from '../components/ArchitectNavbar.vue'
import Form from '../components/Form.vue'

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
        })
    }
  }
}
</script>

<style>

</style>
