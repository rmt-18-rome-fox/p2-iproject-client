<template>
  <div class="post create">
    <div class="post-top">
      <div class="dp">
        <img src="../assets/images/girl.jpg" alt="" />
      </div>
      <input
        v-model="topic"
        type="text"
        placeholder="What's on your mind, Aashish ?"
      />
    </div>

    <div class="post-bottom">
      <div class="action">
        <i class="fa fa-video"></i>
        <span> Live video</span>
      </div>
      <div class="action">
        <i class="fa fa-image"></i>
        <span> Photo/Video</span>
      </div>
      <div @click="startSpeechToTxt" class="action">
        <i  class="speech-to-txt fa fa-microphone"></i>
        <span> Speech</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicPost",
  data() {
    return {
      topic: "",
      runtimeTranscription_: "",
      transcription_: [],
      lang_: "en-US",
    };
  },
  methods: {
    startSpeechToTxt() {
      // initialisation of voicereco

      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = true;

      // event current voice reco word
      recognition.addEventListener("result", (event) => {
        var text = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        this.runtimeTranscription_ = text;
        this.topic = text;
      });
      // end of transcription
      recognition.addEventListener("end", () => {
        this.transcription_.push(this.runtimeTranscription_);
        this.runtimeTranscription_ = "";
        recognition.stop();
      });
      recognition.start();
    },
  },
};
</script>

<style>
</style>