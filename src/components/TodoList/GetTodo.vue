<template>
  <div id="get-todo" class="container">
    <div class="field has-addons">
      <div class="control">
        <input
          type="text"
          class="input is-primary"
          :value="newTodo"
          @change="getTodo"
          placeholder="I need to..."
        />
      </div>
      <div class="control">
        <button class="button is-primary" @click="addTodo">Add todo</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getTodo(e) {
      this.$store.dispatch("getTodo", e.target.value);
    },
    addTodo() {
      this.$store.dispatch("addTodo");
    }
  },
  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    }
  }
};
</script>

<style>
</style>