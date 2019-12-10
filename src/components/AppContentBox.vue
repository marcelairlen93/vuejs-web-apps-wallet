<template>
  <div class="box" id="content-box">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#content-box {
  height: calc(100% - 100px);
  overflow-x: auto;
  overflow-y: hidden;
}
</style>