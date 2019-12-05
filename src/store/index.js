import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function mapId(collection) {
  if (collection instanceof Object && collection) {
    const keys = Object.keys(collection);
    var id = 1;
    keys.forEach(key => {
      if (parseInt(key) >= id) {
        id = parseInt(key);
      }
    });

    id += 1;
    return id;
  }

  return null;
}

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: "",

    lists: {
      1: {
        title: "Minha lista",
        cards: [1]
      }
    },
    cards: {
      1: {
        title: "Teste",
        description: "Card para teste"
      },
      2: {
        title: "Teste2",
        description: "Card para teste2"
      }
    },
    archivedLists: [],
    archivedCards: [],
    newList: "",
    newCard: "",
    openNewListModal: false,
    openNewCardModal: false
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
      var lists = state.lists;
      state.lists = {
        ...lists,
        ...{
          [mapId(lists)]: {
            title: state.newList,
            cards: []
          }
        }
      };
      state.newList = "";
    },
    ARCHIVE_LIST(state, listID) {
      state.archivedLists.push(listID);
    },
    TOGGLE_MODAL_TO_NEW_LIST(state) {
      state.openNewListModal = !state.openNewListModal;
    },

    GET_CARD(state, card) {
      state.newCard = card;
    },
    ADD_CARD(state, listID) {
      var cards = state.cards;
      var cardID = mapId(cards);
      state.cards = {
        ...cards,
        ...{
          [cardID]: {
            title: state.newCard,
            description: ""
          }
        }
      };
      state.lists[listID].cards.push(cardID);
      state.newCard = "";
    },
    ARCHIVE_CARD(state, cardID) {
      state.archivedCards.push(cardID);
    },
    TOGGLE_MODAL_TO_NEW_CARD(state) {
      state.openNewCardModal = !state.openNewCardModal;
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

    getCard({ commit }, card) {
      commit("GET_CARD", card);
    },
    addCard({ commit }, listID) {
      commit("ADD_CARD", listID);
      commit("TOGGLE_MODAL_TO_NEW_CARD");
    },
    archiveCard({ commit }, cardID) {
      commit("ARCHIVE_CARD", cardID);
    },
    openNewCardModal({ commit }) {
      commit("TOGGLE_MODAL_TO_NEW_CARD");
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
      Object.keys(state.lists)
        .filter(list => !state.archivedLists.includes(list))
        .reduce((obj, key) => {
          obj[key] = state.lists[key];
          return obj;
        }, {}),

    openListModal: state => state.openNewListModal,
    openCardModal: state => state.openNewCardModal,

    newCard: state => state.newCard,
    cardsList: state => listID =>
      state.lists[listID].cards
        .filter(card => !state.archivedCards.includes(card))
        .reduce((obj, key) => {
          obj[key] = state.cards[key];
          return obj;
        }, {})
  },
  modules: {}
});
