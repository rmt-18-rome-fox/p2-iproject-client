<template>
  <div
    class="d-flex justify-content-center align-items-center overflow-hidden"
    id="loading-screen"
  >
    <lottie-player
      src="https://assets4.lottiefiles.com/packages/lf20_x62chJ.json"
      background="transparent"
      speed="1"
      style="width: 500px; height: 500px"
      loop
      autoplay
    ></lottie-player>
  </div>
</template>

<script>
import "@lottiefiles/lottie-player";
export default {
  name: "LoadingScreen",
};
</script>

<style>
#loading-screen {
  position: absolute;
  z-index: 100;
  background-color: #e3f0f4;
  height: 100%;
  width: 100%;
}
</style>
