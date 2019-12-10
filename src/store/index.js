import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: "",

    lists: [
      {
        id: 1,
        title: "Minha lista",
        cards: [1, 2],
        openNewCardModal: false,
        newCard: ""
      }
    ],
    cards: [
      { id: 1, title: "Teste", description: "Card para teste" },
      {
        id: 2,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 3,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 4,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 5,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 6,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 7,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 8,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 9,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 10,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 11,
        title: "Teste2",
        description: "Card para teste2"
      },
      {
        id: 12,
        title: "Teste2",
        description: "Card para teste2"
      }
    ],
    archivedLists: [],
    archivedCards: [],
    newList: "",
    openNewListModal: false
  },
  mutations: {
    GET_TODO(state, todo) {
      state.newTodo = todo;
    },
    ADD_TODO(state) {
      state.todos.push({
        body: state.newTodo,
        completed: false,
        id: Date.now()
      });
      state.newTodo = "";
    },
    EDIT_TODO(state, todo) {
      var todos = state.todos;
      todos.splice(todos.indexOf(todo), 1);
      state.todos = todos;
      state.newTodo = todo.body;
    },
    REMOVE_TODO(state, todo) {
      var todos = state.todos;
      todos.splice(todos.indexOf(todo), 1);
    },
    COMPLETE_TODO(state, todo) {
      todo.completed = !todo.completed;
    },
    CLEAR_TODO(state) {
      state.newTodo = "";
    },

    GET_LIST(state, list) {
      state.newList = list;
    },
    ADD_LIST(state) {
      state.lists.push({
        id: state.lists.length + 1,
        title: state.newList,
        cards: [],
        openNewCardModal: false,
        newCard: ""
      });
      state.newList = "";
    },
    ARCHIVE_LIST(state, listID) {
      state.archivedLists.push(listID);
    },
    TOGGLE_MODAL_TO_NEW_LIST(state) {
      state.openNewListModal = !state.openNewListModal;
    },
    UPDATE_LIST_POSITION(state, listOrder) {
      state.lists = listOrder;
    },

    GET_CARD(state, cardData) {
      state.lists.find(list => list.id == cardData.listID).newCard =
        cardData.card;
    },
    ADD_CARD(state, listID) {
      var cardID = state.cards.length + 1;
      var list = state.lists.find(list => list.id == listID);
      state.cards.push({
        id: cardID,
        title: list.newCard,
        description: ""
      });
      list.cards.push(cardID);
      list.newCard = "";
    },
    ARCHIVE_CARD(state, cardID) {
      state.archivedCards.push(cardID);
    },
    TOGGLE_MODAL_TO_NEW_CARD(state, listID) {
      state.lists.find(
        list => list.id == listID
      ).openNewCardModal = !state.lists.find(list => list.id == listID)
        .openNewCardModal;
    },
    UPDATE_CARD_POSITION(state, cardListData) {
      var updatedCardList = [];
      cardListData.updatedList.forEach(card => updatedCardList.push(card.id));
      state.lists.find(
        list => list.id == cardListData.listID
      ).cards = updatedCardList;
    }
  },
  actions: {
    getTodo({ commit }, todo) {
      commit("GET_TODO", todo);
    },
    addTodo({ commit }) {
      commit("ADD_TODO");
    },
    editTodo({ commit }, todo) {
      commit("EDIT_TODO", todo);
    },
    removeTodo({ commit }, todo) {
      commit("REMOVE_TODO", todo);
    },
    completeTodo({ commit }, todo) {
      commit("COMPLETE_TODO", todo);
    },
    clearTodo({ commit }) {
      commit("CLEAR_TODO");
    },

    getList({ commit }, list) {
      commit("GET_LIST", list);
    },
    addList({ commit }) {
      commit("ADD_LIST");
      commit("TOGGLE_MODAL_TO_NEW_LIST");
    },
    archiveList({ commit }, listID) {
      commit("ARCHIVE_LIST", listID);
    },
    openNewListModal({ commit }) {
      commit("TOGGLE_MODAL_TO_NEW_LIST");
    },
    updateListPosition({ commit }, listOrder) {
      commit("UPDATE_LIST_POSITION", listOrder);
    },

    getCard({ commit }, cardData) {
      commit("GET_CARD", cardData);
    },
    addCard({ commit }, listID) {
      commit("ADD_CARD", listID);
      commit("TOGGLE_MODAL_TO_NEW_CARD", listID);
    },
    archiveCard({ commit }, cardID) {
      commit("ARCHIVE_CARD", cardID);
    },
    openNewCardModal({ commit }, listID) {
      commit("TOGGLE_MODAL_TO_NEW_CARD", listID);
    },
    updateCardPosition({ commit }, cardData) {
      commit("UPDATE_CARD_POSITION", cardData);
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state =>
      state.todos.filter(todo => {
        return !todo.completed;
      }),
    completedTodos: state =>
      state.todos.filter(todo => {
        return todo.completed;
      }),

    newList: state => state.newList,
    availableLists: state =>
      state.lists.filter(list => !state.archivedLists.includes(list.id)),

    openListModal: state => state.openNewListModal,
    openCardModal: state => listID =>
      state.lists.find(list => list.id == listID).openNewCardModal,

    newCardOnList: state => listID =>
      state.lists.find(list => list.id == listID).newCard,
    cardsList: state => listID =>
      state.lists
        .find(list => list.id == listID)
        .cards.map(cardID => state.cards.find(card => card.id == cardID))
  },
  modules: {}
});
