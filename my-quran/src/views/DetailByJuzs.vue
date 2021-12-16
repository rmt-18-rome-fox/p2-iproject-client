<template>
 <div>
    <navbar></navbar>
    <div class="py-5">
        <div class="w-2/12 h-screen fixed right-0 overflow-auto border shadow-md rounded-md text-center">
            <juzs-card v-for="juzs in allJuzs" :key="juzs.id" :juzsData="juzs"></juzs-card>
        </div>
        <div id="main" class="w-10/12 px-5">
            <ayah-card v-for="ayah in detailSurah.verses" :key="ayah.id" :ayahData="ayah"></ayah-card>
        </div>
        <div class="flex justify-center w-10/12 my-10">
            <button v-show="detailSurah.pagination.current_page !== 1" class="mx-2 rounded-full px-2 py-1 bg-green-300 text-white" @click.prevent="pagination((detailSurah.pagination.current_page) - 1)">{{detailSurah.pagination.current_page - 1}}</button>
            <button class="mx-2 rounded-full px-2 py-1 bg-green-500 text-white" @click.prevent="pagination(detailSurah.pagination.current_page)">{{detailSurah.pagination.current_page}}</button>
            <button v-show="detailSurah.pagination.next_page !== null" class="mx-2 rounded-full px-2 py-1 bg-green-300 text-white" @click.prevent="pagination(detailSurah.pagination.next_page)">{{detailSurah.pagination.next_page}}</button>
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

    },
    methods: {
        pagination(page) {
            let payload = {
                page,
                juzsNumber: this.detailSurah.verses[0].juz_number
            }
            this.$store.dispatch('paginationByJuzs', payload)
        }
    },
    computed: {
        ...mapState(['detailSurah', 'allJuzs'])
    }
}
</script>

<style>

</style>