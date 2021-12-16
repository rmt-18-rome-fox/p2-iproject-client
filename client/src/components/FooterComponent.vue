<template>
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                       <router-link class=" text-white navbar-brand float-left logo-wrapper" to="/">
                            <img src="../assets/footer-logo.png" alt="">
                        </router-link>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Menu</h3>
                        <ul>
                          <li v-if="this.isLog" class="nav-item">
                            <router-link class="nav-link pr-3" to="/adopt-list">Adopted List</router-link>
                          </li>
                          <li v-if="this.isLog" class="nav-item">
                            <router-link class="nav-link pr-3" to="/status-transaction">Status Transaction</router-link>
                          </li>
                          <li v-if="!this.isLog" class="nav-item">
                            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
                          </li>
                          <li v-if="!this.isLog" class="nav-item">
                            <router-link class="nav-link pr-3" to="/register">Sign up</router-link>
                          </li>
                          <li v-if="this.isLog" class="nav-item">
                            <a href="#" @click.prevent="onLogout" class="nav-link pr-3">Sign Out</a>
                          </li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>lorem ipsum</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social">
                        <a href="https://github.com/FLugaB" target="_blank"><i class="fa fa-github"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-twitch"></i></a>
                        <a href="#"><i class="fa fa-apple"></i></a>
                    </div>
                </div>
                <p class="copyright">Company Name © FLugaB</p>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "FooterComponent",
  computed: {
    
    ...mapState(["isLog"]),
  
  },
  methods: {
    ...mapMutations(["LOG_IN"]),

    onLogout(){
      localStorage.clear();
      this.LOG_IN(false)
      this.$router.push("/login");
    }
  },
}
</script>

<style>

.footer-dark {
  padding:50px 0;
  color:#f0f9ff;
  background-color:#282d32;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:#fff;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:24px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
}

</style>