<template>
  <tr class="text-center text-white shadow-lg shadow-[#53354A]">
    <td class="py-4">{{index + 1}}</td>
    <td class="">{{history.description}}</td>
    <td class="">{{history.distance}}</td>
    <td class="">{{history.carbonEmitted}}</td>
  </tr>
</template>

<script>
export default {
  name: 'Dashrow',
  props: ['history', 'index']
}
</script>

<style>

</style>