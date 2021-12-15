<template>
  <b-container class="mt-3">
    <b-card
      class="mx-auto"
      no-body
      style="max-width: 40rem"
      :img-src="
        articleData.imageUrl
          ? articleData.imageUrl
          : 'https://placekitten.com/300/150'
      "
      img-alt="Image"
      img-top
    >
      <!-- <template #header>
        <h4 class="mb-0">Hello World</h4>
      </template> -->

      <b-card-body>
        <b-card-title>{{ articleData.title }}</b-card-title>
        <!-- <b-card-sub-title class="mb-2"></b-card-sub-title> -->
        <b-card-text>
          {{ articleData.content }}
        </b-card-text>
      </b-card-body>

      <b-card-body>
        <a :href="articleData.articleUrl" target="_blank">Go to source</a>
        <!-- <a href="#" class="card-link">Another link</a> -->
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ArticleDetail",
  computed: {
    ...mapState(["articleData"]),
  },
  methods: {
    ...mapActions(["getArticleDetail"]),
  },
  async created() {
    await this.getArticleDetail(this.$route.params.id);
  },
};
</script>

<style></style>
