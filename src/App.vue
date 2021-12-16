<template>
  <div>

    <!-- <navigation-bar></navigation-bar> -->
    <main>
      <div class="side-panel">
        <test-navigation
          @searchTextChanged="onSearchTextChanged"
          @changeSorting="onChangeSorting"
          :average="average"
        ></test-navigation>

        <test-country-list
          :countries="computedCountries"
          :selectedIndex="selectedIndex"
          :selectItem="selectItem"
          style="width: 300px"
        ></test-country-list>
      </div>
      <test-map
        :latlng="(countries[selectedIndex] || {}).latlng" 
        :countries="computedCountries"
      ></test-map>

    </main>
    <router-view/>
  </div>
</template>

<script>
import TestNavigation from "./components/TestNavigation.vue";
import TestCountryList from "./components/TestCountryList.vue";
import TestMap from "./components/TestMap.vue";
// import NavigationBar from './components/NavigationBar.vue'

export default ({
  name: "App",
  components: { 
    // NavigationBar,
    TestNavigation,
    TestCountryList,
    TestMap
  },
  data: () => ({
    searchText: "",
    countries: [],
    selectedIndex: null,
    isSortAlphabetical: true
  }),
  computed: {
    computedCountries: function() {
      const filteredCountries = this.countries.filter(({ name }) =>
        name.toLowerCase().includes(this.searchText.toLowerCase())
      );
      return this.isSortAlphabetical
        ? filteredCountries.sort((a, b) => a.name - b.name)
        : filteredCountries.sort((a, b) => b.population - a.population);
    },
    average: function() {
      if (!this.computedCountries || this.computedCountries.length === 0)
        return 0;
      const total = this.computedCountries.reduce(
        (subtotal, { population }) => subtotal + population,
        0
      );
      return total / this.computedCountries.length;
    }
  },
  methods: {
    selectItem(index) {
      if (this.selectedIndex === index) {
        this.selectedIndex = null;
      } else {
        this.selectedIndex = index;
      }
    },
    onSearchTextChanged(value) {
      this.searchText = value;
    },
    onChangeSorting() {
      this.isSortAlphabetical = !this.isSortAlphabetical;
    }
  },
  async created() {
    const countries = await fetch(
      "https://restcountries-v1.p.mashape.com/all",
      {
        headers: {
          "X-Mashape-Key": "l5eMXwY6d3mshmvnljsx6GVH9YWxp1IsKhsjsnSAZ5yXpYiGRl"
        }
      }
    ).then(r => r.json());
    if (Array.isArray(countries)) {
      this.countries = countries;
    }
  }
})
</script>

<style>
body {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F4F4F4;
}
main {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.side-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 8px;
}
</style>