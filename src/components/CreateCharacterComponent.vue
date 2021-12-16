<template>
<div>
    <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full max-w-4xl flex justify-center border rounded-lg bg-white bg-opacity-80">
                <!-- Col -->
                <div class="w-[800px] p-5 rounded-lg lg:rounded-l-none">
                    <form class="px-8 pt-6 pb-8 mb-4 rounded">
                        <div class="pb-4">
                            <label class="block pb-2 text-sm font-bold text-gray-900" for="name">
                                Name
                            </label>
                            <input
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline  focus:bg-white focus:border-blue-600"
                                id="name"
                                type="text"
                                v-model="myChar.name"
                                required
                            />
                        </div>
                        <div>
                            <div class="pb-4">
                                <label class="block pb-2 text-sm font-bold text-gray-900" for="gender">
                                    Gender
                                </label>
                                <select name="Gender"  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" v-model="myChar.gender">
                                    <option value="" disabled selected>Select your option</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div class="pb-4">
                                <label class="block pb-2 text-sm font-bold text-gray-900" for="race">
                                    Race
                                </label>
                                <select name="race"  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" v-model="myChar.race">
                                    <option value="" disabled selected>Select your option</option>
                                    <option v-for="(el,id) in races.results" :key="id" :value="el.name">{{el.name}}</option>
                                </select>
                            </div>
                            <div class="pb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-900" for="className">
                                    Class
                                </label>
                                <select name="className"  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" v-model="myChar.className">
                                    <option value="" disabled selected>Select your option</option>
                                    <option v-for="(el,id) in classes.results" :key="id" :value="el.name">{{el.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex items-start justify-between w-full pb-4 space-x-10">
                            <div class="w-1/2">
                                <label class="block mb-2 text-sm font-bold text-gray-900" for="spellPick">
                                    List of Spells
                                </label>
                                <select name="spellPick"  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" v-model="selectedSpell">
                                    <option value="" disabled selected>Select your option</option>
                                    <option v-for="(el,id) in spellList.results" :key="id" :value="el.name">{{el.name}}</option>
                                </select>
                                <button type="button" @click="addSpell" class="mt-3 px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:underline active:underline">addSpell</button>
                            </div>
                            <div class="w-1/2">
                                <label class="block mb-2 text-sm font-bold text-gray-900" for="spells">
                                    Spells Picked
                                </label>
                            <div class="h-40 overflow-y-scroll border rounded shadow-sm bg-white text-left py-1 px-4">
                                <ul v-for="el in myChar.spells" :key="el.id">
                                    <li class="border-b py-1">{{el}}</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                        <div class="mb-6 text-center w-48 pt-4">
                            <button
                                class="w-full px-4 py-3 font-bold text-white bg-blue-600 rounded-lg hover:underline active:underline"
                                type="button" @click="toNext"
                            >
                                Next
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
            selectedSpell: "",
        }
    },
    props: ["myChar"],
    computed: {
        spellList() {
            return this.$store.state.spells
        },
        classes() {
            return this.$store.state.classes
        },
        races() {
            return this.$store.state.races
        },
    },
    methods: {
        addSpell() {
            console.log("tes")
            // this.myChar.spells+=this.myChar.spells.length === 0 ? this.selectedSpell : `,${this.selectedSpell}`;
            this.myChar.spells.push(this.selectedSpell);
        },
        addCharacter() {
            this.$store.dispatch("addCharacter", this.myChar);
        },
        toNext() {
            this.myChar.spell = this.myChar.spells.join(",");
            console.log(this.myChar.spell);
            this.$emit("toNext", 2);
        }
    }
}
</script>

<style>

</style>