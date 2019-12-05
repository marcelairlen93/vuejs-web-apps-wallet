<template>
  <div class="tile is-3 is-parent">
    <div class="tile is-child box card-list is-paddingless">
      <div class="subtitle">
        <h2>{{title}}</h2>
      </div>

      <slot></slot>

      <!-- <button class="button is-fullwidth is-grey">
        <font-awesome-icon icon="plus" pull="left" :style="{color: 'white'}"></font-awesome-icon>Adicionar cartão
      </button>-->
    </div>
  </div>
</template>

<script>
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus);

export default {
  props: ["title"]
};
</script>

<style scoped>
* {
  color: #363636 !important;
}
.is-parent {
  height: fit-content;
}
.card-list {
  height: fit-content;
  background-color: aliceblue;
}
#addList {
  height: fit-content;
}
.subtitle {
  padding: 5px 20px 0;
  margin: 5px 0 0 0 !important;
}
button.is-grey {
  background-color: darkgrey;
  color: white !important;
}
.button svg path {
  color: white !important;
}
</style>