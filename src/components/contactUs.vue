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
          <div class="elementor-element">
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
          </div>
        </div>
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
</style>