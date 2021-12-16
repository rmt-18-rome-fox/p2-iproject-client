<template>
<div class="container mt-5">
  <b-card no-body class="overflow-hidden" style="max-width: 1240px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="book.formats['image/jpeg']" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="book.title">
          <b-card-sub-title class="mb-2">by {{book.authors[0].name}}</b-card-sub-title>
          <p>Subjects :</p>
          <b-list-group v-for="subject in book.subjects" :key="subject">
            <b-list-group-item>{{subject}}</b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
export default {
    name: 'BookDetail',
    methods:{
      fetchBookdetail(){
        const id = this.$route.params.bookId
        this.$store.dispatch("bookDetail", id)
        .then((resp) =>{
          this.$store.commit("setBookDetail", resp.data)
        })
        .catch(err =>{
          console.log(err);
        })
      }
    },
    computed:{
      book(){
        return this.$store.state.book
      }
    },
    created(){
      this.fetchBookdetail()
    }
}
</script>

<style>

</style>