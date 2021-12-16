<template>
  <div class="container">
    <h3>GITHUB</h3>
  </div>
</template>

<script>
export default {
  name: 'LoginGithub',
  created: function () {
    this.$store.dispatch('authGithub', {
        code: this.$route.query.code
    })
      .then(() => {
          this.$router.push('/')
      })
  }
}
</script>

<style>

</style>