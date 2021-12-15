<template>
<div>
  <form class="d-flex flex-column" @submit.prevent="onSubmit">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" placeholder="Title.." v-model="dataForm.title">
    <label for="description">Description</label>
    <input type="text" name="description" id="description" placeholder="Description.." v-model="dataForm.description">
    <div class="d-flex flex-row" style="margin: 2vh auto 0 auto">
        <div v-for="tag in tagList" :key="tag.id" class="mx-2">

            <input type="checkbox" :id="tag.name" :value="tag.id" v-model="dataForm.tags">
            <label :for="tag.name">{{tag.name}}</label>

        </div>
    </div>

    <label for="file">Image</label>
    <input type="file" name="file" ref="file" id="file" @change="handleDataFile">
    <button type="submit" class="btn btn-primary">Submit</button>
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
