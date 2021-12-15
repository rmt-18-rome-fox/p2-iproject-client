<template>
   <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Icon -->
      <div class="fadeIn first">
        <img
          src="https://www.pngitem.com/pimgs/m/398-3983382_android-game-icon-png-transparent-png.png"
          id="icon"
          alt="User Icon"
        />
      </div>

      <!-- Login Form -->
      <form>
        <input
          type="text"
          id="email"
          class="fadeIn second"
          placeholder="email"
        />
        <input
          type="text"
          id="password"
          class="fadeIn third"
          placeholder="password"
        />
        <input type="submit" class="fadeIn fourth" value="Sign Up" />
      </form>

      <!-- Remind Passowrd -->
      <p>
        Already Have an Account?
        <a href="#!" @click="toLogin" class="fw-bold text-body"
          ><u>Login here</u></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
 name : 'Register'
}
</script>

<style>

</style>