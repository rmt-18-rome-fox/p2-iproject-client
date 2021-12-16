<template>
<div>
    <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full max-w-7xl flex border rounded-lg">
                <!-- Col -->
                <div
                    class="h-auto bg-gray-400 flex w-5/12 bg-cover rounded-l-lg items-center justify-center"
                >
                 <img :src="myChar.imageUrl" alt="Avatar image" width="80%" height="80%"> 
                </div>
                <!-- Col -->
                <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                Name
                            </label>
                            <input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                v-model="myChar.name"
                            />
                        </div>
                        <div class="mb-4 md:flex md:justify-between">
                            <div class="mb-4 md:mr-2 md:mb-0">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                    Race
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    v-model="myChar.race"
                                    readonly
                                />
                            </div>
                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                    Class
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    v-model="myChar.className"
                                    readonly
                                />
                            </div>
                        </div>
                        <div class="mb-4 flex items-center justify-center">
                            <div class="mb-4 md:mr-2 md:mb-0">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                    Spells
                                </label>
                                <ul v-for="el in myChar.spell" :key="el.id">
                                    <li>{{el}}</li>
                                </ul>
                            </div>
                        </div>
                        <hr class="mb-6 border-t" />
                        <div class="flex items-center justify-center">
                        <div class="mb-6 text-center w-48">
                            <button
                                class="w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                type="button" @click="deleteChar(myChar.id)"
                            >
                                Delete Character
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
    props: ["myChar"],
    methods: {
        deleteChar(id) {
            this.$store.dispatch("deleteChar", id)
        }
    }
}
</script>

<style>

</style>