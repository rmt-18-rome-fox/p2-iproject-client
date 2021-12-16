<template>
<div>
    <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full max-w-4xl flex justify-center border rounded-lg">
                <!-- Col -->
                <div class="w-[800px] p-5 rounded-lg lg:rounded-l-none">
                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                        <div class="pb-4">
                            <label class="block pb-2 text-sm font-bold text-gray-700" for="name">
                                Name
                            </label>
                            <input
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline  focus:bg-white focus:border-blue-600"
                                id="name"
                                type="text"
                                v-model="myChar.name"
                            />
                        </div>
                        <div>
                            <div class="pb-4">
                                <label class="block pb-2 text-sm font-bold text-gray-700" for="race">
                                    Race
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-600"
                                    id="race"
                                    type="text"
                                    v-model="myChar.race"
                                />
                            </div>
                            <div class="pb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="className">
                                    Class
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-600"
                                    id="className"
                                    type="text"
                                    v-model="myChar.className"
                                />
                            </div>
                        </div>
                        <div class="flex items-start justify-between w-full pb-4 space-x-10">
                            <div class="w-1/2">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="spellPick">
                                    List of Spells
                                </label>
                                <select name="spellPick"  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" v-model="selectedSpell">
                                    <option v-for="(el,id) in spellList.results" :key="id" :value="el.name">{{el.name}}</option>
                                </select>
                                <button type="button" @click="addSpell" class="mt-3 px-4 py-2 font-bold text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:outline-none focus:shadow-outline">addSpell</button>
                            </div>
                            <div class="w-1/2">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="spells">
                                    Spells Picked
                                </label>
                            <div class="h-40 overflow-y-scroll border rounded shadow-sm">
                                <ul v-for="el in myChar.spells" :key="el.id">
                                    <li>{{el}}</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                        <div class="mb-6 text-center w-48 pt-4">
                            <button
                                class="w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                type="button" @click="addCharacter"
                            >
                                Add Character
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "CreateCharacterComponent",
    data() {
        return {
            myChar: {
                name: "",
                race: "",
                className: "",
                spells: [],
                spell: "",
            },
            selectedSpell: "",
        }
    },
    computed: {
        spellList() {
            return this.$store.state.spells
        }
    },
    methods: {
        addSpell() {
            console.log("tes")
            // this.myChar.spells+=this.myChar.spells.length === 0 ? this.selectedSpell : `,${this.selectedSpell}`;
            this.myChar.spells.push(this.selectedSpell);
        },
        addCharacter() {
            this.myChar.spell = this.myChar.spells.join(",");
            console.log(this.myChar);
            this.$store.dispatch("addCharacter", this.myChar);
        }
    }
}
</script>

<style>

</style>