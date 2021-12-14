<template>
  <div class="container mt-5">
    <div class="row">
      <form @submit.prevent="addNote">
        <input type="text" v-model="title" id="title" placeholder="Enter title">
        <button style="margin: 10px" class="btn btn-primary">Add</button>
      </form>
    </div><br>
    <div class="row">
      <div class="col form-inline">
          <draggable class="card text-white bg-info mb-3" style="max-width: 18rem; cursor: pointer;">
            <div class="card-body" v-for="note in notes" :key="note.id">
              <h5 class="card-title">{{ note.title }}</h5>
              <button class="btn btn-secondary btn-sm" @click="showUpdate">Update</button>
            </div>
          </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Home',
  data: function () {
    return {
      statuses: ['Work in progress', 'To test', 'Done'],
      title: ''
    }
  },
  components: {
    draggable
  },
  methods: {
    addNote: function () {
      this.$store.dispatch('addNote', {
        title: this.title
      })
        .then(() => {
          this.$store.dispatch('getNotes')
        })
    },
    showUpdate: function () {
      // this.$store.dispatch('getNoteById')
      console.log('Update')
    }
  },
  created: function () {
    this.$store.dispatch('getNotes')
  },
  computed: {
    notes: function () {
      return this.$store.state.notes
    }
  }
}
</script>

<style>
</style>
