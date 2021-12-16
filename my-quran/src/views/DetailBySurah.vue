<template>

    <div class="py-5 mt-12">
        <div class="w-2/12 h-screen fixed right-0 overflow-auto border shadow-md rounded-md text-center">
            <surah-card v-for="surah in listSurah" :key="surah.id" :surahData="surah"></surah-card>
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

</template>

<script>
import AyahCard from '../components/AyahCard.vue'
import SurahCard from '../components/SurahCard.vue'
import { mapState } from "vuex"

export default {
    name: 'DetailBySurah',
    components: {
        AyahCard,
        SurahCard,
    },
    methods: {
        pagination(page) {
            let payload = {
                page,
                chapterNumber: this.detailSurah.verses[0].verse_key
            }
            this.$store.dispatch('paginationByChapter', payload)
        }
    },
    computed: {
    ...mapState(['listSurah', 'detailSurah'])
  }
}
</script>

<style>

</style>