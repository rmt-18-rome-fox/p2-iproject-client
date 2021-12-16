<template>
  <div id="Home" class="flex-col-auto justify-center">
    <div class="w-4/6 containter mx-auto pt-4" ref="">
      <div
        class="grid grid-cols-1 p-8 bg-yellow-400 md:grid-cols-2 xl:grid-cols-4 gap-4 rounded-2xl"
      >
        <card v-for="(anime, index) in topAnimes" :key="index" :anime="anime" class="hover:bg-gray-700" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  created() {
    this.$store.dispatch("fetchAnimes");
  },
  computed: {
    topAnimes() {
      let animes = this.$store.state.topAnimes;
      animes = animes.filter((el) => !el.r18);
      return animes;
    },
  },
  methods: {
    getNextUser() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.offsetHeight - 1;

        // console.log({
        //   bottomOfWindow,
        //   scroll: document.documentElement.scrollTop,
        //   innerHeight: window.innerHeight,
        //   offsetHeight: document.documentElement.offsetHeight,
        // });
        if (bottomOfWindow) {
          this.$store.dispatch("fetchAnimesNext", this.$store.state.pageJikan + 1)
        }
      };
    },
  },
  beforeMount() {
    this.$store.dispatch("fetchAnimes", this.$store.state.pageJikan + 1)
  },
  mounted() {
    this.getNextUser();
  },
};
</script>
