<template>
  <div class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <router-link class="button is-warning is-inverted is-outlined is-rounded is-medium is-fullwidth" to="/todos">Todo List</router-link>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-half">
            <router-link class="button is-warning is-inverted is-outlined is-rounded is-medium is-fullwidth" to="/calculator">Calculadora</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
a {
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
</style>
