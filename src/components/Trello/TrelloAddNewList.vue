<template>
  <div class="tile is-3 is-parent">
    <slot></slot>
  </div>
</template>

<script>
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus);

export default {};
</script>

<style scoped>
.is-parent {
  height: fit-content;
}
</style>