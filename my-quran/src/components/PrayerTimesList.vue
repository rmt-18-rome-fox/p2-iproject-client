<template>
    <tr class="text-left">
        <td>{{timesData.date.readable}}</td>
        <td>{{timesData.timings.Fajr}}</td>
        <td>{{timesData.timings.Sunrise}}</td>
        <td>{{timesData.timings.Dhuhr}}</td>
        <td>{{timesData.timings.Asr}}</td>
        <td>{{timesData.timings.Sunset}}</td>
        <td>{{timesData.timings.Maghrib}}</td>
        <td>{{timesData.timings.Isha}}</td>
        <td>{{timesData.timings.Imsak}}</td>
        <td>{{timesData.timings.Midnight}}</td>
    </tr>
</template>

<script>
export default {
    name: 'PrayerTimesList',
    props: ['timesData']
}
</script>

<style>

</style>