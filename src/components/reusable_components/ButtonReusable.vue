<template>
  <button
    :type="type"
    :class="variant"
    @click="OnClick"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  name: "ButtonReusable",
  props: ["label","type","variant"],
  methods: {
    OnClick() {
      this.$emit("on-click")
    }
  }
}
</script>

<style></style>