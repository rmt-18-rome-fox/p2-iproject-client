<template>
  <div>
    <div class="textbox">
      <Textbox
      ></Textbox>
    </div>
    <div>
      <input v-model="chat">
      <button class="btn btn-outline-dark" @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import Textbox from '../components/Textbox.vue'

export default {
  name: 'Chatbox',
  components: {
    Textbox
  },
  data: function () {
    return {
      chat: ''
    }
  },
  sockets: {
    chat: function (data) {
      this.$store.commit('PUSH_MESSAGES_CLIENT', data)
    }
  },
  methods: {
    sendMessage: function () {
      this.$store.commit('PUSH_MESSAGES', this.chat)
      const payload = `${this.$store.state.identifier}: ${this.chat}`
      this.$socket.emit('chat', payload)
      this.chat = ''
    }
  }
}
</script>

<style>
.textbox {
  border: 5px solid black;
  width: 280px;
  height: 330px;
  margin: 10px;
  padding: 10px;
  overflow-y: scroll;
  word-wrap: break-word;
  display: flex;
  align-items: flex-end;
}
</style>
