<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    style="height: 100vh; width: 100%"
  >
    <div class="row border" style="width: 90%; height: 400px">
      <div class="col-5" style="border: 2px solid green">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_ivMD4s.json"
          background="transparent"
          speed="1"
          style="width: 400px; height: 400px"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="col" style="border: 2px solid red">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "@lottiefiles/lottie-player";
export default {
  name: "Login",
};
</script>

<style></style>
