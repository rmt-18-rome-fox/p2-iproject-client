<template>
  <div class="h-screen">
    <navbar></navbar>
    <div class="flex justify-center items-center border h-screen">
      <div class="h-2/3 border w-2/3 rounded-lg shadow-md flex bg-green-500">
        <div class="w-1/2 flex justify-center items-center rounded-md bg-white">
          <button class="border px-8 py-5 rounded-lg bg-green-500 text-white text-xl shadow-md"><router-link to="/listJuzs">See detail ayah by Juzs</router-link></button>
        </div>
        <div class="w-1/2 flex justify-center items-center rounded-md">
          <button class="border px-8 py-5 rounded-lg bg-white text-green-500 text-xl shadow-md"><router-link to="/listSurah">See detail ayah by Surah</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../components/Navbar.vue'
import { mapState, mapMutations } from "vuex"

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Navbar
  },
  methods: {
        ...mapMutations({
      login: "LOGIN"
    }),
    
  },
  computed: {
    ...mapState(['isLogin'])
  }
}
</script>
