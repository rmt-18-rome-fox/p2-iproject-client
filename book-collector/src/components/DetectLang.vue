<template>
<div class="container">
    <b-card img-src="https://www.awesomeinventions.com/wp-content/uploads/2015/11/funny-face-cat.jpg" img-alt="Card image" img-left class="mb-3 mt-5">
      <b-card-text>
        <div class="mb-3 mt-5">
            <label class="form-label">Enter a word:</label>
            <textarea
                class="form-control"
                rows="3"
                v-model="text"
            ></textarea>
            <button
                type="button"
                class="btn btn-outline-primary mt-2"
                @click.prevent="doSubmit">submit</button>
        </div>
      </b-card-text>
    </b-card>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: "DetectLangPage",
    data(){
        return{
            text: ""
        }
    },
    methods: {
        doSubmit(){
            this.$store.dispatch("detectLang", {text: this.text})
            .then((resp)=>{
                console.log(resp);
                Swal.fire(
                'The Language?',
                `${resp.data.lang[0].name} |
                reliable: ${resp.data.reliable[0].isReliable}`,
                'question'
                )
            })
            .catch(err =>{
                console.log(err);
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
                })
            })
        }
    }
}
</script>

<style>

</style>