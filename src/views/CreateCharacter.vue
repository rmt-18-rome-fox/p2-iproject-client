<template>
  <div>
      {{classes}}
      {{spells}}
      {{races}}
  </div>
</template>

<script>
export default {
    name: "CreateCharacter",
    data() {
        return {
            character: {
                name: "",
                gender: "",
                race: "",
                className: "",
                spells: "",
            },            
            imageQuerry: `${this.character.race} ${this.character.className} ${this.character.gender}`,
        }
    },
    computed: {
        imageResult() {
            return this.$store.state.imageResult
        },
        classes() {
            return this.$store.state.classes
        },
        spells() {
            return this.$store.state.spells
        },
        races() {
            return this.$store.state.races
        },
    },
    methods: {
        findImage() {
            this.$state.dispatch("findImage", this.imageQuerry)
            .then(({data}) => {
                this.$store.commit("set_image_result", data) 
            })
        },
        addCharacter() {
            this.$state.dispatch("addCharacter", this.character)
            .then(() => {
                this.$router.push("/MyCharacters")
            })
        }
    }
}
</script>

<style>

</style>