<template>
  <div class="container mt-5">
    <div class="row">
      <form @submit.prevent="addNote">
        <input type="text" v-model="title" id="title" placeholder="Enter title">
        <button style="margin-left: 6px" class="btn btn-primary">Add</button>
      </form>
    </div><br>
    <div class="row mt-3">
      <div class="col-md-4">
        <div class="p-2 alert alert-primary">
          <h3>Fresh</h3>
            <draggable class="list-group" :list="fresh" @change="patchNote">
              <div class="list-group-item" v-for="item in fresh" :key="item.id">{{ item.title }}</div>
            </draggable>
        </div>
      </div>

      <div class="col-md-4">
        <div class="p-2 alert alert-warning" @change="patchNote">
          <h3>In Progress</h3>
            <draggable class="list-group" :list="inProgress">
              <div class="list-group-item" v-for="item in inProgress" :key="item.id">{{ item.title }}</div>
            </draggable>
        </div>
      </div>

      <div class="col-md-4">
        <div class="p-2 alert alert-success">
          <h3>Done</h3>
            <draggable class="list-group" :list="done" @change="patchNote">
              <div class="list-group-item" v-for="item in done" :key="item.id">{{ item.title }}</div>
            </draggable>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import Draggable from '../components/Draggable.vue'
import draggable from 'vuedraggable'
export default {
  name: 'Home',
  data: function () {
    return {
      statuses: ['Fresh', 'Work in progress', 'To test', 'Done'],
      title: '',
      inProgress: [],
      tested: [],
      done: [],
      fresh: []
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
      
      this.title = ''
    },
    deleteNote: function (id) {
      this.$store.dispatch('deleteNote', id)
        .then(() => {
          this.$store.dispatch('getNotes')
        })
    },
    patchNote: function (id) {
      // this.$store.dispatch('patchNote')
      console.log('Something' + id)
      console.log(id)
    }
  },
  created: function () {
    this.$store.dispatch('getNotes')
      .then(() => {
        this.done = this.doneNotes
        this.fresh = this.freshNotes
        this.inProgress = this.inProgressNotes
      })
  },
  computed: {
    freshNotes: function () {
      return this.$store.state.fresh
    },
    inProgressNotes: function () {
      return this.$store.state.inProgress
    },
    doneNotes: function () {
      return this.$store.state.done
    }
  }
}
</script>

<style>
</style>
