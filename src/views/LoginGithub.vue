<template>
  <div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'LoginGithub',
  created: function () {
    let timerInterval
    Swal.fire({
      title: 'Please wait while we redirect you to our website..',
      timer: 2000,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
      .then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
    })
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