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
            <draggable id="Fresh" class="list-group" :move="onMove" @start="start" @end="end" :list="fresh" group="notes" @change="change">
              <div class="list-group-item Fresh" v-for="item in fresh" :key="item.id">{{ item.title }}</div>
            </draggable>
        </div>
      </div>

      <div class="col-md-4">
        <div class="p-2 alert alert-warning">
          <h3>In Progress</h3>
            <draggable id="inProgress" class="list-group" :list="inProgress" :move="onMove" group="notes" @end="end">
              <div class="list-group-item inProgress" v-for="item in inProgress" :key="item.id">{{ item.title }}</div>
            </draggable>
        </div>
      </div>

      <div class="col-md-4">
        <div class="p-2 alert alert-success">
          <h3>Done</h3>
            <draggable id="Done" :move="onMove" class="list-group" :list="done" group="notes">
              <div class="list-group-item Done" v-for="item in done" :key="item.id">{{ item.title }}</div>
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
      title: '',
      inProgress: [],
      tested: [],
      done: [],
      fresh: [],
      currentLength: null
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
          this.fresh.push(this.freshNotes)
        })
      this.title = ''
    },
    deleteNote: function (id) {
      this.$store.dispatch('deleteNote', id)
        .then(() => {
          this.$store.dispatch('getNotes')
          this.fresh = this.freshNotes
          this.done = this.doneNotes
          this.inProgress = this.inProgressNotes
        })
    },
    patchNote: function () {
    },
    onMove: function (payload, payload2) {
      const noteId = payload.draggedContext.element.id
      const oldStatus = payload.draggedContext.element.status
      const newStatus = payload2.originalTarget.className.split(' ')[1] || payload2.originalTarget.id
      
      console.log(noteId, '<<<< NOTE ID')
      console.log(newStatus, '<<<< NEW STATUS')
      if (oldStatus !== newStatus) {
        this.$store.dispatch('patchNote', {
          id: noteId,
          status: newStatus
        })
          .then(() => {
            this.$store.dispatch('getNotes')
          })
      }
    },
    noteWatcher() {
      console.log('note watcher')
      if (this.inProgress.length >= 3) {
        console.log('MAX')
      }
    }, // dari class list group item kalau beda 
    start() {
      console.log('start')
    },
    end() {
      console.log('end')
    },
    change() {
    }
  },
  created: function () {
    this.$store.dispatch('getNotes')
      .then(() => {
        this.fresh = this.freshNotes
        this.done = this.doneNotes
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
    },
    notes: function () {
      return this.$store.state.notes
    }
  },
  watch: {
  }
}
</script>

<style>
.list-group {
  min-height: 300px;
}
</style>
