<template>
  <div>
      <create-character-component :myChar="myChar" @toNext="toNext" v-if="page === 1"></create-character-component>
      <AvatarSelector :myChar="myChar" v-if="page === 2" @toNext="toNext" @toPrev="toPrev"/>
      <CharacterComponent :myChar="myChar" v-if="page === 3" :adding="true" @addCharacter="addCharacter" @toPrev="toPrev"/>
  </div>
</template>

<script>
import axios from "axios"
import CreateCharacterComponent from '../components/CreateCharacterComponent.vue'
import CharacterComponent from '../components/CharacterComponent.vue'
import AvatarSelector from './AvatarSelector.vue'
export default {
  components: { CreateCharacterComponent, AvatarSelector, CharacterComponent },
    name: "CreateCharacter",
    data() {
        return {
            myChar: {
                name: "",
                gender: "",
                race: "",
                className: "",
                spells: [],
                spell: "",
                imageUrl: "",
            },                      
            schools: [],
            page: 1,
        }
    },
    computed: {
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
        addCharacter() {
            this.$store.dispatch("addCharacter", this.myChar)
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
        },
        toNext(id) {
            this.page = id;
        },
        toPrev(id) {
            this.page = id;
        },
    },
    created() {
        this.fetchSchools();
        this.$store.dispatch("getRaces");
        this.$store.dispatch("getSpells");
        this.$store.dispatch("getClasses");
        this.page = 1;
    }
}
</script>

<style>

</style>