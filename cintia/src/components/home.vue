<template>
  <!-- MoviesCard -->
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Spider-Man: No Way Home"
        text="With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
        img-src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-runtime.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="The Matrix Resurrections"
        text="The plot is currently unknown."
        img-src="https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/The-Matrix-Resurrections.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="The King's Man"
        text="In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions."
        img-src="https://m.media-amazon.com/images/M/MV5BOTY5YzIwMjktZjQ3Ny00NDUyLTg2MjctNTQ3NzQ5NjY2YzljXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="American Underdog"
        text="The story of NFL MVP and Hall of Fame quarterback, Kurt Warner, who went from stocking shelves at a supermarket to becoming an American Football star."
        img-src="https://w0.peakpx.com/wallpaper/290/660/HD-wallpaper-american-underdog-movie.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    fetchMovies() {
      this.$store
        .dispatch("aFetch")
        .then((res) => {
          this.movies = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchMovies();
  },
};
</script>

<style></style>
