<template>
  <div class="home container">
    <div class="row">
      <div class="col-9">
        <Container></Container>
      </div>
      <div class="col">
        <div class="row">
          <Panel></Panel>
        </div>
        <div class="row">
          <Chatbox></Chatbox>
        </div>
      </div>
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
  }
}
</script>

<style>

</style>
