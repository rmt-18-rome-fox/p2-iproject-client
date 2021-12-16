<template>
  <div class="home">
    <!-- Navbar -->
    <navbar></navbar>
    <!-- Home Page -->
    <div class="container mx-auto my-10">
      <div class="flex-wrap">
        <label for="price" class="block text-sm font-medium text-gray-700"
          >Search recipes</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
          <div
            class="
              absolute
              inset-y-0
              left-0
              pl-3
              flex
              items-center
              pointer-events-none
            "
          ></div>
          <input
            type="text"
            name="search"
            id="search"
            class="
              focus:ring-indigo-500 focus:border-indigo-500
              block
              
              pl-7
              pr-12
              sm:text-sm
              border-gray-300
              rounded-md
              justify-center
              justify-items-center
            "
            placeholder="e.g Pizza, Chicken..."
          />
          <button class="rounded bg-orange-400 w-24">Search</button>
          <div class="post-bottom">
            <div class="action">
              <i class="speech-to-text fas fa-microphone"></i>
            </div>
          </div>
        </div>
        <!-- Recipe Card -->
        <div class="grid gap-x-8 gap-y-4 grid-cols-3">
          <recipe-card
            v-for="(item, idx) in recipes"
            :key="idx"
            :item="item"
          ></recipe-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import RecipeCard from "../components/RecipeCard.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    RecipeCard,
  },
  props: {
    lang: {
      type: String,
      default: "en-US",
    },
  },
  data: () => ({
    runtimeTranscription: "",
    transcription: [],
  }),
  methods: {
    // speechToText() {
    //   window.SpeechRecognition =
    //     window.SpeechRecognition || window.webkitSpeechRecognition;
    //   if (!SpeechRecognition && process.env.NODE_ENV !== "production") {
    //     throw new Error(
    //       "Speech Recognition does not exist on this browser. Use Chrome or Firefox"
    //     );
    //   }
    //   if (!SpeechRecognition) {
    //     return;
    //   }
    //   let recognition = new SpeechRecognition();
    //   recognition.lang = this.lang;
    //   recognition.interimResults = true;
    //   recognition.addEventListener("result", (event) => {
    //     const text = Array.from(event.results)
    //       .map((result) => result[0])
    //       .map((result) => result.transcript)
    //       .join("");
    //     this.runtimeTranscription = text;
    //   });
    //   recognition.addEventListener("end", () => {
    //     if (this.runtimeTranscription !== "") {
    //       this.transcription.push(this.runtimeTranscription);
    //       this.$emit("onTranscriptionEnd", {
    //         transcription: this.transcription,
    //         lastSentence: this.runtimeTranscription,
    //       });
    //     }
    //     this.runtimeTranscription = "";
    //     recognition.start();
    //   });
    //   recognition.start();
    // },
  },
  created() {
    this.$store.dispatch("getRandomRecipes");
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
  mounted () {
    this.speechToText()
  }
};
</script>
