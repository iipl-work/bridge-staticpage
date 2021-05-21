<template>
  <section>
    <div class="elementor-container">
      <div class="elementor-row">
        <div class="elementor-column">
          <div class="elementor-text-editor">
            <h1>ASK ME</h1>
          </div>
          <div class="elementor-image">
            <img src="../assets/contactus.jpg" alt="img2" />
          </div>
          <!-- <div class="elementor-element">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Example textarea</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <form>
              <input
                type="text"
                class="form-control"
                placeholder="your e-mail"
              />
            </form>
          </div> -->
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="your e-mail"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="your Address"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="your Name"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="your Message"
            rows="10"
            style="margin-bottom: 20px"
          ></textarea>
        </div>
      </div>
      <div>
      <h4>READ MORE</h4>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contactUs",
  data() {
    return {};
  },
};
</script>

<style scoped>
.elementor-container {
  margin-left: 300px;
  /* margin-right: 50px; */
}
.elementor-container .elementor-row {
  width: 750px;
  margin-top: 180px;
  margin-left: 120px;
}
.elementor-text-editor{
  width: 400px;
}
.elementor-image{
  width: 500px;
}
.container{
  margin-left: 300px;
}
.container .row {
  margin-top: -68px;
  width: 750px;
  margin-left: 50px;
}
.form-control {
  border: 1px solid #0b0b0b;
  border-radius: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 90px;
}
h1 {
  margin-bottom: 20px;
  margin-left: -50px;
  float: left;
  font-size: 3.5rem;
}
img {
  margin-bottom: -66px;
    margin-left: -50px;
  float: left;
}
h4{
  font-weight: 600px;
  font-size: 0.8rem;
    color: black;
  margin-left: 60px;
  float: left;
  margin-bottom: 100px;
  margin-top: 40px;
}
@media screen and (max-width: 1025px) {
  .vertical_menu_area_bg {
    width: 200px;
    padding: 50px;
    margin-left: -80px;
}
.elementor-container {
    margin-left: 320px;
}
.container {
    margin-left: 200px;
}
.container .row {
    margin-top: -37px;
    width: 620px;
    margin-left: 170px;
}
h4{
  margin-left: 180px;
}
}
@media screen and (max-width: 370px) {
.elementor-container {
  margin-top: 400px;
    margin-left: -20px;
}
.elementor-container .elementor-row {
    width: 320px;
}
.elementor-text-editor {
    width: 140px;
}
h1 {
    margin-bottom: 30px;
    margin-left: -80px;
    float: left;
    font-size: 2.0rem;
}
.elementor-image {
    width: 300px;
}
.elementor-image[data-v-66906004] {
    width: 200px;
    margin-left: -40px;
}
img {
    width: 280px;
    margin-bottom: -66px;
    margin-left: -50px;
    float: left;
}
.container {
    margin-left: -174px;
    width: 320px;
}
.container .row {
    margin-top: -69px;
    width: 300px;
    margin-left: 160px;
}
.form-control {
    width: 280px;
}
#exampleFormControlInput2{
  margin-top: 19px;
}
}
</style>