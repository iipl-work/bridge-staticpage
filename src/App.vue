<template>
  <section>
    <header>
      <div class="container">
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
                <a class="nav-link" href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="logo_wrapper" style="margin-top: -80px">
          <div class="q_logo">
            <img
              class="normal"
              src="./assets/logo.png"
              alt="Logo"
              style="height: 100%"
            />
          </div>
        </div>
        <div class="social text-gray">
          <a href="#"><i class="fab fa-dribbble"></i></a>
          <a href="#"><i class="fab fa-behance"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>

        <!-- <nav class="nav">
          <div class="nav-menu flex-row">
            <div class="toggle-collapse">
              <div class="toggle-icons">
                <i class="fas fa-bars"></i>
              </div>
            </div>
            <div>
              <ul class="nav-items">
                <li class="nav-link">
                  <a href="#">HOME</a>
                </li>
                <li class="nav-link">
                  <a href="#">ABOUT</a>
                </li>
                <li class="nav-link">
                  <a href="#">SINGLE</a>
                </li>
                <li class="nav-link">
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </div>
                 <div class="logo_wrapper">
              <div class="q_logo">
                <img
                  class="normal"
                  src="./assets/logo.png"
                  alt="Logo"
                  style="height: 100%"
                />
              </div>
            </div>
          </div>
        </nav> -->
        <!-- <div class="mobile_menu_button">
          <span> <i class="fas fa-bars"></i> </span>
        </div>
        <div class="logo_wrapper">
          <div class="q_logo">
            <img
              class="normal"
              src="./assets/logo.png"
              alt="Logo"
              style="height: 100%"
            />
          </div>
        </div> -->
        <!-- <a id="back_to_top" href="#" class="on">
          <span class="fa-stack">
            <span
              aria-hidden="true"
              class="qode_icon_font_elegant arrow_up"
            ></span>
          </span>
        </a> -->
      </div>
    </header>
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
    <div class="move-up" style="position: absolute; right: 6%;">
            <span><i class="fas fa-arrow-circle-up fa-2x"></i></span>
    </div>
    <div class="container">
        <p>A super long component</p>
        <ScrollTopArrow></ScrollTopArrow>
    </div>
    <!-- <div class="move-up">
            <span><i class="far fa-arrow-square-up"></i></span>
    </div> -->
  </section>
</template>

<script>
import ScrollTopArrow from './components/ScrollTopArrow.vue';
export default {
  name: "App",
  data() {
    return {
         ScrollTopArrow
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
.mobile_menu_button {
  float: left;
  height: 100px;
  margin: 0 20px 0 0;
}
.q_logo {
  top: auto;
  vertical-align: middle;
  left: -50%;
  height: 80px;
  visibility: visible;
}
/* @media only screen and (max-width:750px){
    .nav .nav-menu, .nav .nav-items{
        flex-direction: column;
    }
    .nav .toggle-collapse{
        display: initial;
    } */
.container {
  margin-bottom: 80px;
  flex-wrap: wrap;
}
.container .navbar-light .navbar-nav .nav-link {
  color: rgb(0, 0, 0);
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
.social{
    padding: 1.4rem 0;
    display: block;
}
.social i{
    font-size: 1.2rem;
    padding: 0.6rem;
}
.social i:hover{
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
.nav .nav-menu .toggle-collapse {
  position: absolute;
  top: 0%;
  width: 90%;
  cursor: pointer;
  display: none;
}
.nav .nav-menu .toggle-collapse .toggle-icons {
  display: flex;
  justify-content: flex-start;
  padding: 1.7rem 0;
}
.nav .nav-menu .toggle-collapse .toggle-icons i {
  font-size: 1.2rem;
}
.nav .nav-items {
  list-style-type: none;
  margin: 0;
}
@media only screen and (max-width: 930px) {
  .nav .nav-menu,
  .nav .nav-items {
    flex-direction: column;
  }
  .nav .nav-menu .toggle-collapse {
    display: initial;
  }
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
/*---------------move-top---------------*/
/* .move-up{
    position: absolute;
    right: 6%;
    top: 50%;
} */
/* .move-up span{
    color: rgb(8, 89, 121);
}
.move-up span:hover{
    color: black;
    cursor: pointer;
} */
</style>
