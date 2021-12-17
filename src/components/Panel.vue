<template>
  <div>
    <div>
      <input v-model="identifier">
      <button class="btn btn-outline-dark" @click="updateIdentifier">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  data: function () {
    return {
      identifier: 'your name here'
    }
  },
  methods: {
    updateIdentifier: function () {
      this.$store.commit('SET_IDENTIFIER', this.identifier)
      this.$fire({
        text: `Your identifier is set to ${this.identifier}`,
        type: 'success',
        timer: 2000
      })
    },
    finish: function () {
    }
  }
}
</script>

<style>

</style>
