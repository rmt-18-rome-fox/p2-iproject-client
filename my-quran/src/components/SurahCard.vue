<template>
    <div class="bg-white px-5 py-3 mx-5 my-3 rounded-lg shadow-md w-40" @click.prevent="detailSurah(surahData.id)">
        <div class="text-center mb-3">
            <p class="w-12 border px-2 py-1 rounded-full bg-green-500 text-white">{{surahData.id}}</p>
        </div>
        <p class="font-bold mb-2 text-gray-700 text-left">{{surahData.name_simple}}</p>
        <p class="my-2 text-gray-500 text-sm text-left">{{surahData.translated_name.name}}</p>
    </div>
</template>

<script>
export default {
    name: 'SurahCard',
    props: ['surahData'],
    methods: {
        detailSurah (id) {
            this.$store.dispatch('fetchSurahById', id)
            this.$router.push(`/detailBySurah/${id}`)
        }
    }
}
</script>

<style>

</style>