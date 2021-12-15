<template>
  <div class="home">
    <div class="container" style="width: 500px">
      <form @submit.prevent="filterGames"> 
        <select class="browser-default custom-select" @change="genreChange($event)"  v-model="genre">
          <option value="">Genre</option>
          <option value="Card">Card Game</option>
          <option value="Fighting">Fighting</option>
          <option value="MMO">MMO</option>
          <option value="MOBA">MOBA</option>
          <option value="Shooter">Shooter</option>
          <option value="Social">Social</option>
          <option value="Strategy">Strategy</option>
        </select>
        <br /><br />

        <input
          type="search"
          class="form-control"
          placeholder="Game Title"
          v-model="title"
        />

        <br /><br />
        <button class="btn btn-primary" type="submit">Filter</button>
      </form>
      <br>
      <div
      class="container"
      style="
        background-color: #677DB7;
        padding: 50px;
        border-radius: 25px;
        width: 600px;
      "
    >
      <h2 style="color:white;">News Title : {{news[0].title}}</h2>
      <p style="color:white;">Url Link : {{news[0].url}}</p>
      <h4 style="color:white;">Source : {{news[0].source}}</h4>

      </div>
      <br>
    </div>
    <div class="container mt-5 mb-5">
      <MyCard v-for="game in games.Posts" :key="game.id" :game="game"></MyCard>
      <br /><br />
      <div class="flex justify-center">
        <div class="flex rounded-md mt-8">
          <a
            @click.prevent="previousPage"
            href=""
            class="
              py-2
              px-4
              leading-tight
              bg-white
              border border-gray-200
              text-blue-700
              border-r-0
              ml-0
              rounded-l
              hover:bg-blue-500 hover:text-white
            "
            ><span>Previous</span></a
          >
          <a
            href=""
            class="
              py-2
              px-4
              leading-tight
              bg-white
              border border-gray-200
              text-blue-700
              rounded-r
              hover:bg-blue-500 hover:text-white
            "
            ><span>{{this.page}}</span></a
          >
          <a
            @click.prevent="nextPage"
            href=""
            class="
              py-2
              px-4
              leading-tight
              bg-white
              border border-gray-200
              text-blue-700
              rounded-r
              hover:bg-blue-500 hover:text-white
            "
            ><span>Next</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyCard from "@/components/MyCard.vue";
import Swal from "sweetalert2";

export default {
  name: "Home",
   data() {
    return {
      genre: "",
      title: "",
      page: 1,
    };
  },
  components: {
    MyCard,
  },
  methods: {
    Games() {
      this.$store.dispatch("fetchGames");
    },
     News() {
      this.$store.dispatch("fetchNews");
    },
     genreChange(event) {
      const gamegenre = event.target.value;
      this.genre = gamegenre;
    },
    filterGames() {
      const filters = {
        genre: this.genre,
        title: this.title,
        page: this.page,
      };
      console.log(filters, `DIFILER`);
      this.$store
        .dispatch("filtered", filters)
        .then((data) => {
          this.News()
          console.log(data.Posts, `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`)
          if (data.TotalPage < this.page || data.TotalGames === 0) {
            this.page = 1;
            Swal.fire({
              icon: "error",
              title: "Oops... Lets go Back",
              text: `There's No Post With That Detail or There's no more Post in next Page`,
            });
            const back = {
              genre: "",
              title: "",
              page: 1,
            };
            this.$store.dispatch("filtered", back);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    nextPage() {
      let currentpage = (this.page += 1);
      if (currentpage <= 0) {
        currentpage = 1;
        this.page = 1;
      }

      const filters = {
        genre: this.genre,
        title: this.title,
        page: currentpage,
      };

        console.log(filters, `DIFILER NEXT`);
      this.$store
        .dispatch("filtered", filters)
        .then((data) => {
           this.News()
          if (data.TotalPage < this.page || data.TotalGames === 0) {
            this.page = 1;
            Swal.fire({
              icon: "error",
              title: "Oops... Lets go Back",
              text: `There's No Post With That Detail or There's No More Post in Next Page`,
            });
            const back = {
              genre: "",
              title: "",
              page: 1,
            };
            this.$store.dispatch("filtered", back);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    previousPage() {
      let currentpage = (this.page -= 1);
      if (currentpage <= 0) {
        currentpage = 1;
        this.page = 1;
      }
      const filters = {
        genre: this.genre,
        title: this.title,
        page: currentpage,
      };
      console.log(filters, `DIFILER PREV`);
      this.$store
        .dispatch("filtered", filters)
        .then((data) => {
           this.News()
          if (data.TotalPage < this.page || data.TotalGames === 0) {
            this.page = 1;
            Swal.fire({
              icon: "error",
              title: "Oops... Lets go Back",
              text: `There's No Post With That Detail or There's no more Post in next Page`,
            });
            const back = {
              genre: "",
              title: "",
              page: 1,
            };
            this.$store.dispatch("filtered", back);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },


  },
  created() {
    this.Games();
    this.News()
  },
  computed: {
    games() {
      return this.$store.state.games;
    },
     news() {
      return this.$store.state.News;
    },
  },
};
</script>

<style>
body {
  background: #eee;
}

.ratings i {
  font-size: 16px;
  color: red;
}

.strike-text {
  color: red;
  text-decoration: line-through;
}

.product-image {
  width: 150%;
  height: 95%;
}

.dot {
  height: 7px;
  width: 7px;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 3px;
  background-color: blue;
  border-radius: 50%;
  display: inline-block;
}

.spec-1 {
  color: #938787;
  font-size: 15px;
}

h5 {
  font-weight: 400;
}

.para {
  font-size: 16px;
}

body {
  background: #ffd89b;
  background: -webkit-linear-gradient(to right, #ffd89b, #19547b);
  background: linear-gradient(to right, #ffd89b, #19547b);
}
</style>