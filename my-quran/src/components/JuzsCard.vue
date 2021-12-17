<template>
  <div class="bg-white px-5 py-3 mx-5 my-3 rounded-lg shadow-md w-40 flex justify-center items-center" @click.prevent="getDetailSurah(juzsData.id)">
        <div class="text-center mb-3">
            <p class="w-12 border px-2 py-1 rounded-full bg-green-500 text-white">{{juzsData.juz_number}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JuzsCard',
    props: ['juzsData'],
    methods: {
        getDetailSurah(id) {
            this.$store.dispatch('detailSurahById', id)
            this.$router.push(`/detailByJuzs/${id}`)
        }
    }
}
</script>

<style>

</style>