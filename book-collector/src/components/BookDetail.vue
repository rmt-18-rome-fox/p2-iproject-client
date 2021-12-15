<template>
<div>
  <pre>{{book}}</pre>
  <b-card no-body class="overflow-hidden" style="max-width: 1240px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="book.formats['image/jpeg']" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="book.title">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
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