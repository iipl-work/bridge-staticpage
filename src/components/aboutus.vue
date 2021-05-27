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
                width: 180px;
              "
            >
              <h1>LAZAR</h1>
            </div>
            <div class="column" id="img1">
              <img
                src="../assets/aboutus.png"
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
  margin-top: 180px;
    margin-left: 100px;
}
.elementor-container .elementor-row .elementor-column {
  width: 40%;
  position: relative;
  padding: 3% 10% 0% 8%;
  margin: 0 -80px 7%;
}
.elementor-container .elementor-row .container-column {
  width: 40%;
  padding: 0 0% 0% 10%;
}
.elementor-container .elementor-img img {
  width: 150%;
}
.elementor-container .elementor-row .container-column h1 {
  color: black;
  font-size: 3.5rem;
  line-height: 60px;
  float: left;
  letter-spacing: 10px;
}
  .container-column .row .column img{
    width: 420px;
  }
p {
  letter-spacing: 1px;
    line-height: 30px;
}
span{
  font-weight: 600;
    margin-top: 20px;
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
  .elementor-container {
    margin-left: 120px;
}
  .elementor-container .elementor-img img {
    width: 240%;
    margin-left: 230px;
    margin-top: 0px;
}
  .elementor-container .elementor-row .container-column {
    width: 40%;
    padding: 0 61% 0% 20%;
  }
  .elementor-container .elementor-row .container-column h1 {
    color: black;
    font-size: 5.5rem;
    line-height: 100px;
    float: left;
  }
  .container-column .row .column p {
    font-size: 1.5rem;
  }
  span {
    font-size: 2.0rem;
    margin-bottom: 100px;
  }
}
@media screen and (max-width: 770px) {
  .elementor-container .elementor-row {
    margin-left: -40px;
  }
  .elementor-column {
    -ms-flex: 70%;
    flex: 70%;
    max-width: 70%;
  }
  /* .elementor-container .elementor-row{
    margin-top: -180px;
  } */
  .elementor-container .elementor-row .container-column {
    width: 40%;
    padding: 130% 0% 0% 0%;
    margin-left: -320px;
}

  .elementor-container .elementor-img img {
    margin-top: -240px;
    width: 450px;
    margin-left: 100px;
}

  .elementor-container .elementor-row .container-column h1 {
    color: black;
    font-size: 5.5rem;
    line-height: 100px;
    float: left;
  }
  .container-column .row {
    width: 710px;
    float: left;
    margin-left: 0;
}
  .container-column .row .column img{
    margin-left: 70px;
  width: 460px;
    margin-top: 20px;
}
  p {
    line-height: 40px;
    font-size: 1.5rem;
    float: left;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .navbar {
    margin-top: 400px;
    margin-bottom: 400px;
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
  .elementor-container{
    margin-left: 240px;
  }
  .elementor-container .elementor-img img {
    width: 580%;
    margin-left: -140px;
    margin-top: 10px;
  }
  .elementor-container .elementor-row .elementor-column {
  width: 40%;
  position: relative;
  padding: 3% 10% 0% 8%;
  margin-top: -160px;
}
  .elementor-container .elementor-row .container-column {
    width: 40%;
    padding: 1% 5% 0% 5%;
    margin-top: 470px;
    margin-left: -127px;
  }
  .elementor-container .elementor-row .container-column h1 {
    letter-spacing: 2px;
    color: black;
    font-size: 3.6rem;
    line-height: 52px;
    float: left;
}
  .container-column .row{
    width: 340px;
    float: left;
    margin-left: 0;
}
.container-column .row .column p {
    font-size: 1.0rem;
    float: left;
  }
  .container-column .row .column img {
    margin-left: 0px;
    width: 340px;
    margin-top: 20px;
}
span{
  font-size: 1.1rem;
}
.form-control {
    width: 340px;
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