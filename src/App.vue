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
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
}
body {
  background: #fff;
  padding: 0;
  margin: 0;
  font-family: "Varela Round", sans-serif !important;
}
.is-borderless {
  border: none !important;
}
#home-page:focus {
  background: transparent !important;
}
</style>
