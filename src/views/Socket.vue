<template>
<div>
  <div class="container">
    <div class="row chat-window col-xs-0 col-md-12" id="chat_window_1" style="margin-left:10px;">
      <div class="col-xs-12 col-md-12">
          <div class="panel panel-default">
            <div class="card text-center">
              <div class="card-header">
                Live Chat
              </div>
                <div class="card-body">
                  <div v-for="chat in chats" v-bind:key="chat.id">
                    <p class="text-start" v-if="chat.bookId === chatData.bookId">{{ chat.user }}: {{ chat.message }}</p>
                  </div>
                </div>
                <div class="card-footer text-muted">
              <div class="input-group">
                <input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." v-model="chatData.chatMessage"  v-on:keyup.enter='sendMessage'/>
                <span class="input-group-btn">
                  <button class="btn btn-primary btn-sm" id="btn-chat" v-on:click.prevent='sendMessage'>Send</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Socket',
  computed: {
    email () {
      return this.$store.state.email
    },
    chats () {
      return this.$store.state.chats
    }
  },
  data () {
    return {
      chatData: {
        chatMessage: '',
        bookId: ''
      }
    }
  },
  methods: {
    sendMessage () {
      console.log(this.chatData.bookId)
      this.$store.dispatch('sendMessage', this.chatData)
      this.chatData.chatMessage = ''
    }
  },
  created () {
    this.$store.state.email = localStorage.getItem('email')
    this.$store.dispatch('forRefresh')
    this.chatData.bookId = this.$route.params.bookId
  }
}
</script>
<style>

</style>
