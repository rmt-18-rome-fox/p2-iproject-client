<template>
  <div>
    <Navbar></Navbar>
    <div class="semi-body-form d-flex">
      <div class="main-container-form d-flex">
        <div class="container1-form m-5 d-flex flex-column col-3">
          <a href="https://www.freepnglogos.com/pics/coffee-logo-png" title="Image from freepnglogos.com"><img :src="imageUrl" height="300" alt="coffee logo design creative idea logo elements" /></a>
          <img src="https://www.freepnglogos.com/pics/coffee-logo-png" alt="" srcset="" />
        </div>
        <div class="container2-form m-5 d-flex flex-column col-7">
          <h1>Form Edit</h1>
          <br />
          <form class="col-8" @submit.prevent="editProduct">
            <!-- Name input -->
            <div class="form-outline mb-4">
              <input type="text" id="inputNameProductEdit" class="form-control" placeholder="Name" v-model="name" />
              <label class="form-label" for="inputNameProduct">Name</label>
            </div>

            <!-- Description input -->
            <div class="form-outline mb-4">
              <input type="text" id="inputDescriptionProductEdit" class="form-control" placeholder="Description" v-model="description" />
              <label class="form-label" for="inputDescriptionProduct">Description</label>
            </div>

            <!-- Type input -->
            <div class="form-outline mb-4">
              <input type="text" id="inputTypeProductEdit" class="form-control" placeholder="Type" v-model="type" />
              <label class="form-label" for="inputTypeProduct">Type</label>
            </div>

            <!-- Roast Level input -->
            <div class="form-outline mb-4 form-group">
              <select id="inputRoastLevelProductEdit" class="form-control" aria-label=".form-select-sm example" v-model="roastLevel">
                <option disabled selected>Choose Roast Level...</option>
                <option value="Light">Light</option>
                <option value="Medium">Medium</option>
                <option value="Dark">Dark</option>
              </select>
              <label for="inputRoastLevelProduct">Roast Level</label>
            </div>

            <!-- Grind Size input -->
            <div class="form-outline mb-4 form-group">
              <select id="inputGrindSizeProductEdit" class="form-control" aria-label=".form-select-sm example" v-model="grindSize">
                <option disabled selected>Choose Roast Level...</option>
                <option value="Fine">Fine</option>
                <option value="Medium">Medium</option>
                <option value="Coarse">Coarse</option>
              </select>
              <label for="inputGrindSizeProduct">Grind Size</label>
            </div>

            <!-- Price input -->
            <div class="form-outline mb-4">
              <input type="number" id="inputPriceProductEdit" class="form-control" placeholder="Price" v-model="price" />
              <label class="form-label" for="inputPriceProduct">Price</label>
            </div>

            <!-- Stock input -->
            <div class="form-outline mb-4">
              <input type="number" id="inputStockProductEdit" class="form-control" placeholder="Stock" v-model="stock" />
              <label class="form-label" for="inputStockProduct">Stock</label>
            </div>

            <!-- Image URL input -->
            <div class="form-outline mb-4">
              <input type="text" id="inputImageUrlProductEdit" class="form-control" placeholder="Image URL" v-model="imageUrl" />
              <label class="form-label" for="inputImageUrlProduct">Image URL</label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn-signin btn btn-primary btn-block mb-4">Edit Product</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
  name: 'FormEdit',
  data() {
    return {
      name: '',
      description: '',
      type: '',
      grindSize: '',
      roastLevel: '',
      price: '',
      stock: '',
      imageUrl: '',
    };
  },
  methods: {
    // ===============================>>> METHODS UNTUK EDIT PRODUCT <<<===============================
    editProduct() {
      const payload = {
        id: this.$route.params.id,
        name: this.name,
        description: this.description,
        type: this.type,
        roastLevel: this.roastLevel,
        grindSize: this.grindSize,
        price: this.price,
        stock: this.stock,
        imageUrl: this.imageUrl,
      };
      this.$store
        .dispatch('editProduct', payload)
        .then(() => {
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Navbar,
  },
  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch('fetchCoffeePowdersById', +this.$route.params.id).then(() => {
      //   console.log(this.$store.state.coffeePowdersById, 'AAAAAAAAAAAAA');
      //   this.$store.state.coffeePowdersById;
      this.name = this.$store.state.coffeePowdersById.name;
      this.description = this.$store.state.coffeePowdersById.description;
      this.type = this.$store.state.coffeePowdersById.type;
      this.roastLevel = this.$store.state.coffeePowdersById.roastLevel;
      this.grindSize = this.$store.state.coffeePowdersById.grindSize;
      this.price = this.$store.state.coffeePowdersById.price;
      this.stock = this.$store.state.coffeePowdersById.stock;
      this.imageUrl = this.$store.state.coffeePowdersById.imageUrl;
    });
  },
  computed: {
    // coffeePowdersById: function () {
    //   return this.$store.state.coffeePowdersById;
    // },
    coffeePowderUpdateId: function () {
      return this.$store.state.coffeePowderUpdateId;
    },
  },
};
</script>

<style>
.semi-body-form {
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  background-color: #fcf1cf;
}
.container1-form {
  justify-content: center;
  align-items: center;
}
.container2-form {
  justify-content: center;
  align-items: center;
  display: flex;
}
.main-container-form {
  background-color: #bfd973;
  width: 75vw;
  /* height: 75vh; */
  margin-top: 120px;
  border-radius: 40px;
}
.container2-form h1 {
  color: #4b450e;
}
.container2-form .btn-signin {
  background-color: #4b450e;
  border-color: #4b450e;
}
.container2-form .btn-signin:hover {
  background-color: #dbb736;
  border-width: 1px;
  color: #4b450e;
  font-weight: bold;
}
.container1-form img {
  margin-left: 150px;
}
</style>
