<template>
	<transition name="fade">
		<div class="bodyCustom">
			<div class="containertLogin ">  	
				<input class="inputCustom" type="checkbox" id="chk" aria-hidden="true">
					<div class="signup">
						<Register></Register>
					</div>
					<div class="login">
						<login></login>
					</div>
			</div>
		</div>
	</transition>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
export default {
    name: "Auth",
	components: {
		Login,
		Register
	}
}

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 50;
}
</style>