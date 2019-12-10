<template>
  <AppBoard colorClass="is-info is-bold">
    <AppHeader appName="Trelloso"></AppHeader>
    <AppContentBox>
      <draggable class="tile is-ancestor" v-model="lists" group="boardLists" draggable=".draggable">
        <TrelloList v-for="list in lists" :key="list.id" :title="list.title" class="draggable">
          <TrelloCardList :listID="list.id"></TrelloCardList>
          <TrelloAddNewCardButton
            v-if="!cardModalIsOpen(list.id)"
            @click.native="openCardModal(list.id)"
            message="outro cartão"
          ></TrelloAddNewCardButton>
          <TrelloAddNewCardBox
            v-else
            modal="Cartão"
            modalMessage="Insira um título para este cartão..."
            :listID="list.id"
          ></TrelloAddNewCardBox>
        </TrelloList>
        <TrelloAddNewList>
          <TrelloAddNewListButton
            v-if="!listModalIsOpen"
            @click.native="openListModal"
            message="outra lista"
          ></TrelloAddNewListButton>
          <TrelloAddNewListBox v-else modalMessage="Insira o título da lista..." modal="Lista"></TrelloAddNewListBox>
        </TrelloAddNewList>
      </draggable>
    </AppContentBox>
  </AppBoard>
</template>

<script>
import { mapGetters } from "vuex";

import draggable from "vuedraggable";

import AppBoard from "@/components/AppBoard.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppContentBox from "@/components/AppContentBox.vue";

import TrelloAddNewList from "@/components/Trello/TrelloAddNewList.vue";
import TrelloAddNewListBox from "@/components/Trello/TrelloAddNewListBox.vue";
import TrelloAddNewListButton from "@/components/Trello/TrelloAddNewListButton.vue";
import TrelloAddNewCardButton from "@/components/Trello/TrelloAddNewCardButton.vue";
import TrelloAddNewCardBox from "@/components/Trello/TrelloAddNewCardBox.vue";
import TrelloList from "@/components/Trello/TrelloList.vue";
import TrelloCardList from "@/components/Trello/TrelloCardList.vue";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus);

export default {
  components: {
    draggable,
    AppBoard,
    AppHeader,
    AppContentBox,
    TrelloList,
    TrelloCardList,
    TrelloAddNewList,
    TrelloAddNewListButton,
    TrelloAddNewListBox,
    TrelloAddNewCardButton,
    TrelloAddNewCardBox
  },
  methods: {
    openListModal() {
      return this.$store.dispatch("openNewListModal");
    },
    openCardModal(listID) {
      return this.$store.dispatch("openNewCardModal", listID);
    }
  },
  computed: {
    ...mapGetters({
      newList: "newList",
      listModalIsOpen: "openListModal"
    }),
    lists: {
      get() {
        return this.$store.getters.availableLists;
      },
      set(val) {
        this.$store.dispatch("updateListPosition", val);
      }
    },
    cardModalIsOpen() {
      return listID => this.$store.getters.openCardModal(listID);
    }
  }
};
</script>

<style scoped>
.is-ancestor {
  height: calc(100% + 20px) !important;
}
</style>