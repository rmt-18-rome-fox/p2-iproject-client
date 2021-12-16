<template>
  <div>
    <p class="message"
      v-for="(msg, idx) in messages"
      :key="idx"
    >{{ identifier }}: {{ msg }} </p>
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
    }
  }
}
</script>

<style>
p {
  width: 240px;
}
</style>
