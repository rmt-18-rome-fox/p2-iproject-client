<template>
   <div class="container py-5">
    <!-- For demo purpose -->
    <div class="row mb-4">
      <div class="col-lg-8 mx-auto text-center">
        <h1 class="display-6"> Ideal Body Weight</h1>
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
                <form role="form" @submit.prevent="calculateIdeal">
                  <div class="form-group "> 
                      <label for="Select Your Bank">
                        <h6>Select your Gender</h6>
                    </label> <select @change="genderSelected($event)" class="form-control" id="ccmonth">
                        <option value="" selected disabled>--Please select your Gender--</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select> </div>
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
    name : 'CalculatorIdeal',

     data() {
      return {
          calculator : {
              height : "",
              gender : ""
          }
      }
     },

    methods : {
        ...mapActions(["calIdeal"]),

        genderSelected(event) {
        this.calculator.gender = event.target.value;
        },

        async calculateIdeal() {
        await this.calIdeal(this.calculator)

        this.calculator = {
              gender : "",
              height : ""
          }

        }

    }
}
</script>

<style>

</style>