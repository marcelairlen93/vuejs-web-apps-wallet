<template>
  <div class="tile" id="addList">
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
.tile {
  width: 100%;
}
button.is-grey {
  background-color: darkgrey;
  color: white !important;
  border: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
button.is-grey:focus {
  box-shadow: none;
  border: none;
}
.button svg path {
  color: white !important;
}
</style>