<template>
  <div>
      <!-- {{imageResult}} -->
      <image-card v-for="(el,id) in imageResult" :key="id" :imgUrl="el" @selected="selectImage"/>
      {{selectImageUrl}}
      <button
            class="w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button" @click="toPrev"
        >
            Previous
        </button>
      <button
            class="w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button" @click="toNext"
        >
            Next
        </button>
  </div>
</template>

<script>
import imageCard from "../components/imageCard.vue"

export default {
    components: { imageCard },
    name: "AvatarSelector",
    props: ["myChar"],
    data() {
        return {
            selectImageUrl: "",
        }
    },
    computed: {
        imageResult() {
            return this.$store.state.imageResult;
        }
    },
    methods: {
        imgQuery() {
            let query = `dnd ${this.myChar.race} ${this.myChar.className}`;
            if(this.myChar.gender !== "male") {
                query += ` ${this.myChar.gender}`;
            }
            this.$store.dispatch("findImage", query)
            .then(({data}) => {
                this.$store.commit("set_image_result", data.results);
            })
        },
        selectImage(url) {
            console.log(url, "<<<<<,")
            this.selectImageUrl = url;
            this.myChar.imageUrl = url;
        },
        toNext() {
            this.$emit("toNext",3);
        },
        toPrev() {
            this.$emit("toPrev",1);
        },
    },
    created() {
        this.imgQuery();
    }
}
</script>

<style>

</style>