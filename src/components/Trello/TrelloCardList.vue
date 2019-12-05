<template>
  <div class="content is-marginless">
    <ul>
      <div>
        <TrelloCard v-for="(card, id) in cards" :key="id" :title="card.title"></TrelloCard>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
let self = this;

import TrelloCard from "@/components/Trello/TrelloCard.vue";
export default {
  components: {
    TrelloCard
  },
  props: ["listID"],
  computed: {
    ...mapGetters(["newCard"]),
    cards() {
      return this.$store.getters.cardsList(this.listID);
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