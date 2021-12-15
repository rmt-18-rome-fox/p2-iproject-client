<template>
<div class="container">
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
</div>
</template>

<script>
export default {
    name: "DetectLangPage",
    data(){
        return{
            text: ""
        }
    },
    methods: {
        doSubmit(){
            console.log(this.text);
        }
    }
}
</script>

<style>

</style>