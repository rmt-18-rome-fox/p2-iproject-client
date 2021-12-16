<template>
<div class="d-flex flex-column align-items-center p-5" style="height: 100vh;">
  <form class="d-flex flex-column justify-content-center align-items-center" @submit.prevent="onSubmit" style="height: 64vh; width: 30vw;border: 1px solid black; border-radius: 20px; background-color: #2C2828; color:#EEEEEE;">
    <label for="title" class="mb-2" style="font-size: 40px">Title</label>
    <input type="text" name="title" id="title" placeholder="Title.." v-model="dataForm.title" style="width: 20vw; font-size: 20px" class="mb-2 p-2">
    <label for="description" class="mb-2" style="font-size: 40px">Description</label>
    <input type="text" name="description" id="description" placeholder="Description.." v-model="dataForm.description" style="width: 20vw; font-size: 20px" class="mb-2 p-2">
    <p style="font-size: 40px" class="mb-0">Categories</p>
    <div class="d-flex flex-row" style="margin: 2vh auto 0 auto">
        <div v-for="tag in tagList" :key="tag.id" class="mx-2">

            <input type="checkbox" :id="tag.name" :value="tag.id" v-model="dataForm.tags" style="font-size: 10px" class="mb-1 pb-1 pt-0 mt-0">
            <label :for="tag.name" class="mb-2" style="font-size: 20px">{{tag.name}}</label>

        </div>
    </div>

    <label for="file" class="mb-2" style="font-size: 40px">Image</label>
    <input type="file" name="file" ref="file" id="file" @change="handleDataFile">
    <button type="submit" class="btn btn-primary mb-2 p-2 mt-2" style="width: 20vw; font-size: 20px">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'Form',
  props: ['titleValue', 'descriptionValue', 'tagsValue'],
  created () {
    this.$store.dispatch('fetchTags')
  },
  methods: {
    onSubmit () {
      this.$emit('onSubmit', this.dataForm)
    },
    handleDataFile () {
      this.dataForm.file = this.$refs.file.files[0]
    }
  },
  computed: {
    tagList () {
      return this.$store.state.tags
    },
    dataForm () {
      const data = {}
      if (this.titleValue) {
        data.title = this.titleValue
      }
      if (this.descriptionValue) {
        data.description = this.descriptionValue
      }
      if (this.tagsValue) {
        data.tags = []
        this.tagsValue.forEach(tag => {
          data.tags.push(tag.id)
        })
      }
      data.file = null
      if (data.title && data.description && data.tags) {
        return data
      } else {
        return {
          title: '',
          description: '',
          file: null,
          tags: []
        }
      }
    }
  }
}
</script>

<style>

</style>
