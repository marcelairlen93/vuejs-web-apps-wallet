<template>
  <div class="tile is-child">
    <button class="button is-fullwidth is-grey">
      <font-awesome-icon icon="plus" pull="left"></font-awesome-icon>
      Adicionar {{message}}
    </button>
  </div>
</template>

<script>
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus);

export default {
  props: ["message"]
};
</script>

<style scoped>
button.is-grey {
  background-color: darkgrey;
  color: white !important;
}
.button svg path {
  color: white !important;
}
</style>