import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    originCoord: localStorage.getItem("originCoord"),
    destinationCoord: localStorage.getItem("destCoord")
  },
  mutations: {
    SET_CURRENT_USER() {
      console.log("ok");
    },
  },
  actions: {
    calculate({ dispatch }, { originQuery, destQuery, weight }) {
      const path = `https://api.mapbox.com/directions/v5/mapbox/driving/${originQuery[0]}%2C${originQuery[1]}%3B${destQuery[0]}%2C${destQuery[1]}?alternatives=true&continue_straight=true&geometries=geojson&overview=simplified&steps=false&access_token=pk.eyJ1IjoiaWh6YW5hbnRhbWEiLCJhIjoiY2t4NW02Y3B3MDNhajJ2bzNtZzllcmhyYiJ9.keA6mU1OUSS8JqO9U9n8hg`;
      const carbon_interface_token = "bT4U08ocSLa5cd6Qp6nnA";

      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: path,
          headers: {
            Authorization: `Bearer ${carbon_interface_token}`,
          },
        })
          .then(({ data }) => {
            let distance = data.routes[0].distance / 1000;
            return dispatch("getCarbonFootprint", {distance, weight});
          })
          .then((response) => {
            console.log("masuk", response);
            console.log(
              "masuk kesini :",
              response.data.data.attributes.carbon_kg
            );
            const carbonEmitted = response.data.data.attributes.carbon_kg;
            resolve(carbonEmitted);
          })
          .catch((err) => {
            reject(err)
          });
      });
    },
    getCarbonFootprint(context, {distance, weight}) {
      const path = `https://www.carboninterface.com/api/v1/estimates`;
      const payload = {
        type: "shipping",
        weight_value: weight, //tambahkan weight
        weight_unit: "kg",
        distance_value: distance,
        distance_unit: "km",
        transport_method: distance > 1000 ? "plane" : "truck",
      };
      console.log(payload);
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: path,
          headers: {
            Authorization: "Bearer bT4U08ocSLa5cd6Qp6nnA",
          },
          data: {
            ...payload,
          },
        })
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
