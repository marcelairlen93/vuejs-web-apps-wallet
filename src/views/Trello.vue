<template>
  <AppBoard colorClass="is-info is-bold">
    <AppHeader appName="Trello"></AppHeader>
    <AppContentBox>
      <div class="tile is-ancestor">
        <div v-for="list in lists" :key="list.id" class="tile is-3 is-parent">
          <div class="tile is-child box card-list is-paddingless">
            <div class="subtitle">
              <h2>{{list.title}}</h2>
            </div>
            <div class="content is-marginless">
              <ul>
                <div>
                  <li v-for="card in list.cards" :key="card.id" class="box">{{card.title}}</li>
                </div>
              </ul>
            </div>
            <button class="button is-fullwidth is-grey">
              <font-awesome-icon icon="plus" pull="left" :style="{color: 'white'}"></font-awesome-icon>Adicionar cartão
            </button>
          </div>
        </div>
        <div class="tile is-3 is-parent">
          <div v-if="!createList" class="tile is-child">
            <button @click="createList = !createList" class="button is-fullwidth is-grey">
              <font-awesome-icon icon="plus" pull="left"></font-awesome-icon>Adicionar outra lista
            </button>
          </div>
          <div v-else class="tile is-child box card-list" id="addList">
            <div class="content">
              <div class="field">
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    :value="newList"
                    @change="getList"
                    placeholder="Insira o título da lista..."
                  />
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button @click="uncheckAddListButton" class="button is-success">Adicionar Lista</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContentBox>
  </AppBoard>
</template>

<script>
import AppBoard from "@/components/AppBoard.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppContentBox from "@/components/AppContentBox.vue";
import draggable from "vuedraggable";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus);

export default {
  components: {
    AppBoard,
    AppHeader,
    AppContentBox
  },
  data() {
    return {
      createCard: false,
      createList: false
    };
  },
  methods: {
    getList(e) {
      return this.$store.dispatch("getList", e.target.value);
    },
    addList() {
      return this.$store.dispatch("addList");
    },
    uncheckAddListButton() {
      this.addList();
      this.createList = false;
    }
  },
  computed: {
    lists() {
      return this.$store.getters.lists;
    },
    newList() {
      return this.$store.getters.newList;
    }
  }
};
</script>

<style scoped>
* {
  color: #363636 !important;
}
.card-list {
  height: fit-content;
  background-color: aliceblue;
}
#addList {
  height: fit-content;
}
.content {
  max-height: 100%;
  overflow-y: auto;
  margin-right: 5px !important;
}
.content ul {
  margin: 5px 0;
  max-height: 225px;
}
.subtitle {
  padding: 5px 20px 0;
  margin: 5px 0 0 0 !important;
}
li.box {
  margin: 5px 5px 5px 10px;
  padding: 10px;
}
li.box:not(:last-child) {
  margin-bottom: 10px;
}
button.is-grey {
  background-color: darkgrey;
  color: white !important;
}
.button svg path {
  color: white !important;
}
</style>