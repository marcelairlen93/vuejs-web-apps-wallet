<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Varela+Round");
html,
body {
  height: 100%;
}
body {
  background: #fff;
  padding: 0;
  margin: 0;
  font-family: "Varela Round", sans-serif !important;
}
</style>
