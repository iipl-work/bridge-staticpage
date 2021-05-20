<template>
  <div id="nav">
     <aside class="fixed-top">
      <div class="vertical_menu_area_inner">
        <div class="vertical_menu_area_bg">
          <div class="logo_wrapper" style="margin-top: -20px">
            <div class="q_logo">
              <img
                class="normal"
                src="./assets/logo.png"
                alt="Logo"
                style="height: 100%"
              />
            </div>
          </div>
          <nav class="navbar navbar-expand-lg navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav" style="display: table-row">
                <li class="nav-item">
                  <router-link to="/home" class="nav-link">HOME</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">ABOUT</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">SINGLE</a>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link" @click="name = 'sirisha'">CONTACT</router-link>
                </li>
              </ul>
            </div>
          </nav>
          <div class="social text-gray">
            <a href="#"><i class="fab fa-dribbble"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </aside>
  </div>
  <router-view/>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* #nav {
  padding: 30px;
} */


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: "Barlow Condensed", sans-serif;
  color: #000000;
  font-size: 15px;
  font-weight: 400;
}
aside .fixed-top {
  position: fixed;
  top: 0px;
}
.vertical_menu_area_inner {
    height: 100%;
    position: relative;
    width: 30%;
}
.vertical_menu_area_bg {
    width: 400px;
    padding: 50px;
    margin-left: -60px;
}
.q_logo {
  top: auto;
  vertical-align: middle;
  left: -50%;
  height: 130px;
  visibility: visible;
}
/* .container .navbar-light .navbar-nav .nav-link {
  color: black;
} */
.navbar{
  padding: 60px 0 100px;
  margin-left: 90px;
}
.navbar-light .navbar-nav .nav-link {
    color: rgb(0 0 0);
}
.navbar-nav .nav-link {
  margin-right: 600px;
}
.nav-link {
  padding: 0.6rem 10rem;
}
.navbar-toggler-icon {
  width: 0.8em;
  height: 0.8em;
}
.navbar-light .navbar-toggler {
  margin-top: -40px;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.5);
  border-color: white;
}
.social {
  margin-left: 30px;
  padding: 1.4rem 0;
  display: block;
}
.social i {
  font-size: 1.2rem;
  padding: 0.6rem;
}
.social i:hover {
  color: gray;
}
.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.nav .logo_wrapper {
  padding: 1rem 0;
}
a {
  color: black;
  text-decoration: none;
}
@media screen and (max-width: 1024px) {
 .navbar{
  /* margin-top: 400px; */
  margin-bottom: 400px;
  font-size: 1.1rem;
}
.navbar-nav li{
  float: left;
}
}
@media screen and (max-width: 650px) {
  .navbar{
    margin-left: 30px;
  }
.vertical_menu_area_bg {
    width: 200px;
    padding: 50px;
    margin-left: -30px;
}  
.social {
  display: none;
}
.q_logo {
  height: 100px;
 margin-top: -49px;
 margin-left: 230px;
}
}
@media screen and (max-width: 370px) {
  .navbar{
  margin-top: -50px;
  }
.q_logo {
  height: 80px;
 margin-top: -49px;
 margin-left: 170px;
}
}
</style>
