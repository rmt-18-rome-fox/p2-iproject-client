<template>
<div class="flex flex-col items-center pt-24">
    <img src="../../public/dndbghero.png" alt="hero image" width="60%" height="60%"/>

     <div class="w-full space-x-10 -mt-20">
      <button class="bg-yellowdnd px-10 py-4 font-bold text-reddnd border-2 border-reddnd rounded-lg hover:underline active:underline" @click="toMyChara">
          Browse Characters
      </button>
      <button class="bg-reddnd px-10 py-4 text-yellowdnd font-bold border-2 border-yellowdnd rounded-lg hover:underline active:underline" @click="toCreate">
          Create Characters
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomePage",
    methods: {
        toMyChara() {
            this.$router.push("/mycharacters")
        },
        toCreate() {
            this.$router.push("/create")
        }
    }
}
</script>

<style>

</style>