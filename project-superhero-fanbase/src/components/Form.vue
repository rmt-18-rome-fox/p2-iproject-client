<template>
      <div class="simple-login-container">
        <form @submit.prevent="AddEvent" action="">
            <h2>ADD SCHEDULE</h2>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input  v-model="name"   type="text" class="form-control" placeholder="name superhero">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input  v-model="location" type="text" class="form-control" placeholder="Location">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                   <input @change="handleFileUpload" name="image" id="image" type="file" class="form-control"><br><br>
                </div>
            </div>
             <div class="row">
                <div class="col-md-12 form-group">
                    <input  v-model="date"  type="date" class="form-control" >
                </div>
            </div>
              <div class="row">
                <div class="col-md-12 form-group">
                    <input  v-model="description"  type="text" class="form-control" >
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input type="submit" class="btn btn-block btn-login" >
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "Form",
    data: function (){
        return {
            name: "",
            location: "",
            date: "",
            file: [],
            description: ""
        }
    },
     methods: {
        AddEvent() {
            
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('location', this.location);
            formData.append('date', this.date);
            formData.append('description', this.description);        
            formData.append('image', this.file)
        
           
            console.log(formData)
             this.$store.dispatch('AddEvent',formData)
             .then(() =>{
                 this.$router.push("/")
             })
               .catch((err) =>{
              this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message,
              })
            })
            
        },

        handleFileUpload(event){
          
            this.file = event.target.files[0]

        }
    },
}
</script>

<style>

</style>