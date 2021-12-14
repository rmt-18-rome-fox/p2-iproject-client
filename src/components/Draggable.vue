<template>
  <div class="col form-inline">
      <draggable class="card text-black bg-info mb-3" style="max-width: 18rem; cursor: pointer;">
        <div class="card-body">
          <h5 class="card-title">{{ note.title }}</h5>
          <button class="btn btn-secondary btn-sm" @click="showUpdate">Update</button>
          <button style="margin: 5px;" class="btn btn-danger btn-sm" @click="deleteNote">Delete</button>
        </div>
      </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Draggable',
  components: {
    draggable
  },
  props: ['note'],
  methods: {
    showUpdate: function () {
      // this.$store.dispatch('getNoteById')
      console.log('Update')
    },
    deleteNote: function () {
    //   this.$store.dispatch('deleteNote', this.note.id)
      this.$emit('deleteNote', this.note.id)
    }
  }
}
</script>

<style>

</style>