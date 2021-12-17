<template>
    <div class="mt-14">
        <div class="flex flex-wrap justify-center px-5 py-3">
            <surah-card v-for="surah in listSurah" :key="surah.id" :surahData="surah"></surah-card>
        </div>
    </div>
</template>

<script>
import SurahCard from '../components/SurahCard.vue'
export default {
    name: 'ListSurah',
    components: {
        SurahCard,
    },
    created() {
        this.fetchListSurah()
    },
    methods: {
        fetchListSurah() {
            this.$store.dispatch('fetchListSurah')
        }
    },
    computed: {
        listSurah() {
            return this.$store.state.listSurah
        }
    }
}
</script>

<style>

</style>