<template>
  <div class="content is-marginless">
    <ul>
      <div>
        <draggable v-model="cards" group="cardsList">
          <TrelloCard v-for="card in cards" :key="card.id" :title="card.title"></TrelloCard>
        </draggable>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
let self = this;

import TrelloCard from "@/components/Trello/TrelloCard.vue";
export default {
  components: {
    draggable,
    TrelloCard
  },
  props: ["listID"],
  computed: {
    newCard() {
      return listID => this.$store.getters.newCardOnList(this.listID);
    },
    cards: {
      get() {
        return this.$store.getters.cardsList(this.listID);
      },
      set(val) {
        this.$store.dispatch("updateCardPosition", {
          listID: this.listID,
          updatedList: val
        });
      }
    }
  }
};
</script>

<style scoped>
.content {
  max-height: 100%;
  overflow-y: auto;
  margin-right: 5px !important;
}
.content ul {
  margin: 5px 0;
  max-height: 225px;
}
li.box {
  margin: 5px 5px 5px 10px;
  padding: 10px;
}
li.box:not(:last-child) {
  margin-bottom: 10px;
}
</style>