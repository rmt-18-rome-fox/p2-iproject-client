<template>
  <div class="home bg-fixed bg-herobg w-full min-h-screen bg-no-repeat bg-cover">
    <navbar :isLoggedIn="isLoggedIn"></navbar>
    <router-view class="flex-grow" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue"

export default {
  components: {Navbar},
  name: "Home",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      }
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    myCharacter() {
      return this.$store.state.myCharacter
    },
    races() {
      return this.$store.state.races
    },
    spells() {
      return this.$store.state.spells
    },
    classes() {
      return this.$store.state.classes
    }
  },
  methods: {
    doLogin() {
      this.$store.dispatch("login",this.loginForm)
      .then((response) => {
          console.log(response.data);
          localStorage.setItem("access_token", response.data.access_token);
          this.$store.commit("set_access_token", response.data.access_token);
          return this.$store.dispatch("getMyCharacter");
          // this.$router.push("/");
      })
      .then((response) => {
        console.log(response.data);
        this.$store.commit("set_my_character", response.data);
        this.$store.commit("set_is_logged_in", true);
      })
      .catch(err => {
          console.log(err)
      })  
    }
  },
  created() {
    this.$store.dispatch("getRaces");
    this.$store.dispatch("getSpells");
    this.$store.dispatch("getClasses");
    if(localStorage.access_token) {
      this.$store.commit("set_is_logged_in", true)
    }
  }
};
</script>
