<template>
      <div>
        <navbar></navbar>
        <div class="flex flex-wrap justify-center px-5 py-3">
            <juzs-card v-for="juzs in allJuzs" :key="juzs.id" :juzsData="juzs"></juzs-card>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import JuzsCard from '../components/JuzsCard.vue'
import { mapState } from "vuex"
export default {
    name: 'ListJuzs',
    components: {
        JuzsCard,
        Navbar
    },
    created() {
        this.getJuzs()
    },
    methods: {
        getJuzs() {
            this.$store.dispatch('getJuzs')
        }
    },
    computed: {
        ...mapState(['allJuzs'])
    }
}
</script>

<style>

</style>