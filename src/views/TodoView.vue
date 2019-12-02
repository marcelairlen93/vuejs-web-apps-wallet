<template>
  <section class="hero is-fullheight is-info is-bold">
    <div class="hero-body">
      <div class="container">
        <completed-todos></completed-todos>
        <get-todo></get-todo>
        <current-todos></current-todos>
      </div>
    </div>
  </section>
</template>

<script>
import GetTodo from "../components/TodoList/GetTodo.vue";
import CurrentTodos from "../components/TodoList/CurrentTodos.vue";
import CompletedTodos from "../components/TodoList/CompletedTodos.vue";
export default {
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
};
</script>

<style>
</style>