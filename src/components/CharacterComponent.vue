<template>
<div>
    <div class="container mx-auto">
        <div class="flex justify-center px-6 py-12">
            <!-- Row -->
            <div class="w-full max-w-4xl flex border rounded-lg shadow">
                <!-- Col -->
                <div
                    class="h-auto bg-gray-300 bg-opacity-80 flex w-5/12 bg-cover rounded-l-lg items-center justify-center"
                >
                 <img :src="myChar.imageUrl" alt="Avatar image" width="80%" height="80%"> 
                </div>
                <!-- Col -->
                <div class="w-7/12 p-5 bg-gray-300 bg-opacity-80">
                    <form class="px-8 py-6 rounded">
                        <div class="mb-4 items-center">
                            <label class="block mb-2 text-sm font-bold text-gray-900" for="email">
                                Name
                            </label>
                            <input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline text-center"
                                id="email"
                                type="text"
                                v-model="myChar.name"
                                readonly
                            />
                        </div>
                        <div class="flex items-start space-x-5">
                        <div class="mb-4 flex flex-col w-2/3">
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-900" for="firstName">
                                    Race
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline text-center"
                                    id="firstName"
                                    type="text"
                                    v-model="myChar.race"
                                    readonly
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-900" for="firstName">
                                   Gender
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline text-center"
                                    id="firstName"
                                    type="text"
                                    v-model="myChar.gender"
                                    readonly
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-bold text-gray-900" for="lastName">
                                    Class
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline text-center"
                                    id="lastName"
                                    type="text"
                                    v-model="myChar.className"
                                    readonly
                                />
                            </div>
                        </div>
                        <div class="mb-4 flex items-center justify-center w-full">
                            <div class="mb-4 w-full">
                                <label class="block mb-2 text-sm font-bold text-gray-900 " for="password">
                                    Spells
                                </label>
                                <div class="h-[194px] pl-3 overflow-y-scroll border rounded shadow-sm w-full text-center bg-white" v-if="!adding">
                                    <ul v-for="el in myChar.spell" :key="el.id">
                                        <li class="border-b mb-1">{{el}}</li>
                                    </ul>
                                </div>
                                <div class="h-[194px] pl-3 overflow-y-scroll border rounded shadow-sm w-full text-center bg-white" v-if="adding">
                                    <ul v-for="el in myChar.spells" :key="el.id">
                                        <li class="border-b mb-1">{{el}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="flex items-center justify-center">
                        <div class="text-center w-full flex space-x-5 justify-center">
                            <button
                                class="w-48 px-4 py-3 font-bold text-gray-200 bg-reddnd rounded-lg hover:underline active:underline"
                                type="button" @click="deleteChar(myChar.id)" v-if="!adding"
                            >
                                Delete Character
                            </button>
                            <button
                                class="w-32 px-4 py-2 font-bold text-white bg-blue-400 rounded-lg hover:underline active:underline"
                                type="button" @click="toPrev" v-if="adding"
                            >
                                Previous
                            </button>
                            <button
                                class="px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:underline active:underline"
                                type="button" @click="toAdd" v-if="adding"
                            >
                                Create Character
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
    name: "CharacterComponent",
    props: ["myChar", "adding"],
    methods: {
        deleteChar(id) {
            this.$store.dispatch("deleteChar", id)
            .then(() => {
                return this.$store.dispatch("getMyCharacters");
            })
            .then(({data}) => {
                this.$store.commit("set_my_characters", data)
            })
        },
        toPrev() {
            this.$emit("toPrev", 2);
        },
        toAdd() {
            this.$emit("addCharacter");
        }
    }
}
</script>

<style>

</style>