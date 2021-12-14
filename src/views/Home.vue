<template>
  <div class="container mt-5">
    <div class="row">
      <form @submit.prevent="addNote">
        <input type="text" v-model="title" id="title" placeholder="Enter title">
        <button style="margin: 10px" class="btn btn-primary">Add</button>
      </form>
    </div><br>
    <div class="col">
      <Draggable v-for="note in notes" :key="note.id" :note="note"></Draggable>
    </div>
  </div>
</template>

<script>
import Draggable from '../components/Draggable.vue'
export default {
  name: 'Home',
  data: function () {
    return {
      statuses: ['Work in progress', 'To test', 'Done'],
      title: ''
    }
  },
  components: {
    Draggable
  },
  methods: {
    addNote: function () {
      this.$store.dispatch('addNote', {
        title: this.title
      })
        .then(() => {
          this.$store.dispatch('getNotes')
        })
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
