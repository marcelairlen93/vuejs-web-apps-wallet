<template>
  <div class="tile is-child box card-list" id="addList">
    <div class="content">
      <div class="field">
        <div class="control">
          <input
            type="text"
            class="input"
            :value="newList"
            @change="getList"
            :placeholder="modalMessage"
          />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-success" @click="addList">Adicionar {{modal}}</button>
        </div>
        <div class="container">
          <font-awesome-icon icon="times" size="2x" @click="closeModal"></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTimes);

export default {
  props: ["modalMessage", "modal"],
  methods: {
    getList(e) {
      return this.$store.dispatch("getList", e.target.value);
    },
    addList() {
      return this.$store.dispatch("addList");
    },
    closeModal() {
      return this.$store.dispatch("openNewListModal");
    }
  },
  computed: {
    ...mapGetters(["newList"])
  }
};
</script>

<style scoped>
.content > .field:first-child {
  margin-bottom: 5px;
}
.card-list {
  height: fit-content;
  padding: 5px;
  background-color: aliceblue;
}
#addList {
  height: fit-content;
}
svg path {
  color: darkgrey;
}

svg:hover path {
  color: #888888;
}
</style>