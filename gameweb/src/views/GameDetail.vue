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
      <h5>Description:</h5>
      <h5>{{ gameDetail.short_description }}</h5>
      <br /><br />
      <img :src="QRhandle" style="width: 150px" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'GameDetail',
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
  },
}
</script>

<style>


.btn:focus {
    outline: none;
    box-shadow: none
}

</style>