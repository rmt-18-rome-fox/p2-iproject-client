<template>
 <div>
    <navbar></navbar>
    <div class="py-5">
        <div class="w-2/12 h-screen fixed right-0 overflow-auto border shadow-md rounded-md text-center">
            <juzs-card></juzs-card>
        </div>
        <div id="main" class="w-10/12 px-5">
            <ayah-card v-for="ayah in detailSurah.verses" :key="ayah.id" :ayahData="ayah"></ayah-card>
        </div>
        <div class="flex justify-center w-10/12 my-10">
            <button class="mx-2 rounded-full px-2 py-1 bg-green-500 text-white"></button>
            <button class="mx-2 rounded-full px-2 py-1 bg-green-500 text-white"></button>
        </div>
    </div>
</div>
</template>

<script>
// import AyahCard from '../components/AyahCard.vue'
import JuzsCard from '../components/JuzsCard.vue'
import AyahCard from '../components/AyahCard.vue'
import Navbar from '../components/Navbar.vue'
import { mapState } from "vuex"
export default {
    name: 'DetailByJuzs',
    components: {
        AyahCard,
        JuzsCard,
        // SurahCard,
        Navbar
    },
    created() {
        this.getAyahByJuzs()
    },
    methods: {
        getAyahByJuzs() {
            this.$store.dispatch('getAyahByJuzs')
        }
    },
    computed: {
        ...mapState(['detailSurah'])
    }
}
</script>

<style>

</style>