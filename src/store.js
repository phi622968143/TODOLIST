import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    completeTodo(state, index) {
      state.todos[index].completed = true;
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    },
  },
  actions: {
    addTodoAction({ commit }, todo) {
      commit('addTodo', todo);
    },
    completeTodoAction({ commit }, index) {
      commit('completeTodo', index);
    },
    deleteTodoAction({ commit }, index) {
      commit('deleteTodo', index);
    },
  },
});
