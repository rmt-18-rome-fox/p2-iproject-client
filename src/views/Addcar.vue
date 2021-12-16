<template>
  <div class="d-flex justify-content-center">
    <div class="fullbody d-flex align-items-center">
      <div class="card">
        <div class="card-body">
          <form>
            <div class="d-grid gap-2">
              <div class="input-group form-group">
                <input type="text" class="form-control" placeholder="name" v-model="formPostCar.name"/>
              </div>
              <div class="input-group form-group">
                <input type="text" class="form-control" placeholder="brand" v-model="formPostCar.brand"/>
              </div>
              <div class="input-group form-group">
                <input type="text" class="form-control" placeholder="year" v-model="formPostCar.year"/>
              </div>
              <div class="input-group form-group">
                <input type="text" class="form-control" placeholder="price" v-model="formPostCar.price"/>
              </div>
              <div class="input-group form-group">
                <input type="file" @change="handleFileUpload($event)" />
              </div>
            </div>
            <input
                type="submit"
                value="Submit"
                class="loginsubmit btn btn-dark"
                v-on:click.prevent="addCar()"
              />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      formPostCar: {
        name: '',
        brand: '',
        year: '',
        price: '',
        file: ''
      }
    }
  },
  methods: {
    handleFileUpload () {
      this.formPostCar.file = event.target.files[0]
    },
    addCar () {
      const formData = new FormData()
      formData.append('name', this.formPostCar.name)
      formData.append('brand', this.formPostCar.brand)
      formData.append('year', this.formPostCar.year)
      formData.append('price', this.formPostCar.price)
      formData.append('urlPicture', this.formPostCar.file)
      console.log(formData)
      axios
        .post('http://localhost:3000/car', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            access_token: localStorage.getItem('access_token')
          }
        })
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
