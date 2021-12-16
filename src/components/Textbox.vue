<template>
  <div>
    <p class="message"
      v-for="(msg, idx) in messages"
      :key="idx"
    >({{ time }})
    {{ msg }} </p>
  </div>
</template>

<script>
export default {
  name: 'Textbox',
  computed: {
    messages: function () {
      return this.$store.state.messages
    },
    identifier: function () {
      return this.$store.state.identifier
    },
    time: function () {
      const date = new Date()
      const hour = date.getHours() + 1
      const minute = date.getMinutes() + 11
      return `${hour}:${minute}`
    }
  }
}
</script>

<style>
p {
  width: 240px;
}
</style>
