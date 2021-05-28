<template>
  <div class="content">
    <div
      class="title_subtitle_holder"
      style="padding-left: 350px; height: 200px"
    >
      <h1 style="color: #000000">
        <span>EVIL WHISPERS</span>
      </h1>
    </div>
    <div class="container" style="padding-left: 300px">
      <div class="two_columns">
        <div class="column1">
          <div class="portfolio_images">
            <img src="../assets/single1.jpg" alt="img1" />
            <img src="../assets/single2.jpg" alt="img2" />
            <img src="../assets/single3.jpg" alt="img3" />
          </div>
        </div>
        <div class="column2">
          <div class="info portfolio_categories">
            <h6>Category</h6>
            <span class="category"> Drawing </span>
          </div>
          <h6>About This Project</h6>
        </div>
        <div class="info portfolio_content">
          <p>
            Lorem ipsum dolor sit amet, ut per homero fabulas propriae, atqui
            quodsi ut cum. Vix congue iuvaret iracundia et, mollis alienum
            mediocritatem ea ius, altera labore alienum pro ad. No his praesent
            adolescens eloquentiam. Te usu minim aeque atomorum. Mel id natum
            urbanitas. Quo lorem nostrum maluisset ei.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "single",
  data() {
    return {};
  },
};
</script>

<style>
h1 {
  float: left;
  letter-spacing: 6px;
  font-size: 2.8rem;
}
.two_columns .column1 {
  width: 800px;
}
.two_columns .column1 .portfolio_images img {
  margin-bottom: 25px;
  width: 80%;
  float: left;
}
.two_columns .column2 {
  width: 180px;
  margin-left: 600px;
}
h6 {
  font-weight: 600;
  font-size: 13px;
}
</style>