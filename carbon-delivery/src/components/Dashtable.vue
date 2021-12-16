<template>
<div class="flex justify-center h-auto">
  <table>
      <thead>
          <tr class="text-center text-white shadow-lg shadow-[#53354A] mb-24 bg-[#903749]">
              <th class="mx-4 px-4 self-center justify-self-center align-center rounded-tl-lg">No</th>
              <th class="col-span-2 mx-4 px-4">Description</th>
              <th class="col-span-2 mx-4 px-4">Distance (Km)</th>
              <th class="col-span-2 mx-4 px-4 rounded-tr-lg">Carbon Emitted (KgCO2)</th>
          </tr>
      </thead>
      <tbody>
          <dashrow v-for="(history, index) in histories" :key="history.id" :history="history" :index="index"></dashrow>
      </tbody>
  </table>
</div>
</template>

<script>
import Dashrow from './Dashrow.vue'

export default {
  name: 'Dashtable',
  components: { Dashrow },
  computed: {
      histories () {
          return this.$store.state.userHistory
      }
  }
}
</script>

<style>

</style>