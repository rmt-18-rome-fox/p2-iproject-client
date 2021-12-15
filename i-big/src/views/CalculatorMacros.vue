<template>
  <div class="container py-5">
    <!-- For demo purpose -->
    <div class="row mb-4">
      <div class="col-lg-8 mx-auto text-center">
        <h1 class="display-6">Macros Amount</h1>
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
                <form role="form" @submit.prevent="calculateMacros">
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


                  <div class="form-group "> 
                      <label for="Select Your Bank">
                        <h6>Select your Gender</h6>
                    </label> <select @change="genderSelected($event)" class="form-control" id="ccmonth">
                        <option value="" selected disabled>--Please select your Gender--</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select> </div>


                    <div class="form-group "> 
                      <label for="Select Your Bank">
                        <h6>Select your Activity Level</h6>
                    </label> <select @change="activityLevel($event)" class="form-control" id="ccmonth">
                        <option value="" selected disabled>--Please select your Activity Level--</option>
                        <option value="1">Basal Metabolic Rate (Daily Basic)</option>
                        <option value="2">Sedentary: little or no exercise</option>
                        <option value="3">Exercise 1-3 times/week</option>
                        <option value="4">Exercise 4-5 times/week</option>
                        <option value="5">Daily exercise or intense exercise 3-4 times/week</option>
                        <option value="6">Intense exercise 6-7 times/week"</option>
                        <option value="7">Very intense exercise daily, or physical job</option>
                    </select> </div>


                    <div class="form-group "> 
                      <label for="Select Your Bank">
                        <h6>Select your Goals</h6>
                    </label> <select @change="goalsSelected($event)" class="form-control" id="ccmonth">
                        <option value="" selected disabled>--Please select your Goals--</option>
                        <option value="maintain">Maintain weight</option>
                        <option value="mildlose">Mild weight loss</option>
                        <option value="weightlose">Weight loss</option>
                        <option value="extremelose">Extreme weight loss</option>
                        <option value="mildgain">Mild weight gain</option>
                        <option value="weightgain">Weight gain</option>
                        <option value="extremegain">Extreme weight gain</option>
                    </select> </div>
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
  name: "CalculatorMacros",

  data() {
      return {
          calculator : {
              age : "",
              weight : "",
              height : "",
              gender : "",
              level : "",
              goals : ""
          }
      }
  },

  methods: {
    ...mapActions(["calMacros"]),

    genderSelected(event) {
        this.calculator.gender = event.target.value;
    },

    activityLevel(event) {
        this.calculator.level = event.target.value;
    },

    goalsSelected(event) {
        this.calculator.goals = event.target.value;
    },


    async calculateMacros() {
        await this.calMacros(this.calculator)

        this.calculator = {
              age : "",
              width : "",
              height : "",
              gender : "",
              level : "",
              goals : ""
          }

    }
  }
};
</script>

<style>
</style>