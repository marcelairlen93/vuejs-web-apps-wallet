<template>
  <div class="box">
    <div class="title">{{appName}}</div>
  </div>
</template>

<script>
export default {
  props: ["appName"]
};
</script>

<style scoped>
.title {
  color: #363636 !important;
}
</style>