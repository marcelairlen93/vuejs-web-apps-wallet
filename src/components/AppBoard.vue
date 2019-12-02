<template>
  <section class="hero is-fullheight" :class="colorClass">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <slot></slot>
        </div>
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
.box {
  width: 100%;
  min-height: 500px;
  background-color: lightgoldenrodyellow;
  margin: -15px auto;
}
</style>