<template>
  <section class="hero is-fullheight" :class="colorClass">
    <div class="hero-body">
      <div class="box">
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
  width: 100%;
  height: 500px !important;
  background-color: lightgoldenrodyellow;
  margin: -15px auto;
}
.hero-body {
  margin-top: 60px;
}
</style>