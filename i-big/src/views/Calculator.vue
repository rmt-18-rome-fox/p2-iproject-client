<template>
  <div class="container py-5">
    <!-- For demo purpose -->
    <div class="row mb-4">
      <div class="col-lg-8 mx-auto text-center">
        <h1 class="display-6">Body Mass Index</h1>
      </div>
    </div>
    <!-- End -->
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <div class="card">
          <div class="card-header">
            <!-- Credit card form content -->
            <div class="tab-content">
              <!-- credit card info-->
              <div id="credit-card" class="tab-pane fade show active pt-3">
                <form role="form" @submit.prevent="calculateBMI">
                  <div class="form-group">
                    <label for="username">
                      <h6>Age</h6>
                    </label>
                    <input
                      v-model="calculator.age"
                      type="number"
                      min="0"
                      max="150"
                      name="username"
                      placeholder="Your Age"
                      required
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="username">
                      <h6>Weight</h6>
                    </label>
                    <input
                      v-model="calculator.weight"
                      type="number"
                      min="0"
                      max="250"
                      name="username"
                      placeholder="Your Weight in KG"
                      required
                      class="form-control"
                    />
                  </div>
                   <div class="form-group">
                    <label for="username">
                      <h6>Height</h6>
                    </label>
                    <input
                      v-model="calculator.height"
                      type="number"
                      min="0"
                      max="250"
                      name="username"
                      placeholder="Your Height in CM"
                      required
                      class="form-control"
                    />
                  </div>
                  <div class="card-footer">
                    <button
                      type="submit"
                      class="subscribe btn btn-primary btn-block shadow-sm"
                    >
                      Calculate
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: "Calculator",

  data() {
      return {
          calculator : {
              age : "",
              width : "",
              height : ""
          }
      }
  },

  methods: {
    ...mapActions(["calBMI"]),

    async calculateBMI() {
        await this.calBMI(this.calculator)

        this.calculator = {
              age : "",
              width : "",
              height : ""
          }

    }
  }
};
</script>

<style>
</style>