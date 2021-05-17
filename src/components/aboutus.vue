<template>
  <h1>about us</h1>
  <section>
    <div class="elementor-container">
      <div class="elementor-row">
        <div class="elementor-column">
          <div class="elementor-img">
            <img
              style="width: 200%"
              src="../assets/aboutus.jpg"
              alt="img1"
            />
          </div>
        </div>
        <div class="container-column">
            <h1>DESIGNER,</h1>
            <h1>DRAUGHTSMAN</h1>
            <div class="row">
             <h1>LAZAR</h1>
             <img src="../assets/aboutus.png" alt="img2">
            </div>
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.</p>
            <span>VIEW BIO</span>
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

<style>
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

</style>