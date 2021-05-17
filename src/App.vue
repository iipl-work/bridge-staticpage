<template>
  <section>
    <div class="container">
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
                  <a class="nav-link" href="#">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">ABOUT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">SINGLE</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" @click="name = 'sirisha'">CONTACT</a>
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
    <div class="element-inner">
       <div class="elementor-container" style="margin-top: 30px">
      <div class="elementor-row">
        <div class="elementor-column">
          <img style="width: 200%" src="./assets/bridge-img1.jpg" alt="img1" />
          <img style="width: 200%" src="./assets/bridge-img2.jpg" alt="img1" />
          <img style="width: 200%" src="./assets/bridge-img3.jpg" alt="img1" />
          <img style="width: 200%" src="./assets/bridge-img4.jpg" alt="img1" />
          <img style="width: 200%" src="./assets/bridge-img5.jpg" alt="img1" />
        </div>
        <div class="elementor-column">
          <img style="width: 300%" src="./assets/bridge1.jpg" alt="img1" />
          <img style="width: 300%" src="./assets/bridge2.jpg" alt="img1" />
          <img style="width: 300%" src="./assets/bridge3.jpg" alt="img1" />
          <img style="width: 300%" src="./assets/bridge4.jpg" alt="img1" />
          <img style="width: 300%" src="./assets/bridge5.jpg" alt="img1" />
        </div>
      </div>
    </div>
    </div>
    </div>
     <contactUs/>
     <aboutus/>
  </section>
</template>

<script>
import contactUs from './components/contactUs'
import aboutus from './components/aboutus'
export default {
  name: "App",
  components: {
    contactUs,
    aboutus
  },
  data() {
    return {
      name: 'siri'
    };
  },
};
</script>

<style>
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
.element-inner{
  /* margin-top: -610px; */
  padding-left: 200px;
}
.elementor-container .elementor-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.elementor-container .elementor-row .elementor-column {
  width: 40%;
  position: relative;
  padding: 0% 13% 0% 12%;
  margin: 0 0 16%;
}
img {
  margin-bottom: 40px;
}
/* @media screen and (max-width: 1000px) {
  .elementor-column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
} */

@media screen and (max-width: 650px) {
  .elementor-column {
    -ms-flex: 70%;
    flex: 70%;
    max-width: 70%;
  }
}
</style>
