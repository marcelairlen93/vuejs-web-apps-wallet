<template>
  <section class="hero is-fullheight" :class="colorClass">
    <div class="hero-body">
      <div class="container is-fluid is-marginless box">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["colorClass"]
};
</script>

<style scoped>
.hero-body > .box {
  position: absolute;
  height: 90% !important;
  width: 100%;
  background-color: lightgoldenrodyellow;
  margin-top: auto !important;
}
.hero-body {
  margin-top: 60px;
  padding-left: 0;
}
</style>