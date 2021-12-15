<template>
<div>
<b-card
    :title="book.title"
    :img-src="book.formats['image/jpeg']"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
>
    <b-card-text>
    Author's name: {{book.authors[0].name}}
    </b-card-text>
    <b-card-text>
    Author's birth year: {{book.authors[0].birth_year}}
    </b-card-text>
    <b-card-text>
    Authors's death year: {{book.authors[0].death_year}}
    </b-card-text>
    <b-card-text>
    {{book.subjects}}
    </b-card-text>

    <b-button @click.prevent="" variant="primary">Book detail</b-button><br><br>
    <b-button @click.prevent="addBookmark" variant="primary">Add to bookmark</b-button>
</b-card>
</div>
</template>

<script>
export default {
    name: "BookCard",
    props: ["book"],
    methods:{
        addBookmark(){
            this.$store.dispatch("addBookmark", this.book.id)
            .then((resp) =>{
                console.log(resp);
            })
            .catch(err =>{
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>