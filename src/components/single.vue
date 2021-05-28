<template>
  <div class="content">
    <div
      class="title_subtitle_holder"
      style="padding-left: 350px; height: 110px"
    >
      <h1 style="color: #000000">
        <span>EVIL WHISPERS</span>
      </h1>
    </div>
    <div class="container" style="padding-left: 330px">
      <div class="row">
        <div class="column1">
          <div class="portfolio_images">
            <img src="../assets/single1.jpg" alt="img1" />
            <img src="../assets/single2.jpg" alt="img2" />
            <img src="../assets/single3.jpg" alt="img3" />
          </div>
        </div>
        <div class="column2">
          <div class="fixed-content">
            <div class="info_portfolio_categories">
            <h6>Category</h6>
            <span class="category" style="float: left"> Drawing </span>
          </div>
           <div class="info portfolio_content">
            <h6>About This Project</h6>
            <p>
              Lorem ipsum dolor sit amet, ut per homero fabulas propriae, atqui
              quodsi ut cum. Vix congue iuvaret iracundia et, mollis alienum
              mediocritatem ea ius, altera labore alienum pro ad. No his
              praesent adolescens eloquentiam. Te usu minim aeque atomorum. Mel
              id natum urbanitas. Quo lorem nostrum maluisset ei.
            </p>
          </div>        
          </div>       
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
.title_subtitle_holder{
  margin-top: 100px;
}
h1 {
  float: left;
  letter-spacing: 6px;
  font-size: 2.8rem;
}
.row {
   display: flex;
  flex-wrap: wrap;
  width: 1000px;
}
.row .column1 {
  width: 70%;
}
.row .column1 img {
  width: 93%;
  float: left;
  margin-top: 20px;
}
.row .column2 {
  width: 30%;
}

h6 {
  float: left;
  font-weight: 600;
  font-size: 13px;
}
.info_portfolio_categories {
  padding: 0px 123px 56px 0px;
  margin: 15px 107px 0px 0px;
}
.info {
  padding: 0 40px 0px 0px;
}
p {
  word-break: break-all;
  float: left;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1190px;
  }
}
</style>