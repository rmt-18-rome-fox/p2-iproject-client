<template>
  <div>
      <a href="#" @click.prevent="selectImage(imgUrl)">
      <img :src="imgUrl" alt="Avatar image" width="15%" height="15%" />
      </a>
  </div>
</template>

<script>
export default {
    name: "ImageCard",
    props:["imgUrl"],
    methods: {
        selectImage(imgUrl) {
            console.log("test", imgUrl)
            this.$emit("selected", imgUrl)
        }
    }
}
</script>

<style>

</style>