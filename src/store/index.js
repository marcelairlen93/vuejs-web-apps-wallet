import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: "",

    lists: [
      {
        title: "Minha lista",
        cards: [
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now()
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 1
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 2
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 3
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 4
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 5
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 6
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 7
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 8
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 9
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 10
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 11
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 12
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 13
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 14
          },
          {
            title: "Teste",
            description: "Card para teste",
            comments: [],
            id: Date.now() + 15
          }
        ],
        id: Date.now()
      }
    ],
    archivedLists: [],
    newList: "",
    newCard: ""
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
        title: state.newList,
        cards: []
      });
    },
    EDIT_LIST(state, list) {
      let lists = state.lists;
      lists.splice(lists.indexOf(list), 1);
      state.lists = lists;
      state.newList = list.title;
    },
    ARCHIVE_LIST(state, list) {
      let lists = state.lists;
      lists.splice(lists.indexOf(list), 1);
      state.archivedLists.push(list);
    },

    GET_CARD(state, card) {
      state.newCard = card;
    },
    ADD_CARD(state, cardInfo) {
      state.lists
        .find(list => list.id === cardInfo.listId)
        .cards.push({
          title: newCard,
          description: null,
          id: Date.now()
        });
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
    },
    archiveList({ commit }, list) {
      commit("ARCHIVE_LIST", list);
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
    lists: state => state.lists
  },
  modules: {}
});
