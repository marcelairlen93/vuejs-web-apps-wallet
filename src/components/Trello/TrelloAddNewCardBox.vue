<template>
  <div class="tile is-child box card-list" id="addList">
    <div class="content">
      <div class="field">
        <div class="control">
          <input
            type="text"
            class="input"
            :value="addNewCard"
            @change="getCard"
            :placeholder="modalMessage"
          />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-success" @click="addCard">Adicionar {{modal}}</button>
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
  props: ["modalMessage", "modal", "listID"],
  methods: {
    getCard(e) {
      var value = e.target.value;
      var id = this.listID;
      return this.$store.dispatch("getCard", { listID: id, card: value });
    },
    addCard() {
      return this.$store.dispatch("addCard", this.listID);
    },
    closeModal() {
      return this.$store.dispatch("openNewCardModal", this.listID);
    }
  },
  computed: {
    addNewCard() {
      var id = this.listID;
      return this.$store.getters.newCardOnList(id);
    }
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