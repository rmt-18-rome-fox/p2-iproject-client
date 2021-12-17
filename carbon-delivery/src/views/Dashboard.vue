<template>
  <div>
      <dashtable></dashtable>
  </div>
</template>

<script>
import Dashtable from '../components/Dashtable.vue'

export default {
  components: { Dashtable },
  name: 'Dashboard',
  data () {
      return {
          error: ""
      }
  },
  methods: {
  },
  created() {
    this.$store.dispatch('fetchHistory')
    .then(() => {

    })
    .catch((err) => {
        this.error = err.response.data.message
    })
  }
}
</script>

<style>

</style>