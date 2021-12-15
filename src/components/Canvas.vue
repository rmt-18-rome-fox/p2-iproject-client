<template>
  <div>
    <canvas 
      class="canvas-style"
      :id="canvasId"
      v-on:mousedown="mouseDown"
    />
  </div>
</template>

<script>
import paper from 'paper'

export default {
  name: 'Canvas',
  props: ['canvasId'],
  data: () => ({
    path: null,
    scope: null
  }),
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    chat: function (data) {
      console.log('chat: ', data)
    },
    draw: function (data) {
      // console.log('di receiver client', data)
      this.drawer(data)
    },
    mouseDown: function () {
      this.mouseHandler(true)
    },
    reset: function () {
      this.reset()
    }
  },
  methods: {
    reset () {
      this.scope.project.activeLayer.removeChildren()
      this.$socket.emit('reset')
    },
    pathCreate (scope) {
      scope.activate()
      return new paper.Path({
        strokeColor: '#000000',
        strokeJoin: 'round',
        strokeWidth: 1.5
      })
    },
    createTool (scope) {
      scope.activate()
      return new paper.Tool()
    },
    mouseDown () {
      this.tool = this.createTool(this.scope)
      this.tool.onMouseDown = (event) => {
        this.$socket.emit('mouseDown')
        this.path = this.pathCreate(this.scope)
        const x = event.point.x
        const y = event.point.y
        this.drawer({ x, y })
        this.$socket.emit('draw', { x, y })
      }
      this.tool.onMouseDrag = (event) => {
        const x = event.point.x
        const y = event.point.y
        this.drawer({ x, y })
        this.$socket.emit('draw', { x, y })
      }
      this.tool.onMouseUp = (event) => {
        const x = event.point.x
        const y = event.point.y
        this.drawer({ x, y })
        this.$socket.emit('draw', { x, y })
      }
    },
    drawer (data) {
      this.path.add(data)
    },
    mouseHandler (data) {
      if (data) {
        this.path = this.pathCreate(this.scope)
      } else {
        this.path = null
      }
    }
  },
  mounted () {
    this.scope = new paper.PaperScope()
    this.scope.setup(this.canvasId)
  }
}
</script>

<style>
.canvas-style {
  cursor: crosshair;
  width: 100% !important;
  height: 500px !important;
  border: 5px solid black;
  border-radius: 10px;
  display: block;
  margin: auto;
  box-shadow: 0 10px 8px -8px black;
}
</style>
