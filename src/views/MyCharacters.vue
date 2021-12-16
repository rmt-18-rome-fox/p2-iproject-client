<template>
  <div>
      <CharacterComponent v-for="myChar in myCharacters" :key="myChar.id" :myChar="myChar"/>
  </div>
</template>

<script>
import CharacterComponent from '../components/CharacterComponent.vue';
export default {
  components: { CharacterComponent },
    name: "MyCharacter",
    computed: {
        myCharacters() {
            return this.$store.state.myCharacters
        }
    },
    created() {
        this.$store.dispatch("getMyCharacters")
        .then(({data}) => {
            this.$store.commit("set_my_characters", data)
        });
    }
}
</script>

<style>

</style>