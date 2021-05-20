<template>
  <section>
    <div class="elementor-container">
      <div class="elementor-row">
        <div class="elementor-column">
          <div class="elementor-img">
            <img src="../assets/aboutus.jpg" alt="img1" />
          </div>
        </div>
        <div class="container-column">
          <h1>DESIGNER,</h1>
          <h1>DRAUGHTSMAN</h1>
          <div class="row">
            <div
              class="column"
              style="
                font-family: 'Barlow Condensed', sans-serif;
                font-style: italic;
                float: left;
              "
            >
              <h1>LAZAR</h1>
            </div>
            <div class="column">
              <img
                src="../assets/aboutus.png"
                style="width: 330px"
                alt="img2"
              />
            </div>
            <div class="column">
              <p>
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
                By the same illusion which lifts the horizon of the sea to the
                level of the spectator on a hillside, the sable cloud beneath
                was dished out, and the car seemed to float in the middle of an
                immense dark sphere, whose upper half was strewn with silver.
              </p>
            </div>
            <span>VIEW BIO</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "aboutus",
  data() {
    return {};
  },
};
</script>

<style scoped>
.elementor-container {
  margin-left: 250px;
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
  padding: 3% 10% 0% 8%;
  margin: 0 -80px 7%;
}
.elementor-container .elementor-row .container-column {
  width: 40%;
  padding: 0 40% 0% 20%;
}
.elementor-container .elementor-img img {
  width: 200%;
}
.elementor-container .elementor-row .container-column h1 {
  color: black;
  font-size: 2.5rem;
  line-height: 60px;
  float: left;
}
.container-column .row {
  width: 500px;
  float: left;
  margin-left: 0;
}
.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
@media screen and (max-width: 1025px) {
  .elementor-container .elementor-img img {
    width: 300%;
    margin-left: 185px;
    margin-top: 180px;
  }
  .elementor-container .elementor-row .container-column {
    width: 40%;
    padding: 0 61% 0% 20%;
  }
  .elementor-container .elementor-row .container-column h1 {
    color: black;
    font-size: 4.5rem;
    line-height: 95px;
    float: left;
  }
  .container-column .row .column p {
    font-size: 1.3rem;
  }
  span {
    margin-bottom: 100px;
  }
}
@media screen and (max-width: 650px) {
  .elementor-column {
    -ms-flex: 70%;
    flex: 70%;
    max-width: 70%;
  }
  .elementor-container .elementor-img img {
    width: 400px;
    margin-left: 150px;
  }
  .elementor-container .elementor-row .container-column h1 {
    color: black;
    font-size: 2.5rem;
    line-height: 60px;
    float: left;
  }
  p {
    font-size: 1.3rem;
    float: left;
    margin-top: 30px;
    margin-bottom: 40px;
    margin-bottom: 1rem;
  }
  .navbar {
    margin-top: 400px;
    margin-bottom: 400px;
  }
}
@media screen and (max-width: 370px) {
  
  .elementor-container .elementor-img img {
    width: 650%;
    margin-left: -180px;
    margin-top: 180px;
  }
  .elementor-container .elementor-row .elementor-column {
  width: 40%;
  position: relative;
  padding: 3% 10% 0% 8%;
  margin-top: 70px;
}
  .elementor-container .elementor-row .container-column {
    width: 40%;
    padding: 1% 5% 0% 5%;
    margin-top: 830px;
    margin-left: -127px;
  }
  .elementor-container .elementor-row .container-column h1 {
    color: black;
    font-size: 2.2rem;
    line-height: 38px;
    float: left;
  }
  .container-column .row{
    width: 300px;
    float: left;
    margin-left: 0;
}
.container-column .row .column p {
    font-size: 1.0rem;
    float: left;
  }
  /* img {
    width: 650%;
    vertical-align: middle;
    border-style: none;
    margin-top: 150px;
    margin-left: -180px;
} */
}
</style>