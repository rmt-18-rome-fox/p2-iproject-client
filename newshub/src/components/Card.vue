<template>
<b-card
    :title="article.title"
    :img-src="article.image ? article.image :'https://picsum.photos/400/400/?image=20'"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 mx-2 mt-1"
  >
    <!-- <b-card-text>
      {{article.title}}
    </b-card-text> -->
    <b-button variant="success" :href="article.url" target="_blank">Details</b-button> |
            <b-button variant="primary" @click="publishHandler">Publish</b-button>
    <!-- <b-button variant="success" @click="detailsHandler">Details</b-button> -->
  </b-card>


  <!-- <div>
  <b-card no-body class="overflow-hidden" style="max-width: 800px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="article.image ? article.image: 'https://picsum.photos/400/400/?image=20'" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="article.title">
            <b-button variant="success" :href="article.url" target="_blank">Details</b-button>
            <b-button variant="primary" @click="publishHandler">Publish</b-button>
          
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div> -->
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
 name: "Card",
 props: ["article"],
 computed: {
   ...mapState(["alternativeNews"])
 },
 methods: {
     ...mapActions(["publishArticle"]),
     async publishHandler() {
       let articleData ={}
       if (this.alternativeNews) {
          articleData = {
             title: this.article.title,
             content: this.article.abstract,
             imageUrl: this.article.image,
             articleUrl: this.article.url,
         }
       } else if (!this.alternativeNews) {
         articleData = {
             title: this.article.title,
             content: this.article.description,
             imageUrl: this.article.image,
             articleUrl: this.article.url,
         }
       }
          
        await this.publishArticle(articleData)
     }
 },
 created() {
 }
}
</script>

<style>

</style>