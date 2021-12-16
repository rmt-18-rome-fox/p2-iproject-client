<template>
<div>
    <navbar></navbar>
  <div class="flex flex-col">
        <h1 class="font-bold text-center my-10 text-4xl">Prayer Times</h1>
        <div class="bg-white px-10 py-5 mx-5 my-3 rounded-lg shadow-md border w-full">
            <table class="table-auto w-full">
                <thead>
                  <tr class="text-left">
                    <th>Date</th>
                    <th>Fajr</th>
                    <th>Sunrise</th>
                    <th>Dhuhr</th>
                    <th>Asr</th>
                    <th>Sunset</th>
                    <th>Maghrib</th>
                    <th>Isha</th>
                    <th>Imsak</th>
                    <th>Midnight</th>
                  </tr>
                </thead>
                <tbody>
                  <prayer-times-list v-for="times in prayerTimes" :key="times.id" :timesData="times"></prayer-times-list>
                </tbody>
              </table>
        </div>
    </div>
</div>
</template>

<script>
import PrayerTimesList from '../components/PrayerTimesList.vue'
import { mapState } from "vuex"
import Navbar from '../components/Navbar.vue'

export default {
    name: 'PrayerTimes',
    components: {
        PrayerTimesList,
        Navbar
    },
    created() {
        this.fetchPrayerTimes()
    },
    methods: {
        fetchPrayerTimes() {
            this.$store.dispatch('fetchPrayerTimes')
            this.$router.push('/prayerTimes')
        }
    },
    computed: {
        ...mapState(['prayerTimes'])
    }
}
</script>

<style>

</style>