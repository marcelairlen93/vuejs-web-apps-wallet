<template>
  <div class="container">
    <h3 v-if="todos.length > 0">Current: {{todos.length}}</h3>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.body}}
        <div class="field is-grouped is-right">
          <div class="control">
            <button class="button is-success" @click="complete(todo)">
              <font-awesome-icon :icon="['far', 'check-square']" />
            </button>
          </div>
          <div class="control">
            <button class="button is-white" @click="edit(todo)">
              <font-awesome-icon :icon="['far', 'edit']" />
            </button>
          </div>
          <div class="control">
            <button class="button is-danger" @click="remove(todo)">
              <font-awesome-icon :icon="['far', 'trash-alt']" />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  faEdit,
  faTrashAlt,
  faCheckSquare
} from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faEdit, faTrashAlt, faCheckSquare);

export default {
  methods: {
    complete(todo) {
      return this.$store.dispatch("completeTodo", todo);
    },
    edit(todo) {
      return this.$store.dispatch("editTodo", todo);
    },
    remove(todo) {
      return this.$store.dispatch("removeTodo", todo);
    }
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  }
};
</script>

<style>
</style>