<template>
  <div>
    <h1>To-Do List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed" @change="completeTodo(index)" />
        {{ todo.text }}
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.$store.dispatch('addTodoAction', { text: this.newTodo, completed: false });
        this.newTodo = '';
      }
    },
    completeTodo(index) {
      this.$store.dispatch('completeTodoAction', index);
    },
    deleteTodo(index) {
      this.$store.dispatch('deleteTodoAction', index);
    },
  },
};
</script>
