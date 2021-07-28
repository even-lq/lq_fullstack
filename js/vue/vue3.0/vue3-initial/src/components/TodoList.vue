<template>
  <section class="todoapp">
    <header class="header">
      <h1>vue3 todos</h1>
      <input
        type="text"
        class="new-todo"
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="想干的事"
      />
    </header>
  </section>
  <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for="(todo, index) in todos" :key="todo.id" :class="{completed: todo.completed}">
        <div class="view">
          <input type="checkbox" name="" class="toggle" id="toggle-all" v-model="todo.completed">
          <label>{{todo.title}}</label>
          <button class="destroy" @click="deleteTodo(index)"></button>
        </div>
      </li>
    </ul>
  </section>
  <div class="footer">
    <span class="todo-count">
      <strong>{{remaining}}</strong> left
    </span>
    <button class="clear-completed" @click="todos = todos.filter(thing => !thing.completed)">
      Clear completed
    </button>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      newTodo: "",
      todos: []
    });

    let remaining = computed(() => state.todos.filter(thing => !thing.completed).length)

    function addTodo() {
      let value = state.newTodo && state.newTodo.trim()
      state.todos.push({
        id: state.todos.length,
        title: value,
        completed: false
      })
      state.newTodo = ''
      console.log(state.todos);
    }

    function deleteTodo(index) {
      state.todos.splice(index, 1)
    }

   

    return {
      ...toRefs(state),
      remaining,
      addTodo,
      deleteTodo 
    }
  },
};
</script>

<style>
.header.fixed {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}
</style>