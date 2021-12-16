<template>
  <div
    class="
      container
      max-w-screen-xl
      grid grid-cols-1
      place-items-center
      pt-6
      ml-56
    "
  >
    <div class="text-xl font-bold underline">
      <span>PREMIERE LEAGUE 2021</span>
    </div>
    <div class="text-xl p-6">
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="w-1/4 ..."></th>
            <th class="w-3/4 ...">Logo</th>
            <th class="w-3/4 ...">Club</th>
            <th class="w-1/4 ...">Win</th>
            <th class="w-1/4 ...">Draw</th>
            <th class="w-1/4 ...">Lose</th>
            <th class="w-1/4 ...">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="standing in standingTables" :key="standing.rank">
            <td>{{ standing.rank }}</td>
            <td>
              <img
                :src="standing.team.logo"
                :alt="standing.team.name"
                class="w-10 h-10"
              />
            </td>
            <td>{{ standing.team.name }}</td>
            <td>{{ standing.all.win }}</td>
            <td>{{ standing.all.draw }}</td>
            <td>{{ standing.all.lose }}</td>
            <td>{{ standing.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Standing",
  methods: {
    ...mapActions(["fetchTable"]),
  },
  computed: {
    ...mapState(["standingTables"]),
  },
  created() {
    this.fetchTable();
  },
};
</script>

<style>
</style>