<template>

  <b-card
    :title="article.title"
    :img-src="article.imageUrl ? article.imageUrl :'https://picsum.photos/400/400/?image=20'"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 mx-2 mt-1"
  >
    <!-- <b-card-text>
      {{article.title}}
    </b-card-text> -->

    <b-button variant="success" @click="detailsHandler">Details</b-button>
  </b-card>

  <!-- <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="article.imageUrl ? article.imageUrl :'https://picsum.photos/400/400/?image=20'" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="article.title">
            <b-button variant="success" @click="detailsHandler">Details</b-button>
            
        </b-card-body>
      </b-col>
    </b-row>
  </b-card> -->
</template>

<script>


export default {
    name: "Homecard",
    props: ["article"],
    methods: {
        detailsHandler() {
            this.$router.push({name: "ArticleDetail", params: {id: this.article.id}})
        }
    }
}
</script>

<style>

</style>