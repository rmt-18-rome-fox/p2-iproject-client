<template>
  <div class="flex">
        <div class="w-3/12 h-screen fixed right-0 overflow-auto border shadow-md rounded-md">
            <surah-card></surah-card>
        </div>
        <div id="main" class="w-9/12 px-5">
            <ayah-card></ayah-card>
        </div>
    </div>
</template>

<script>
import AyahCard from '../components/AyahCard.vue'
import SurahCard from '../components/SurahCard.vue'
export default {
    name: 'DetailByJuzs',
    components: {
        AyahCard,
        SurahCard
    }
}
</script>

<style>

</style>