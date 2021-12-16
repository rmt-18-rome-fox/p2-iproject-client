<template>
  <div>
    <div>
      <input v-model="identifier">
      <button @click="updateIdentifier">Update</button>
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
    }
  }
}
</script>

<style>

</style>
