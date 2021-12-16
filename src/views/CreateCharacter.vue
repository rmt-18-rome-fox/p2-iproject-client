<template>
  <div>
      <create-character-component></create-character-component>
  </div>
</template>

<script>
import axios from "axios"
import CreateCharacterComponent from '../components/CreateCharacterComponent.vue'
export default {
  components: { CreateCharacterComponent },
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
            schools: [],
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
            const imageQuerry= `${this.character.race} ${this.character.className} ${this.character.gender}`;
            this.$state.dispatch("findImage", imageQuerry)
            .then(({data}) => {
                this.$store.commit("set_image_result", data) 
            })
        },
        addCharacter() {
            this.$state.dispatch("addCharacter", this.character)
            .then(() => {
                this.$router.push("/MyCharacters")
            })
        },
        fetchSchools() {
            axios({
                method: "get",
                url: "https://www.dnd5eapi.co/api/magic-schools/"
            })
            .then(({data}) => {
                this.schools = data.results;
            })
        }
    },
    created() {
        this.fetchSchools();
        this.$store.dispatch("getRaces");
        this.$store.dispatch("getSpells");
        this.$store.dispatch("getClasses");
    }
}
</script>

<style>

</style>