<template>
  <div class="container">
    <ul>
      <li v-for="todo in completedTodos" :key="todo.id">
        {{todo.body}}
        <div class="field is-grouped is-right">
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
export default {
  methods: {
    remove(todo) {
      return this.$store.dispatch("removeTodo", todo);
    }
  },
  computed: {
    completedTodos() {
      return this.$store.getters.completedTodos;
    }
  }
};
</script>

<style>
</style>