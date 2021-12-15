<template>
  <div id="app">
    <Navbar>
    </Navbar>
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'
import { mapMutations, mapActions } from "vuex"

export default {
  name : 'App',
  components : {
    Navbar,
    HFooter
  },
  methods: {
    ...mapMutations({
      isLogin : "ISLOGIN"
    }),

    ...mapActions(["fetchFavorite"])
  },

  created () {
    if(localStorage.token) {
      this.isLogin(true)
    }

    this.fetchFavorite()
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
