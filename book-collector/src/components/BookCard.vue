<template>
<div>
<b-card
    tag="article"
    style="max-width: 30rem;"
    class="mb-5"
>   
    <b-card-img
        :src="book.formats['image/jpeg']"
        class="rounded-0"
        style="height: 450px; overflow:none; object-fit: cover">
    </b-card-img>

    <b-card-body :title="book.title"></b-card-body>

    <b-card-text>
    Author's name: {{book.authors[0].name}}
    </b-card-text>
    <b-card-text>
    Author's birth year: {{book.authors[0].birth_year}}
    </b-card-text>
    <b-card-text>
    Authors's death year: {{book.authors[0].death_year}}
    </b-card-text>
    <b-button variant="dark">
        <router-link :to="{path: `/books/${book.id}`}">Book detail</router-link>
    </b-button><br><br>
    <b-button @click.prevent="addBookmark" variant="dark">Add to bookmark</b-button>
</b-card>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: "BookCard",
    props: ["book"],
    methods:{
        addBookmark(){
            this.$store.dispatch("addBookmark", this.book.id)
            .then((resp) =>{
                console.log(resp);
                Swal.fire(
                'Good job!',
                `Added ${resp.data.title} into bookmark`,
                'success'
                )
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