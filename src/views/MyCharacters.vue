<template>
  <div>
      <CharacterComponent v-for="myChar in myCharacters" :key="myChar.id" :myChar="myChar"/> 
      <div class="py-10">
          <button class="px-5 py-3 bg-yellowdnd rounded-lg text-reddnd font-bold" @click="toAddChara">Add a Character</button>
      </div>
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
    methods: {
        toAddChara() {
            this.$router.push("/create")
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