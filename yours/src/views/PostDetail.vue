<template>
  <div class="container">
    <div class="card mb-3">
      <img :src="post.imageUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.description }}</p>
      </div>
      <div class="d-flex" style="margin-left: 10%">
        <a class="btn btn-get-started btn-get-started-yellow" @click.prevent="doDeletePost()">Delete</a>
      </div>
    </div>

    <div class="card mb-3">
      <h5 class="card-header">Add Comment</h5>
      <div class="card-body">
        <form @submit.prevent="addComment">
          <input class="form-control" aria-label="With textarea" v-model="comment" placeholder="Add your comment" />
          <div class="d-flex mt-3" style="margin-left: 8%">
            <button type="submit" class="btn btn-get-started btn-get-started-yellow">Add Comment</button>
          </div>
        </form>
      </div>
    </div>
    <div class="card mb-5" v-for="comment in comments" :key="comment.id">
      <div class="card-header">{{ comment.User.name }}</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{ comment.comment }}</p>
        </blockquote>
      </div>
      <div class="d-flex" style="margin-left: 10%">
        <a class="btn btn-get-started btn-get-started-yellow" @click.prevent="doDeleteComment(comment.id)">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
  data() {
    return {
      post: {},
      comments: [],
      comment: "",
    };
  },
  methods: {
    getPostById() {
      const payload = {
        postId: +this.$route.params.postId,
        access_token: localStorage.getItem("access_token"),
      };
      this.$store
        .dispatch("getPostById", payload)
        .then((resp) => {
          //   console.log(resp.data.comment.id);
          this.post = resp.data.post;
          this.comments = resp.data.comment;

          //   this.$store.commit("SET_POST", post);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    doDeleteComment(commentId) {
      //   console.log(commentId);
      const params = {
        postId: +this.$route.params.postId,
        commentId: +commentId,
        access_token: localStorage.getItem("access_token"),
      };
      this.$store
        .dispatch("doDeleteComment", params)
        .then(() => {
          this.$router.push(`/home`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    doDeletePost() {
      const params = {
        postId: +this.$route.params.postId,
        access_token: localStorage.getItem("access_token"),
      };
      this.$store
        .dispatch("doDeletePost", params)
        .then((resp) => {
          console.log(resp);
          this.$router.push(`/home`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addComment() {
      const params = {
        postId: +this.$route.params.postId,
        access_token: localStorage.getItem("access_token"),
        comment: this.comment,
      };
      this.$store
        .dispatch("addComment", params)
        .then(() => {
          this.$router.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getPostById();
    // console.log(this.$route.params);
    // this.posts;
  },
};
</script>

<style>
.btn-get-started-yellow {
  background-color: #ffdda9;
  color: #372642;
  transition: 0.3s;
  margin-left: -8%;
  margin-bottom: 2%;
}

.btn-get-started-yellow:hover {
  background-color: #fa5741;
  color: #372642;
  transition: 0.3s;
}
</style>
