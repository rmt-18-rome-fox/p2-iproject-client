<template>
   <div class="bg-white px-5 py-3 mx-5 my-3 rounded-lg shadow-md border">
        <div class="text-left">
            <p class="text-green-500 text-xl">{{ayahData.verse_key}}</p>
        </div>
        <p class="font-bold mb-2 text-gray-700 text-3xl text-right mr-3">{{ayahData.text_indopak}}</p>
        <p class="my-2 text-gray-500 text-base text-left">{{ayahData.translations[0].text}}</p>
        <hr class="my-5">
        <div class="py-2">
            <audio controls="true">
                <source :src="ayahData.audio.url" type="audio/mpeg">
            </audio>
        </div>
        <div class="flex items-center py-2">
            <a><img class="h-5 w-5 mx-2 opacity-50" src="../assets/heart.png" alt=""></a>
            <a><img class="h-5 w-5 mx-2 opacity-50" src="../assets/send.png" alt=""></a>
        </div>
        <!-- <div>
            <ShareNetwork
                network="facebook"
                url="https://news.vuejs.org/issues/180"
                title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                quote="The hot reload is so fast it\'s near instant. - Evan You"
                hashtags="vuejs,vite">
                Share on Facebook
            </ShareNetwork>
        </div> -->
    </div>
</template>

<script>
// import Vue from 'vue'
// Vue.use(VueSocialSharing);

// import VueSocialSharing from 'vue-social-sharing'

export default {
    name: 'AyahCard',
    props: ['ayahData'],
    components: {
        // VueSocialSharing
    }
}
</script>

<style>

</style>