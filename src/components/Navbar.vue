<template>
    <nav>
        <div class="nav-left">
            <img src="../assets/images/logo.png" alt="Logo">
            <input type="text" placeholder="Search Mediabook..">
        </div>

        <div class="nav-middle">
            <a href="#" class="active">
                <i class="fa fa-home"></i>
            </a>

            <a href="#">
                <i class="fa fa-user-friends"></i>
            </a>

            <a href="#">
                <i class="fa fa-play-circle"></i>
            </a>

            <a href="#">
                <i class="fa fa-users"></i>
            </a>
        </div>

        <div class="nav-right">
            <span class="profile"></span>

            <a href="#">
                <i @click.prevent="doLogout" class="fas fa-sign-out-alt"></i>
            </a>

            <a href="#">
                <i class="fas fa-ellipsis-h"></i>
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        doLogout () {
            localStorage.clear()
            this.$store.commit("IS_LOGIN", false)
            this.$router.push("/login")
        }
    }
}
</script>

<style>

</style>