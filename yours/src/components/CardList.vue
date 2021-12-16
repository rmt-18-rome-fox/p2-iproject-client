<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="profile-card-2" v-for="postUnsplash in postUnsplashs" :key="postUnsplash.id">
          <img :src="postUnsplash.urls.small" class="img img-responsive" />

          <div class="profile-icons">
            <a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="profile-card-2" v-for="postUser in postUsers" :key="postUser.id">
          <img :src="postUser.imageUrl" class="img img-responsive" />
          <div class="profile-name">{{ postUser.title }}</div>

          <div class="profile-icons">
            <a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  data() {
    return {
      postUnsplashs: [],
      postUsers: [],
    };
  },
  methods: {
    fetchPosts() {
      this.$store
        .dispatch("fetchPosts", localStorage.getItem("access_token"))
        .then((resp) => {
          // console.log(resp);
          this.postUnsplashs = resp.data.result;
          this.postUsers = resp.data.postUsers;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
.profile-card-2 {
  max-width: 300px;
  max-height: 400px;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  background-position: center;
  overflow: hidden;
  position: relative;
  margin: 10px auto;
  cursor: pointer;
  border-radius: 10px;
}

.profile-card-2 img {
  transition: all linear 0.25s;
}

.profile-card-2 .profile-name {
  position: absolute;
  left: 30px;
  bottom: 70px;
  font-size: 30px;
  color: #fff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-icons {
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: #fff;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-username {
  position: absolute;
  bottom: 50px;
  left: 30px;
  color: #fff;
  font-size: 13px;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-icons .fa {
  margin: 5px;
}

.profile-card-2:hover img {
  filter: grayscale(100%);
}

.profile-card-2:hover .profile-name {
  bottom: 80px;
}

.profile-card-2:hover .profile-username {
  bottom: 60px;
}

.profile-card-2:hover .profile-icons {
  right: 40px;
}
</style>
