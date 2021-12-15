<template>
<div class="row d-flex justify-content-center align-items-center rows">
    <div class="col-md-6">
        <div class="card">
            <div class="text-center"> <img src="../../image/pngegg.png" width="200"> <span class="d-block mt-3" >Subscribe to our website</span>
                <span>Price: Rp. 200.000,00</span>
                <div class="mx-5" >
                    <div class="input-group mb-3 mt-4" > <button type="button" @click="subscribe" class="btn btn-warning btn-lg d-grid gap-2 col-6 mx-auto" >Subscribe</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: "Subscribe",
methods : {
  subscribe () {
    this.$store.dispatch("subscribe")
  }
}
}
</script>

<style scoped>
body {
    background-color: #F9A826
}

.rows {
    height: 100vh
}

.form-control {
    display: block;
    width: 100%;
    min-height: calc(1.5em + .75rem + 2px);
    padding: .575rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 52px;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

.card {
    padding: 20px;
    background-color: #eee;
    padding-bottom: 50px;
    padding-top: 50px
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #f9a826;
    outline: 0;
    box-shadow: none
}

.border-rad {
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    color: #fff;
    background-color: #f9a826;
    border-color: #f9a826
}

.border-rad:hover {
    background-color: #f9a826;
    border-color: #f9a826
}
</style>