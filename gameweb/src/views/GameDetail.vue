<template>
  <div>
    <br /><br />
    <div
      class="container justify-content-center"
      style="
        background-color: #6AB547;
        padding: 50px;
        border-radius: 25px;
        width: 600px;
      "
    >
      <img
        :src="gameDetail.thumbnail"
        style="width: 500px; height: 300px; border-radius: 10px"
      />
      <br /><br />
      <h1 style="font-weight: bold; color: white">{{ gameDetail.title }}</h1>
      <h5>Game Developer: {{gameDetail.developer}}</h5>
       <h5>Game Publisher: {{gameDetail.publisher}}</h5>
       <h5>Game Platform: {{gameDetail.platform}}</h5>
        <br>
          <img :src="QRhandle.data.qrcode" style="width: 150px" />
          <br><br>
      <h5>Description:</h5>
      <h5>{{ gameDetail.short_description }}</h5>
      <br /><br />
    </div>
    <br>
      <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
export default {
    name: 'GameDetail',
    components : {
         HFooter
    },
    methods: {
      detailGame() {
        this.$store.dispatch("gameDetail", this.$route.params.id);
      },
  },
  created() {
    this.detailGame();
  },
  computed: {
    gameDetail() {
      return this.$store.state.detail;
    },
      QRhandle() {
      return this.$store.state.QRCODE;
    },
  },
}
</script>

<style>


.btn:focus {
    outline: none;
    box-shadow: none
}

</style>