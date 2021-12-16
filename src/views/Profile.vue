<template>
  <div class="bg-light vh-100 vw-100 d-flex justify-content-center align-items-center overflow-hidden">
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 d-flex justify-content-center align-items-center">
        <div class="bg-white px-5 pt-5 pb-4 rounded w-50">
          <h1 class="mb-3 text-center font-weight-bold mt-3">Tetangga</h1>
          <h4 class="mb-3 text-center font-weight-bold mt-3">Data Diri</h4>
          <b-form class="" @submit.prevent="submitProfile">
            <b-form-group
              id="namLengkap"
              label-for="namLengkap"
            >
              <b-form-input
                id="namaLengkap"
                v-model="form.namaLengkap"
                type="text"
                placeholder="Nama Lengkap"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="profileImg"
              label-for="profileImg"
            >
              <b-form-file 
                multiple 
                required
                v-model="form.profileImg"
                placeholder="Profile Gambar"
              ></b-form-file>
            </b-form-group>

            <b-form-group
              id="alamat"
              label-for="alamat"
            >
              <b-form-input
                id="alamat"
                v-model="form.alamat"
                placeholder="Alamat Ex: Nama Jalan, Gang, dst..."
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="rtRw"
              label-for="rtRw"
            >
              <b-form-input
                id="rtRw"
                v-model="form.rtRw"
                placeholder="RT / RW Ex: 01/01"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="kelurahan"
              label-for="kelurahan"
            >
              <b-form-input
                id="kelurahan"
                v-model="form.kelurahan"
                placeholder="Kelurahan Ex: Rawa Mekar"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="kecamatan"
              label-for="kecamatan"
            >
              <b-form-input
                id="kecamatan"
                v-model="form.kecamatan"
                placeholder="Kecamatan Ex: Serpong"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="kotaKab"
              label-for="kotaKab"
            >
              <b-form-input
                id="kotaKab"
                v-model="form.kotaKab"
                placeholder="Kota / Kabupaten Ex: Tangerang Selatan"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="provinsi"
              label-for="provinsi"
            >
              <b-form-input
                id="provinsi"
                v-model="form.provinsi"
                placeholder="Provinsi Ex: Banten"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" block variant="primary">Submit Profile</b-button>
          </b-form>
          <button
            class="btn btn-outline-secondary w-100 mt-2"
            @click="actionLogout"
          >Logout</button>
        </div>
      </div>
      <div class="col-6 img-side">
        <img src="../assets/tetangga-login.jpg" alt="Background Login">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "Profile",
  data() {
    return {
      form: {
        namaLengkap: '',
        profileImg: [],
        alamat: '',
        rtRw: '',
        kelurahan: '',
        kecamatan: '',
        kotaKab: '',
        provinsi: '',
        lat: '',
        long: '',
      }
    }
  },
  methods: {
    ...mapActions(['doLogout', 'createProfile']),
    async submitProfile (){
      // this.form.profileImg = this.$refs.file.files[0]
      await this.createProfile(this.form)

      if (this.isFillProfile) {
        this.$router.push('/')
      }
    },
    actionLogout () {
      this.doLogout()
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState(['isFillProfile'])
  }
}
</script>