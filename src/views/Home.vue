<template>
  <div class="home">
    <h1>Allhandsondeck</h1>
    <div class="container">
      <Container></Container>
    </div>
    <div class="chatbox">
      <Chatbox
        :identifier="identifier"
      ></Chatbox>
    </div>
    <div class="panel">
      <Panel
        @updateIdentifier="updateIdentifier"
      ></Panel>
    </div>
  </div>
</template>

<script>
import Container from '../components/Container.vue'
import Panel from '../components/Panel.vue'
import Chatbox from '../components/Chatbox.vue'

export default {
  name: 'Home',
  components: {
    Container,
    Panel,
    Chatbox
  },
  data: function () {
    return {
      identifier: 'Guest'
    }
  },
  methods: {
    updateIdentifier: function (payload) {
      this.identifier = payload
    }
  }
}
</script>

<style>
.home {
  width: 90vw;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 1fr 1fr 100px;
  gap: 10px;
  box-sizing: border-box;
  margin: 0 auto;
}
.container {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: span 2;
}
.chatbox {
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 2;
  grid-row-end: 3;
}
.panel {
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 4;
}
button {
  margin: 10px;
}
input {
  margin: 10px;
  width: 60%;
}
h1 {
  margin-left: 100px;
}
</style>
